import { Field, Form, Formik } from "formik";
import auth from "./cloneAuthService.js";
import http from "./cloneHttpService.js";
import React,{Component} from "react";
import "./css/cloneBookForm.css";
class CloneBookForm extends Component{
    async postData(url,obj){
        let response=await http.post(url,obj);
        console.log(response);
        //this.props.history.push("/thankyou");
        window.location="/thankyou";
    }
    render(){
        let form={};
        const {accomid}=this.props;
        let user=auth.getUser();
        if(user){
            form={...form,name:user[0].name,mobile_number:user[0].mobile_number,email:user[0].email};
        }
        console.log("props.accom_id ::: ",accomid);
        return <div className="container book__form">
            <Formik initialValues={{
                accom_id: accomid ,
                name:"" || form.name,
                mobile_number:"" || form.mobile_number,
                email:"" || form.email,
                acceptTC:false
            }}
            onSubmit={(values)=>{
                console.log("Submitted Values : ",values);
                this.postData("/booking",values);
            }}
            >
                {({values})=>(
                    <Form>
                        <div className="form-group">
                            <label><h5>I am interested in :</h5> </label>
                            <div className="hidden__element">{values.accom_id=accomid}</div>
                            <Field type="text" name="accom_id" className="form-control" value={accomid} disabled />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <Field type="text" name="name" className="form-control" value={form.name ? form.name : values.name} disabled={form.name ? true : false} />
                        </div>
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <Field type="text" name="mobile_number" className="form-control" value={form.mobile_number ? form.mobile_number : values.mobile_number} disabled={form.mobile_number ? true : false} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Field type="text" name="email" className="form-control" value={form.email ? form.email : values.email} disabled={form.email ? true : false} />
                        </div>
                        <div className="form-check-inline">
                            <Field type="checkbox" name="acceptTC" className="form-check-input" />
                            <label className="form-check-label">I agree to <a>Terms and Conditions</a></label>
                        </div>
                        <div className="form-group text-center m-2">
                            <button type="submit" className="btn btn-primary form-control">Book Now</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>;
    }
}
export default CloneBookForm;