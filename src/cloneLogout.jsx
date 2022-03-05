import React,{Component} from "react";
import http from "./cloneHttpService.js";
import auth from "./cloneAuthService.js";
class CloneLogout extends Component{
    async logOut(){
        return await http.get("/logout");
    }
    componentDidMount(){
        auth.logout();
        this.logOut();
        window.location="/login";
    }
    render(){
        return "";
    }
}
export default CloneLogout;