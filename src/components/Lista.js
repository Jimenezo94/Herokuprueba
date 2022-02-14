import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {url} from '../helpers/url'
import '../styles/Lista.css'

const Lista = () => {

    const [registro,setRegistro] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(url) 
        .then(respuesta => {
            console.log(respuesta,'esto')
           setRegistro(respuesta.data);
        })
        .catch(error =>{
            console.log(error)
        })

    }

    const deleteLibro = (id) =>{
        axios.delete(url + id) //hacemos peticion de eliminar
        .then(respuesta => {
            getData() //trae de nuevo la info actualizada
            console.log(respuesta.data);
        })
        .catch(error => {
            console.log(error)

        })

    }
//para que se ejecute la peticion al momento de q cargue getData
useEffect(() => {
    getData()

}, [])
console.log(registro)



  return (
    <div>
        <table className='tabla'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Autor</th>
                    <th>Pais</th>
                    <th>Año</th>
                    <th>Genero</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                { 
                    registro.map(rg => (
                        <tr  key={rg.id}>
                        <td>{rg.nombre}</td>
                        <td>{rg.Autor}</td>
                        <td>{rg.Pais}</td>
                        <td>{rg.Año}</td>
                        <td>{rg.Genero}</td>
                        <td><img src={rg.Imagen} width='40'
                        height= "50" alt=""/> </td>
                            <td>
                            <button onClick={()=> deleteLibro(rg.id)}>
                                Eliminar
                            </button>
                        </td>

                        </tr>
                    
                    ))
                } 
            </tbody>
        </table>
    </div>
  )
}

export default Lista