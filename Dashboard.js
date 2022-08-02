import React from 'react';
import App from '../App.js';
import { Link } from 'react-router-dom';

const Dashboard =() => {

    return (
        <>
        <div className="container-fluid">
        <div className="row">
            <div className="col-2 position-fixed float-left" style={{height: "100%", backgroundColor: "#9A86A4 "}}>
                <aside className="p-3 mb-2 text-white" style={{width: "100%"}} />
                    <h3 className="name">username</h3>
                    <hr size="4" />

                    <br /><br /><br /><br /><br />
                    <a className="navbar-brand" href="#">
                        <img src="6-removebg-preview.png" alt="" width="24" height="24" />
                        <Link to="/Dashboard" className="App-link" style={{textDecoration: "none", color: "white"}}>Dashboard</Link>
                    </a><br /><br />

                    <a className="navbar-brand" href="#">
                        <img src="images0-removebg-preview.png" alt="" width="24" height="24" />
                        <Link to="/Data" className="App-link" style={{textDecoration: "none", color: "white"}}>Data</Link>
                    </a><br /><br />


                    <a className="navbar-brand" href="#">
                        <img src="8-removebg-preview.png" alt="" width="24" height="24"/>
                        <Link to="/LoginUser" className="App-link" style={{textDecoration: "none", color: "white"}}>Log out</Link>
                    </a><br/><br/>

            </div>
            <div className="col-10 bg-light p-0" style={{marginLeft: "auto"}}>
                <nav className=" p-3 mb-2 text-black" style={{backgroundColor: "#C9BBCF"}}>
                    <div className="container-fluid">
                        <h3><span className="navbar-brand mb-0 h1">Dashboard</span></h3>
                    </div>
                </nav><br /><br /><br/>
                <div className="container">
                    <div className=" row " >
                        <div className="col ">
                            <div className="card " style={{width: "30rem"}}>
                                <div className="card-body">
                                    <h3 className="card-title " style={{textAlign: "center"}}>Banyak klik link</h3>
                                    <h1 className="card-subtitle mb-2 text-muted " style={{textAlign: "center"}}>50 kali</h1>
                                    <p className="card-text "/>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card " style={{width: "30rem"}}>
                                <div className="card-body ">
                                    <h3 className="card-title " style={{textAlign: "center"}}>Banyak klik link</h3>
                                    <h1 className="card-subtitle mb-2 text-muted " style={{textAlign: "center"}}>50 kali</h1>
                                    <p className="card-text "/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>

                <div className="container">
                    <div className=" row ">
                        <div className="col ">
                            <div className="card " style={{width: "30rem"}}>
                                <div className="card-body ">
                                    <h3 className="card-title " style={{textAlign: "center"}}>Banyak klik link</h3>
                                    <h1 className="card-subtitle mb-2 text-muted " style={{textAlign: "center"}}>50 kali</h1>
                                    <p className="card-text "/>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card " style={{width: "30rem"}}>
                                <div className="card-body ">
                                    <h3 className="card-title " style={{textAlign: "center"}}>Banyak klik link</h3>
                                    <h1 className="card-subtitle mb-2 text-muted " style={{textAlign: "center"}}>50 kali</h1>
                                    <p className="card-text "/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
        </div>
    </div>

</>
    );
}

export default Dashboard;