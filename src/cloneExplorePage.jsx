import React, {Component} from "react";
import CloneExploreResult from "./cloneExploreResult";
import queryString from "query-string";
import "./css/cloneExplorePage.css";
import http from "./cloneHttpService.js";
class CloneExplorePage extends Component{
    state = {
        accomodations : [],
        total : 0,
        start : 0,
        end : 0,
        filterOptions : {
            accomTypes : ["1BHK","2BHK","3BHK","PG","Hostel","Independent rooms"],
            sortArr : [
                {display : "Filter" ,value : ""},
                {display : "Price - Low to High" ,value : "price"},
                {display : "Price - High to Low" ,value : "price DESC"},
            ]
        },
        filterOptionsSel : {
            accomType : "",
            sort : ""
        }
    };
    async fetchData(){
        let queryParams = queryString.parse(this.props.location.search);
        let {page,accom_type,sort}=queryParams;
        let pageNum = page ? +page : 1;
        let response =await http.get(`/explore?page=${pageNum}${accom_type ? `&accom_type=${accom_type}` : ""}${sort ? `&sort=${sort}` : ""}`);
        let {data}=response;
        this.setState({accomodations:data.data,total:data.numOfItems,start:data.startIndex,end:data.endIndex});
    }
    componentDidMount(){
        this.fetchData();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps!==this.props) this.fetchData();
    }
    getProperty=(id)=>{
        this.props.history.push(`/property/${id}`);
    }
    handleChange=(e)=>{
        const {currentTarget : input}=e;
        let s1={...this.state};
        if(input.name==="accom_type") s1.filterOptionsSel.accomType=input.value;
        if(input.name==="sort") s1.filterOptionsSel.sort=input.value;
        this.setState(s1);
        this.callURL();
    }
    callURL=()=>{
        let str="";
        let {accomType,sort}=this.state.filterOptionsSel;
        str=accomType ? this.makeSearchStr("accom_type",accomType,str) : "";
        str=sort ? this.makeSearchStr("sort",sort,str) : str;
        //window.location=`/explore?${str}`;
        this.props.history.push(`/explore?${str}`);
    }
    makeSearchStr=(option,value,str)=>{
        let str1=
            str
                ? str+`&${option}=${value}` 
                : `${option}=${value}`;
        return str1;
    }
    render(){
        let {accomodations,total,start,end,filterOptions,filterOptionsSel}=this.state;
        let accomArr=filterOptions.accomTypes.map(ac=>({display:ac,value:ac}));
        accomArr.unshift({display:"Type",value:""});
        let queryParams = queryString.parse(this.props.location.search);
        let {page,accom_type,sort}=queryParams;
        let pageNum = page ? +page : 1;
        return (
            <div className="explorePage">
                    <div className="explorePage__info">
                        <h2>Accomodations nearby</h2>
                    </div>
                    <div className="explore__dropdown">
                        <select className="me-3" value={filterOptionsSel.accomType} name="accom_type" onChange={this.handleChange}>
                            {accomArr.map((ac,index)=>(
                                <option value={ac.value}>{ac.display}</option>
                            ))}
                        </select>
                        <select name="sort" value={filterOptionsSel.sort} onChange={this.handleChange}>
                            {filterOptions.sortArr.map((st,index)=>(
                                <option value={st.value}>{st.display}</option>
                            ))}
                        </select>
                    </div>
                    {accomodations.map((ac) => (
                        <div className="property" onClick={()=>this.getProperty(ac.accom_id)}> 
                            <CloneExploreResult
                                img=""
                                location={ac.location}
                                title={ac.title}
                                description={ac.description}
                                star={ac.star}
                                price={ac.price}
                            />
                        </div>
                    ))}
                    <div className="container mb-2 text-center">
                    <div className="row">
                        <div className="col-2">
                            {start===0 ? "" : <button className="btn btn-warning btn-sm" onClick={()=>this.props.history.push(`/explore?page=${ pageNum - 1}${accom_type ? `&accom_type=${accom_type}` : ""}${sort ? `&sort=${sort}` : ""}`)}>Prev</button>}
                        </div>
                        <div className="col-8">

                        </div>
                        <div className="col-2">
                            {end < total-1 ? <button className="btn btn-warning btn-sm" onClick={()=>this.props.history.push(`/explore?page=${ pageNum + 1}${accom_type ? `&accom_type=${accom_type}` : ""}${sort ? `&sort=${sort}` : ""}`)}>Next</button> : ""}
                        </div>
                    </div>
                    </div>
                    
                    {/*<CloneExploreResult
                    img=""
                    location="Premnagar, Dehradun"
                    title="Stay at this spacious house"
                    description="1 guest - 1 bedroom - 1 bed - Shared bathroom - Kitchen - Free Parking - RO - Washing machine"
                    star={4}
                    price="Rs 4000 /month"
                    />
                    <CloneExploreResult
                    img=""
                    location="Premnagar, Dehradun"
                    title="Stay at this spacious house"
                    description="1 guest - 1 bedroom - 1 bed - Shared bathroom - Kitchen - Free Parking - RO - Washing machine"
                    star={4}
                    price="Rs 4000 /month"
                    />
                    <CloneExploreResult
                    img=""
                    location="Premnagar, Dehradun"
                    title="Stay at this spacious house"
                    description="1 guest - 1 bedroom - 1 bed - Shared bathroom - Kitchen - Free Parking - RO - Washing machine"
                    star={4}
                    price="Rs 4000 /month"
                    />
                    <CloneExploreResult
                    img=""
                    location="Premnagar, Dehradun"
                    title="Stay at this spacious house"
                    description="1 guest - 1 bedroom - 1 bed - Shared bathroom - Kitchen - Free Parking - RO - Washing machine"
                    star={4}
                    price="Rs 4000 /month"
                    />*/}
            </div>
        )
    }
}
export default CloneExplorePage;