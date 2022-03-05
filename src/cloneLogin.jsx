import { ErrorMessage, Field, Form, Formik } from "formik";
import React,{Component} from "react";
import http from "./cloneHttpService.js";
import auth from "./cloneAuthService.js";
import { Link } from "react-router-dom";
import * as yup from "yup";
import "./css/cloneLogin.css";

const loginValidationSchema = yup.object().shape({
    username : yup.string().required("Username is required"),
    pass_word : yup.string().required("Password is required")
});

class CloneLogin extends Component{
    state={
        errors:""
    };
    async postData(url,obj){
        try{
            let response=await http.post(url,obj);
            auth.login(response.data);
            //this.props.history.push("/");
            window.location="/";
        } catch (ex){
            this.setState({errors:ex.response.data});
            console.log(this.state.errors)
        }
    }
    render(){
        let {errors}=this.state;
        return <div className="container login__form">
            <Formik initialValues={{
                username:"",
                pass_word : "" 
            }}
            validationSchema={loginValidationSchema}
            onSubmit={(values)=>{
                console.log("Submitted Values : ",values);
                console.log("Errors : ",this.state.errors);
                this.postData("/login",values);
            }}
            >
                {()=>(
                    <Form>
                        <h3 className="text-center">Login</h3>
                        <div className="form-group">
                            <label>Username</label>
                            <Field name="username" className="form-control" type="text" />
                            <div className="text-primary">
                                <ErrorMessage name="username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field type="password" name="pass_word" className="form-control" />
                            <div className="text-primary">
                                <ErrorMessage name="pass_word" />
                            </div>
                            {errors && <span className="text-primary">{errors}</span> }
                        </div>
                        <div className="form-group text-center m-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="text-center">
                    <h6>Are you a new user? - <Link to="/signup">Sign up</Link></h6>
            </div>
        </div>;
    }
}
export default CloneLogin;