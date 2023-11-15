import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {consRoom} from './crud/motel.api';
import './Styles/bootstrap.min.css';

function Producto() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [rooms, setrooms] = useState([]);

  useEffect(() => {
    const room = async () => {
      var objeto = {
        "id_motel":id
      }
      const rom = await consRoom(objeto)
      setrooms(rom.data)
    }
    room();
  }, [id]);

  let contenido = null

  const jacuzi = (s) => {
    if (s == 0) {
      return "No"
    } else {
      return "Si"
    }
  };

  const primerImg = (s) => {

    const imgs = s.split(",")
    return imgs[0]

  };

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {rooms.map((product) => (
                <div key={product.id_room} className="col-md-4">
                  <div className="card mb- product-wap rounded-0 shadow">
                    <div className="card rounded-0">
                      <img className="card-img rounded-0 img-fluid" src={primerImg(product.img_room)} alt={product.name_motel} />
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{product.name_room}</h2>
                      <p className="card-text">Tipo Habitación: {product.tip_room}</p>
                      <p className="card-text">Jacuzzi: {jacuzi(product.jacuzzi)}</p>
                      <Link to={`/producto/${product.id_room}`}>
                        <button className="btn btn-danger">Ver Más</button>
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

export default Producto;
