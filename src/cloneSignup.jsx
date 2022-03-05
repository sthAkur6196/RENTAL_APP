import React, {Component} from "react";
import http from "./cloneHttpService.js";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import "./css/cloneSignup.css";
const signupValidationSchema = yup.object().shape({
    name : yup.string().required("Name is required").min(5,"Name must have atleast 5 characters"),
    mobile_number : yup.string().required("Mobile number is required").min(10,"Mobile number is invalid").max(10,"Mobile number is invalid"),
    email : yup.string().required("Email is required").email("Invalid email ID"),
    username : yup.string().required("Username is required").min(6,"Minimum 6 characters"),
    pass_word : yup.string().required("Password is required"),
});
class CloneSignup extends Component{
    state={
        form:{
            name:"",
            mobile_number:"",
            email:"",
            username:"",
            pass_word:""
        }
    };
    async postData(url,obj){
        let response = await http.post(url,obj);
        console.log(response);
        window.alert("Successfully signed up !");
        this.props.history.push("/login");
    }
    
    render(){
        let {form}=this.state;
        return <div className="container signup__form">
            <h3 className="text-center">Sign Up</h3>
            <Formik initialValues={form}
            onSubmit={(values)=>{
                console.log("Signup submission : ",values);
                this.postData("/signup",values);
            }}
            validationSchema={signupValidationSchema}
            >
                {()=>(
                    <Form>
                        <div className="form-group mb-2">
                            <label>Name</label>
                            <Field type="text" name="name" className="form-control" />
                            <div className="text-primary">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label>Mobile Number</label>
                            <Field type="text" name="mobile_number" className="form-control" />
                            <div className="text-primary">
                                <ErrorMessage name="mobile_number" />
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label>Email</label>
                            <Field type="email" name="email" className="form-control" />
                            <div className="text-primary">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label>Username</label>
                            <Field type="text" name="username" className="form-control" />
                            <div className="text-primary">
                                <ErrorMessage name="username" />
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label>Password</label>
                            <Field type="password" name="pass_word" className="form-control" />
                            <div className="text-primary">
                                <ErrorMessage name="pass_word" />
                            </div>
                        </div>
                        <div className="form-group text-center m-2">
                            <button className="btn">Sign up</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    }
}
export default CloneSignup;