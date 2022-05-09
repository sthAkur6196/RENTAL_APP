import React,{Component} from "react";
import { Switch , Route , Redirect } from "react-router-dom";
import CloneExplorePage from "./cloneExplorePage";
import CloneFooter from "./cloneFooter.jsx";
import CloneHeader from "./cloneHeader.jsx";
import CloneHome from "./cloneHome.jsx";
import CloneLogin from "./cloneLogin.jsx";
import CloneProperty from "./cloneProperty.jsx";
import CloneSignup from "./cloneSignup.jsx";
import "./css/mainComp.css"
import auth from "./cloneAuthService.js";
import CloneLogout from "./cloneLogout.jsx";
import CloneThankyou from "./cloneThankyou.jsx";
import CloneContact from "./cloneContact.jsx";
import CloneRental from "./cloneRental.jsx";
class CloneMainComponent extends Component{
    render(){
        let user=auth.getUser();
        return <div className="container-fluid border">
            <CloneHeader user={user} />
            <Switch>
                <Route path="/signup" component={CloneSignup} />
                <Route path="/login" component={CloneLogin} />
                <Route path="/logout" component={CloneLogout} />
                <Route path="/property/:id" render={(props)=><CloneProperty {...props} />} />
                <Route path="/explore" render={(props)=> <CloneExplorePage {...props} /> } />
                <Route path="/home" component={CloneHome} />
                <Route path="/thankyou" render={(props)=><CloneThankyou {...props} />} />
                <Route path="/rental-agreement" render={(props)=><CloneRental {...props} />} />
                <Route path="/contact" render={(props)=><CloneContact {...props} />} />
                <Redirect from="/" to="/home" />
            </Switch>
            <CloneFooter />
        </div>;
    }
}
export default CloneMainComponent;