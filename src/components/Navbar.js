import CartWidget from "./CartWidget";

const Navbar= () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="index.html"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{color:"gold"}}>La Casa del Deporte </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/category/1" style={{color:"aqua"}}>Hombre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/category/2" style={{color:"pink"}}>Mujer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/category/3" style={{color:"blue"}}>Niño</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/category/4" style={{color:"purple"}}>Niña</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
 );
}

export default Navbar;