import '../Styles/crud.css';
import '../Styles/bootstrap.min.css';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {createMotel} from './motel.api';
import { Link } from 'react-router-dom';
    
const Motel = () => {
    const {register, handleSubmit, reset,formState: {errors}} = useForm();


    const uploadImage = async (e) => {
        const data = new FormData();
        data.append("file",e[0]);
        data.append("upload_preset","motel_default");
        const res = await fetch(
            "http://api.cloudinary.com/v1_1/deecwop2g/image/upload",
            {
                method: "POST",
                body: data,
            }
        )
        const file = await res.json();
        return String(file.secure_url)
    }
    
    const onSubmit = handleSubmit(async data => {

        const img = await uploadImage(data["img_motel"])
        data["img_motel"] = img
        const res = await createMotel(data);

        if(res.status == 201)
        {
            reset()
        }

    })

    return (
        <div className="body">
        <div className="card shadow">
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Nombre Motel</label>
                        <input type="text"   className="form-control" placeholder="Aqui el modelo" {...register('name_motel',{required: true})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Dirección *</label>
                        <input type="text"  className="form-control" placeholder="Aqui la marca" {...register('dirrecion',{required: true})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Imagen del Motel *</label>
                        <input type="file" className="form-control" {...register('img_motel',{required: true})}/>
                    </div>
                    <center>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-6">
                                    <button className="btn btn-danger">Guardar</button>                            
                                </div>
                                <div className="col-6">
                                <Link to='/portalHome'>
                                        <button className="btn btn-danger">Volver</button>
                                    </Link>
                                </div>
                            </div>
                        </div>  
                    </center>                      
                </form>
            </div>
        </div>
    </div>
    );
};

export default Motel;