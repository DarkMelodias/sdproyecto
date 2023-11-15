import React,{useEffect} from 'react';
import './Styles/Footer.css';
import { Link, useLocation } from 'react-router-dom';// Importa Link de react-router-dom
// Importa el archivo CSS para los estilos del footer
import './Styles/bootstrap.min.css';

function Footer(){

  const rutaRegexAuth = /^\/views\//

  const location = useLocation();

  // Aquí puedes realizar cualquier lógica específica del encabezado

  // Utiliza useEffect para realizar acciones cuando cambia la ubicación
  useEffect(() => {
    // Coloca aquí cualquier lógica que deseas ejecutar cuando la ubicación cambia
    // Esto se ejecutará cada vez que cambie la ruta
  }, [location]);

if (rutaRegexAuth.test(location.pathname)) { 
  return(
    <footer>      
    </footer>
  ); 
}else{
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-danger">SecretSuites</h3>
            <p>Encuentra el lugar que cumpla con tus expectactivas.</p>
          </div>
          <div className="col-md-4">
            <h3>Enlaces</h3>
            <ul className="list-unstyled">
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/shop"><li>Shop</li></Link>

            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contactanos</h3>
            <address>
              <p>Adress: Cra. 5 # 21-38</p>
              <p>Email: secretsuites@pcexpress.co</p>
              <p>Phone: +57 304 386 37 39 </p>
            </address>
          </div>
        </div>
        </div>
    </footer>
  );
}
}

export default Footer;
