import React, { useState, useEffect } from 'react';
import './Styles/shop.css'
import './Styles/bootstrap.min.css';
import {createRoom,getAllMotel} from './crud/motel.api';
import { Link } from 'react-router-dom';

function Shop() {

  const [motels, setmotels] = useState([]);

  useEffect(() => {
    const mots = async () => {
      const mots = await getAllMotel()
      setmotels(mots.data)
    }
    mots();
  }, []);

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {motels.map((product) => (
                <div key={product.id_motel} className="col-md-4">
                  <div className="card mb- product-wap rounded-0 shadow">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={product.img_motel} alt={product.name_motel} />
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{product.name_motel}</h2>
                      <p className="card-text">Dirección: {product.dirrecion}</p>
                      <Link to={`/producto/${product.id_motel}`}>
                        <button className="btn btn-danger">Ver habitaciones</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;