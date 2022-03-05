import React,{Component} from "react";
import { Switch,Route,Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CloneExplorePage from "./cloneExplorePage";
import CloneFooter from "./cloneFooter";
import CloneHeader from "./cloneHeader";
import CloneHome from "./cloneHome";
import CloneLogin from "./cloneLogin";
import CloneProperty from "./cloneProperty";
import CloneSignup from "./cloneSignup";
import "./css/mainComp.css"
import auth from "./cloneAuthService.js";
import CloneLogout from "./cloneLogout";
import CloneThankyou from "./cloneThankyou";
import CloneContact from "./cloneContact";
import CloneRental from "./cloneRental";
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
                <Route path="/thankyou" component={CloneThankyou} />
                <Route path="/rental-agreement" component={CloneRental} />
                <Route path="/contact" component={CloneContact} />
                <Redirect from="/" to="/home" />
            </Switch>
            <CloneFooter />
        </div>;
    }
}
export default CloneMainComponent;