import React,{Component} from "react";
import CloneBanner from "./cloneBanner";
import http from "./cloneHttpService.js";
import CloneCard from "./cloneCard";
import "./css/cloneHome.css";

class CloneHome extends Component{
    state={
        featuredAccom : [],
    };
    
    async componentDidMount(){
        let response = await http.get("/explore");
        let {data}=response;
        this.setState({featuredAccom:data.data});
    }
    render(){
        let {featuredAccom}=this.state;
        console.log("Fetaured Accom ::::::::::::",featuredAccom);
        return <div>
             <CloneBanner />
             <div className="home__section">
                 <CloneCard src="" title="Title 1" description="Description 1" />
                 <CloneCard src="" title="Title 2" description="Description 2" />
                 <CloneCard src="" title="Title 3" description="Description 3" />
                 <CloneCard src="" title="Title 4" description="Description 4" />
             </div>
             <div className="home__heading">
                 <h3>Featured Accomodations</h3>
             </div>
             <div className="home__section">
                 {featuredAccom.map((acc,index)=>index<=3
                            ? <CloneCard src="" title={acc.title} description={acc.description} price={acc.price} />
                            : "")}
            </div>  
        </div>;
    }
}
export default CloneHome;