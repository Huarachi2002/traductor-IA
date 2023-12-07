import { Send } from '@mui/icons-material'
import React, { useState } from 'react'

export const SendMessage = () => {
  const [mensaje, setMensaje] = useState('');

  const handleInputChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSend = () => {
    console.log('Mensaje enviado:', mensaje);
    // Aquí puedes realizar cualquier lógica adicional con el mensaje

    // Limpiar el input después de enviar el mensaje
    setMensaje('');
  };

  return (
    <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
            <input
              type="text" 
              className="write_msg" 
              placeholder="Mensaje..."
              value={mensaje}
              onChange={handleInputChange}
            />
        </div>
        <div className="col-sm-3 text-center">
            <button className="msg_send_btn mt-3" type="submit" onClick={handleSend}>
                <Send/>
            </button>
        </div>
    </div>  
  )
}
