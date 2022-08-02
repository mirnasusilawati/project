import React from 'react';
import './LoginAdmin.css'
import { Link } from 'react-router-dom';

const LoginAdmin =() => {

    return (
        <>
        <div className="global-container-admin" style={{backgroundColor: "#C9BBCF"}}>
        <div className="card login-form-admin">
            <div className="card=body">
                <h1 className="card-title-admin text-center">LOGIN ADMIN</h1> 
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
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="d-grid gap-2">
                        <Link to="/Signup" className="btn btn-denger">Signup</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
    );
}

export default LoginAdmin