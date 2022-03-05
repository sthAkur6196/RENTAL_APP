var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
    res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let {getConnection} = require("./modDB.js");
let pageSize=5;

const cookieParser=require("cookie-parser");
app.use(cookieParser());

app.get("/cookie",function(req,res){
    let name=req.cookies.name;
    if(!name){
        res.cookie("name","Guest");
        res.send(`Cookie created ::: ${name}`);
    }
    else {
        res.send(`Cookie recieved ::: ${name}`);
    }
})

function setCookie(req,res){
    let userData=req.cookies.userData;
    if(!userData){
        userData={user:"Guest",pages:[]};
    }
    userData.pages.push({url:req.url,time:Date.now()});
    res.cookie("userData",userData);
}

app.get("/explore",function(req,res){
    setCookie(req,res);
    let page= req.query.page ? +req.query.page : 1;
    let accom_type=req.query.accom_type;
    let sort=req.query.sort;
    let connection = getConnection();
    let options=[];
    let optionsStr="";
    if(accom_type){
        options.push(accom_type);
        optionsStr=optionsStr+" WHERE accom_type=?";
    } 
    if(sort){
        optionsStr=optionsStr+` ORDER BY ${sort}`;
    }
    let sql="SELECT * FROM accomodations"+optionsStr;
    connection.query(sql,options,function(err,result){
        if(err){
            console.log(err);
            res.status(404).send("Error in fetching data");
        }
        else {
            let data=result;
            res.send(makeData(page,pageSize,data));
        }
    });
});

makeData=(pageNum,size,data1)=>{
    let startIndex=(pageNum-1)*size;
    let endIndex =
        data1.length > startIndex+size-1 
            ? startIndex+size-1
            : data1.length-1;
    let data2=data1.filter((lt,index)=>index>=startIndex && index<=endIndex);
    return dataFull={
        data : data2,
        numOfItems : data1.length,
        startIndex : startIndex,
        endIndex : endIndex
    };
}

app.get("/property/:id",function(req,res){
    setCookie(req,res);
    let id = req.params.id;
    let connection=getConnection();
    let sql="SELECT * FROM accomodations WHERE accom_id=?";
    connection.query(sql,id,function(err,result){
        if(err){
            console.log(err);
            res.status(404).send("Error in fetching data");
        }
        else if(result.length===0){
            res.status(404).send("No match found");
        }
        else res.send(result);
    });
});

app.post("/signup",function(req,res){
    setCookie(req,res);
    let connection=getConnection();
    let body=req.body;
    let {name,mobile_number,email,username,pass_word,role}=body;
    let sql="INSERT INTO users(name,mobile_number,email,username,pass_word) VALUES(?,?,?,?,?)";
    connection.query(sql,[name,mobile_number,email,username,pass_word],function(err,result){
        if(err){
            console.log(err);
            res.status(404).send("Error in inserting data");
        }
        else res.send(result);
    });
});

app.post("/login",function(req,res){
    let connection=getConnection();
    let body=req.body;
    let {username,pass_word}=body;
    let sql="SELECT * FROM users WHERE username=? AND pass_word=?";
    connection.query(sql,[username,pass_word],function(err,result){
        if(err){
            console.log(err);
            res.status(404).send("Error in login");
        }
        else if(result.length===0){
            res.status(404).send("Invalid username and password");
        }
        else {
            res.cookie("userData",{user:username,pages:[]});
            res.send(result)
        };
    });
});

app.post("/booking",function(req,res){
    let connection=getConnection();
    let body=req.body;
    let {accom_id,name,email,mobile_number,acceptTC} = body;
    let sql="INSERT INTO bookings(name,mobile_number,email,acceptTC,accom_id) VALUES (?,?,?,?,?)";
    connection.query(sql,[name,mobile_number,email,acceptTC,accom_id],function(err,result){
        if(err){
            console.log(err);
            res.status(400).send("Error in inserting data");
        }
        else res.send(result);
    });
});

app.get("/logout",function(req,res){
    res.clearCookie("userData");
});

