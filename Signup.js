import React from "react";
import './LoginUser.css'
import { Link } from 'react-router-dom';


const Signup =() => {

    return (
        <>
        <div className="global-container " style={{backgroundColor: "#C9BBCF"}}>
        <div className="card signup-form">
            <div className="card=body">
                <h1 className="card-title text-center">Sign up</h1><br/><br/><br/>
            </div>
            <div className="card-text">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="d-grid gap-2">
                        <Link to="/LoginUser" className="btn btn-sm btn-dark">Masuk</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
    );
}

export default Signup;