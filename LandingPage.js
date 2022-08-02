import React from "react";
import { Link } from 'react-router-dom';

export default function LandingnPage() {
    return (
    
    <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand"><h1><b>AMS.link</b></h1></a>
            
            <form className="d-flex">
                <Link to="/LoginUser" className="btn btn-dark me-md-2" style={{marginTop: "20px", marginBottom: "-10px"}}>Login</Link>
                <Link to="/Signup" className="btn btn-dark me-md-2" style={{marginTop: "20px", marginBottom: "-10px"}}>Signup</Link>
            </form>
            </div>
        </nav>

<div className="container">
    <div className="row">
        <div className="col">
            <div className="row no-gutters">
                <h2><p className="card-text" style={{color: "black"}}><br />Tautan Pendek, Hasil Memuaskan</p></h2>
                    <h4><small className="text-muted" /> <br /><br />Penyingkat URL yang dibuat untuk membantu anda mengembangkan dan melindungi merk anda</h4>
                        <div className="p-3 mb-2 bg-denger text-black">
                            <b><h1 style={{textAlign: "center"}}></h1></b>
                            <br/><br/><br/>
                            <Link to="/Signup" className="btn btn-dark">Mulai Gratis</Link>
                        </div>
            </div>
        </div> 
        <div className="col"><img src="1.png" alt="..." style={{width: "80%", height: "80%", marginLeft: "auto"}} />
    </div>
</div>


<div className="p-3 mb-2 bg-light text-dark" >
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <img src="9.jpg" className="img-thumbnail" alt="..." />        
                <br />
                    Dengan lebih banyak klik, peningkatan pengenalan<br />
                    merek dan kepercayaan konsumen pada komunikasi anda<br />
                    dan menginspirasi lebih banyak keterlibatan<br />
                    dengan tautan anda<br />
            </div>
            <div className="col-sm">
                <img src="9.jpg" className="img-thumbnail" alt="..." />
                    <br />
                        Tingkatkan hasil diatas pengirimiman yang lebih baik<br />
                        dan klik melalui data tingkat tautan yang memberi anda<br />
                        wawasan penting tentang keterlibatan tautan anda<br />
                        sehingga tim anda dapat membuat keputusan yang lebih<br />
                        cerdas seputar konten dan komunikasinya<br />
        </div>
        <div className="col-sm">
                <img src="9.jpg" className="img-thumbnail" alt="..." />
                    <br />
                        Dapatkan seputar informasi mengenai AMS.LINK<br />
                        dan pelajari lebih lanjut, juga dapat memastikan<br />
                        merk anda tetap berada di tautan apa pun yang<br />
                        dipersingkat seseorang yang menunjuk ke<br />
                        situs web anda<br />
        </div>
        </div>
    </div>
</div>

<div className="p-3 mb-2 bg-light text-dark"/>
<div className="container">
    <div className="row">
        <div className="col-sm">
            <b>Tentang</b><br />
            <br />
            links<br />
            short link<br />
        </div>
        <div className="col-sm">
            <b>Kontak</b><br />
            <br />
            @aldillaaura<br />
            @iam._.mirn<br />
            @rsshela<br />
            ams.link@gmail.com<br />
            www.link.com<br />
        </div>
    </div>
</div>
</div>
</>

        );
}