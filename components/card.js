import Link from "next/link"
export default function Card(props){
    return(
        <div className="container">
            <h1 className="display-5 fw-bold text-dark text-opacity-80 justify-content-center d-flex my-5">
                {props.Judul}
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                <div className="card shadow-sm">
                    <img src={props.Img} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.MerkTV}</h4>
                    <p className="card-text">{props.HargaTV}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Pesan</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src={props.Img2} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.MerkTV2}</h4>
                    <p className="card-text">{props.HargaTV2}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Pesan</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <img src={props.Img3} width="100%" height="225"/>
                    <div className="card-body">
                    <h4>{props.MerkTV3}</h4>
                    <p className="card-text">{props.HargaTV3}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href="/">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Pesan</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}