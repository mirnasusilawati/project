import { Link } from 'react-router-dom';
import React from 'react';
import App from '../App.js';
import './Data.js'

const Data =() => {

    return (
        <>
        <div className="container-fluid">
        <div className="row">
            <div className="col-2 position-fixed float-left" style={{height: "100%", backgroundColor: "#9A86A4"}}>
                <aside className="p-3 mb-2 text-white" style={{width: "100%"}}>
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
                        <img src="8-removebg-preview.png" alt="" width="24" height="24" />
                        <Link to="/LoginUser" className="App-link" style={{textDecoration: "none", color: "white"}}>Log Out</Link>
                    </a><br /><br />
                </aside>

            </div>
            <div className="col-10 bg-light p-0" style={{marginLeft: "auto"}}>
                <nav className=" p-3 mb-2 text-black" style={{backgroundColor: "#C9BBCF"}} >
                    <div className="container-fluid" style={{backgroundColor: "#C9BBCF"}}>
                        <h3><span className="navbar-brand mb-0 h1">Data</span></h3>   
                    </div>
                </nav><br /><br /><br />
                <div className="container">
                <button type="button" className="btn btn-outline-dark " data-bs-toggle="modal" data-bs-target="#modalTambah" style={{marginLeft: "500px"}}>Tambah</button>
                    <div className=" row ">
                        <div className="col ">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Tanggal Bergabung</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Jumlah Link Yang Dibuat</th>
                                    <th scope="col">Opsi</th>
                                </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Shela</td>
                                    <td>18 Januari 2005</td>
                                    <td>sulistashelarokayah@gmail.com</td>
                                    <td>9</td>
                                    <td>
                                    <div className="row">
                                        <div className="col d-flex justify-content-center p-0">
                                            <Link to="/Signup" className="btn btn-sm btn" data-bs-toggle="modal" data-bs-target="#modalEdit" style={{backgroundColor: "#6495ED", color: "white"}}>Edit</Link>
                                        </div>
                                        <div className="col d-flex justify-content-center p-0">
                                            <a href="" className="btn btn-sm btn-danger">Delete</a>
                                        </div>
                                    </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>       


<div className="modal fade" id="modalEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Edit Data</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form>
            <div className="mb-3">
                <label  className="form-label">Nama</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Tanggal Bergabung</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Jumlah Link Yang Di Buat</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>

        </form>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Simpan</button>
        </div>
</div>
</div>
</div>



<div className="modal fade" id="modalTambah" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
    <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Tambah Data</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form>
            <div className="mb-3">
                <label  className="form-label">Nama</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Tanggal Bergabung</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"/>
              </div>
              <div className="mb-3">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

        </form>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-danger">Close</button>
        <button type="button" className="btn btn-primary">Simpan</button>
        </div>
</div>
</div>
</div>


                        </div>
                    </div>
                </div><br /><br />
            </div>
        </div>
    </div>
</>
    );
}

export default Data