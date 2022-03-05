import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CloneBookForm from "./cloneBookForm.jsx";
import http from "./cloneHttpService.js";
import "./css/cloneProperty.css";
class CloneProperty extends Component{
    state={
        property : {}
    }
    async fetchData(){
        let id=this.props.match.params.id;
        let response=await http.get(`/property/${id}`);
        let {data}=response;
        this.setState({property:data[0]});
    }
    componentDidMount(){
        this.fetchData();
    }   
    componentDidUpdate(prevProps,prevState){
        if(prevProps!==this.props) this.fetchData();
    }

    render(){
        let {accom_id,title,location,description,star,price,accom_type,total_guest,bedrooms,bathrooms,verified}=this.state.property;
        return <div className="main__section container">
            <div className="col-12 d-none d-md-block navigation__section">
                <p><Link to="/" className="nav__link">Home</Link> {">"} <Link to="/explore" className="nav__link">Properties</Link> {">"} {title}</p>
            </div>
            <div className="title__section">
                <h2 className="__title">{title} </h2>
                <span className="bg-success rounded text-white px-2 me-1 accom__verified">VERIFIED</span>
                <span className="bg-secondary rounded text-white px-2 me-1 accom__type">{accom_type}</span>
                <span className="bg-danger rounded text-white px-2 me-1 accom__brokerage">NO BROKERAGE</span>
                <h1 className="__price">Rs {price} /Month</h1>
                <h5>{location}</h5>
            </div>
            <div className="row p-2 details__section bg-light">
                <div className="col-sm-12 col-md-8 col-ld-8 left__section">
                    <div className="row images__section bg-white">
                        <img src="" alt="Accom__Image" />
                    </div>
                    <div className="row m-2 p-4 border virtualTour__section bg-white">
                        <h3>360<sup>o</sup> Virtual Tour</h3>
                        <hr></hr>
                        <img src="" alt="Accom__Image" />
                    </div>
                    <div className="row m-2 p-4 border virtualTour__section bg-white">
                        <div className="box">
                                <h3>Overview</h3>
                                <h5><strong>Property ID : </strong>{accom_id}</h5>    
                        </div>
                        <hr></hr>
                        <div className="row box">
                                <div className="col-md-6 col-sm-12">
                                    <table className="table">
                                        <tr>
                                            <td><strong>Property ID:</strong></td>
                                            <td className="me-auto">{accom_id}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Price:</strong></td>
                                            <td className="me-auto">{price}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Type:</strong></td>
                                            <td className="me-auto">{accom_type}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Bedrooms:</strong></td>
                                            <td className="me-auto">{bedrooms}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Bathrooms:</strong></td>
                                            <td className="me-auto">{bathrooms}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="col-6">
                                <table className="table">
                                        <tr>
                                            <td><strong>Furnishing status:</strong></td>
                                            <td className="me-auto">Semi furnished</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Suitable for:</strong></td>
                                            <td className="me-auto">Boys</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Electricity/Water Bill:</strong></td>
                                            <td className="me-auto">as per meter</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Security Deposit:</strong></td>
                                            <td className="me-auto">1 month rent</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Couples allow:</strong></td>
                                            <td className="me-auto">No</td>
                                        </tr>
                                    </table> 
                                </div>
                        </div>                   
                    </div>


                    
                    <div className="row m-2 p-4 border virtualTour__section bg-white">
                        <div className="box">
                                <h3>Address</h3>
                                <h5><button className="btn btn-primary btn-sm">Open on Google Maps</button></h5>    
                        </div>
                        <hr></hr>
                        <div className="row box">
                                <div className="col-12">
                                    <table className="table">
                                        <tr>
                                            <td><strong>Address</strong></td>
                                            <td>Premnagar</td>
                                            <td><strong>Zip/Postal Code</strong></td>
                                            <td>248007</td>
                                        </tr>
                                        <tr>
                                            <td><strong>City</strong></td>
                                            <td>Dehradun</td>
                                            <td><strong>Area</strong></td>
                                            <td>Premnagar</td>
                                        </tr>
                                        <tr>
                                            <td><strong>State</strong></td>
                                            <td>Uttarakhand</td>
                                            <td><strong>Country</strong></td>
                                            <td>India</td>
                                        </tr>
                                    </table>
                                </div>
                        </div> 
                                          
                    </div>
                    <div className="row m-2 p-4 border houseRules__section bg-white">
                        <h3>Fetaures</h3>
                        <hr></hr>
                        <div className="row col-12"> 
                            <div className="col-4">
                                <h6>2-Wheeler parking</h6>
                            </div>
                            <div className="col-4">
                                <h6>Bedding</h6>
                            </div>
                            <div className="col-4">
                                <h6>Powerbackup</h6>
                            </div>
                            <div className="col-4">
                                <h6>Almirah</h6>
                            </div>
                            <div className="col-4">
                                <h6>CCTV</h6>
                            </div>
                            <div className="col-4">
                                <h6>RO</h6>
                            </div>
                            <div className="col-4">
                                <h6>Balcony</h6>
                            </div>
                            <div className="col-4">
                                <h6>Geyser</h6>
                            </div>
                            
                        
                        </div>
                    </div>
                    <div className="row m-2 p-4 border houseRules__section bg-white">
                        <h3>House Rules</h3>
                        <hr></hr>
                        <ul className="mx-4">
                            <li>loren ipsum skldjfklasdj skdjf ajsdl</li>
                            <li>loren ipsum skldjfklasdj skdjf ajsdl</li>
                            <li>loren ipsum skldjfklasdj skdjf ajsdl</li>
                            <li>loren ipsum skldjfklasdj skdjf ajsdl</li>
                            <li>loren ipsum skldjfklasdj skdjf ajsdl</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 right__section">
                        <div className="col-12">
                            <CloneBookForm accomid={accom_id} />
                        </div>
                        <div className="col-12 rules__section p-2">
                            <h4>We are responsible for</h4>
                            <ul>
                                <li>Verifying the property</li>
                                <li>Conducting physical viewing</li>
                                <li>Create rental agreement with landlord</li>
                                <li>Providing support for tenant verification</li>
                                <li>Future support for landlord and tenant</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>;
    }
}
export default CloneProperty;