import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios'

const Form = () => {

  const [isEnabled, setIsEnabled] = useState(false)
  const optionSelected = (event) => {
    return event.target.value === 'Otros' ? setIsEnabled(true) : setIsEnabled(false)
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      await axios.post('http://localhost:3001/mail', data, {})
        .then((response) => {
          Swal.fire({
            position: 'top-end',
            title: 'Éxito! Tu mensaje se envió correctamente',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            showConfirmButton: false,
            showCancelButton: false,
            showDenyButton: false,
            showCloseButton: false
          })
          //reset()
        })
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: 'top-end',
        title: 'Hubo un problema y no pudimos enviar tu mensaje',
        icon: 'error',
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        showConfirmButton: false,
        showCancelButton: false,
        showDenyButton: false,
        showCloseButton: false
      })
    }
  }


  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-4 form-group">
          <input type="text" className="form-control" id="name" placeholder="Tu nombre"  {...register("name", { required: true, minLength: 4 })} />
          <span>{errors.name?.type === 'required' && "Necesitamos tu nombre"}</span>
          <span>{errors.name?.type === 'minLength' && "El nombre debe tener al menos 4 caracteres"}</span>
        </div>
        <div className="col-md-4 form-group">
          <input type="email" className="form-control" id="email" placeholder="Tu mail" {...register("email", { required: true, minLength: 6 })} />
          <span>{errors.email?.type === 'required' && "Necesitamos tu mail"}</span>
          <span>{errors.email?.type === 'minLength' && "El email debe tener al menos 6 caracteres"}</span>
        </div>
        <div className="col-md-4 form-group">
          <input type="text" className="form-control" id="phone" placeholder="Tu whatsapp" {...register("phone", { required: true, pattern: { value: /[0-9]{3}/ } })} />
          <span>{errors.phone?.type === 'required' && "Necesitamos tu whatsapp"}</span>
          <span>{errors.phone?.type === 'pattern' && "El número de Whatsapp no es válido"}</span>
        </div>
      </div>
      <div className="row mt-3">
        <div className="form-group col-md-5">
          <select type="select" className="form-select" id="subject" placeholder="Tu motivo" {...register("subject", { required: true, pattern: { value: /^(?!Tu motivo$)/ } })} onChange={e => optionSelected(e)}>
            <option defaultValue>Tu motivo</option>
            <option value="Infraestructura">Infraestructura</option>
            <option value="Análisis de datos">Análisis de datos</option>
            <option value="Comunicación esratégica">Comunicación esratégica</option>
            <option value="Otros">Otros</option>
          </select>
          <span>{errors.subject?.type === 'pattern' && "Tenes que decirnos un motivo"}</span>

        </div>
        <div className="form-group col-md-7">
          <input type="text" className="form-control" id="motive" placeholder="Tu otro motivo" {...register("motive", { minLength: 15 })} disabled={!isEnabled} />
        </div>
        <span>{errors.motive?.type === 'minLength' && "Danos un motivo de más de 6 caracteres"}</span>
      </div>
      <div className="form-group mt-3">
        <textarea className="form-control" name="message" rows="5" placeholder="Tu mensaje" {...register("message", { required: true, minLength: 20, maxLength: 240 })}></textarea>
        <span>{errors.message?.type === 'required' && "Dejanos un mensaje contándonos qué buscás"}</span>
        <span>{errors.message?.type === 'minLength' && "Tu mensaje debería tener al menos 20 caracteres"}</span>
        <span>{errors.message?.type === 'minLength' && "Tu mensaje es muy extenso, intentá resumirlo en menos de 240 caracteres"}</span>
      </div>
      <div className="my-3">
        <div className="loading">Enviando</div>
        <div className="error-message"></div>
        <div className="sent-message">Gracias por escribirnos, a la brevedad vamos a estar contactándote</div>
      </div>
      <div className="text-center"><button type="submit">Enviar</button></div>
    </form>
  )
}

export default Form