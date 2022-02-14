import axios from 'axios';
import React,{useState} from 'react';
import {fileUpload} from '../helpers/Uploader'
import { url } from '../helpers/url';
 
export const Form = () => {

    const [libro, setLibro]= useState({
        id: "",
        nombre: "",
        Autor: "",
        Pais: "",
        Año: "",
        Genero: "",
        imagen: "",

    })
    const {id,nombre,Pais, Año, Genero, imagen, Autor} = libro

    const handleOnchange = ({target}) =>{
      setLibro({
        ...libro,
        [target.name]:target.value
      })
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
  }
  const handleFileChange = (e) =>{
      console.log(e.target.files);
      const file = e.target.files[0]
      fileUpload(file)
      .then(respuesta => {
         libro.imagen = respuesta
      }).catch(error =>{
          console.log(error)
      })
  }
  const postData = () =>{
      console.log('hola')
      axios.post(url,libro)
      .then(respuesta =>{
          console.log(respuesta.data)
      }).catch(error =>{
          console.log(error)
      })
  }

  return (
    <div>
      <form id="formulario" onSubmit={handleSubmit}>
        <h2>Haz un registro de tus libros preferidos</h2>
          <hr/>
          <div>
                   <label>Nombre</label>
                   <input 
                   onChange={handleOnchange}
                   id="inputNombre"value={nombre} name="nombre"/>
               </div>
               <div>
                   <label>Genero</label>
                   <select id="selectTipo" name="tipo"value={Genero}  onChange={handleOnchange}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="C.C" value="C.C">Ficcion</option>
                       <option name="T.I" value="T.I">Novela</option>
                       <option name="C.E" value="C.E">Relato</option>
                       <option name="C.E" value="C.E">Poesia</option>

                   </select>
               </div>
               <div>
                   <label>Pais</label>
                   <input onChange={handleOnchange} value={Pais} name="Pais" id="inputPais" type="text" />
               </div>
               <div>
                   <label>Año</label>
                   <input value={Año}onChange={handleOnchange} id="inputAño" type="number" name="Año"/>
               </div>
            
               <div>
                   <label>Autor</label>
                   <input value={Autor}onChange={handleOnchange} id="inputAño" type="text" name="Autor"/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input value={imagen} onChange={handleFileChange} id="botonImagen" type="file" name="imagen"/>
                    
               </div>
               <div>
                   <button onClick={postData}id="btnRegistro">Enviar</button> 
               </div>
      
      </form>
    </div>
  )
}
