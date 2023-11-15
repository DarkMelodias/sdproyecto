import '../Styles/crud.css';
import '../Styles/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import {useForm, useFieldArray, Controller} from 'react-hook-form';
import {createRoom,getAllMotel} from './motel.api';
import { Link } from 'react-router-dom';
    
const Room = () => {

    useEffect(() => {

        const mots = async () => {
            const mots = await getAllMotel()
            setmotels(mots.data)
        }
        mots();

    },[])


    const {register, control ,handleSubmit, reset,trigger, setError} = useForm();

    const [motels, setmotels] = useState([]);  

    const {fields, append, remove} = useFieldArray ({
        control,
        name: "img_room"
    })


    const uploadImage = async (e) => {
        const data = new FormData();

        const imgs = []

        for (const element of e){
            data.append("file",element["img"][0]);
            data.append("upload_preset","motel_default");
            const res = await fetch(
                "http://api.cloudinary.com/v1_1/deecwop2g/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            )
            const file = await res.json();
            imgs.push(file.secure_url)

        }

        return imgs

    }
    
    const onSubmit = handleSubmit(async data => {


        const img = await uploadImage(data["img_room"])
        data["img_room"] = img.toString()
        const res = await createRoom(data);
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
                        <label htmlFor="" className="form-label">Nombre Habitacion</label>
                        <input type="text"   className="form-control" placeholder="Aqui el modelo" {...register('name_room',{required: true})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Tipo Habitación</label>
                        <input type="text"  className="form-control" placeholder="Aqui la marca" {...register('tip_room',{required: true})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Jacuzzi *</label>
                        <select name="grafica" defaultValue={'DEFAULT'} id="" className="form-select" {...register('jacuzzi',{required: true, setValueAs: (value) => (value === 'Si' ? true || value === 'No' : false || value),})}>
                            <option value="DEFAULT">Escoge..</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <ul>
                            {fields.map((item, index) => (
                                <li key={item.id}>
                                    <label htmlFor="" className="form-label">Imagen {index+1}</label>
                                    <input type="file" className="img_input" {...register(`img_room.${index}.img`)} />
                                    <button type="button" className='btn btn-danger' onClick={() => remove(index)}>Delete</button>
                                </li>
                            ))}
                        </ul>
                        <label htmlFor="" className="form-label">Añade una imagen</label>
                        <button
                            type="button"
                            className='btn btn-danger form-control'
                            onClick={() => append({ img: ""})}
                        >Añadir
                        </button>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Motel *</label>
                        <select name="grafica" defaultValue={'DEFAULT'} id="" className="form-select" {...register('motel',{required: true, setValueAs: (value) => (value === 'Si' ? true || value === 'No' : false || value),})}>
                        {motels.map((motel) => {
                            return (
                                    <option key={motel.id_motel} value={motel.id_motel}>
                                    {motel.name_motel}
                                    </option>
                                );
                            })}
                        </select>
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

export default Room;