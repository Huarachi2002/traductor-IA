import React, { useState } from 'react'
import { SendMessage, IncomingMessage, OutgoingMessage } from './'
import { useAuthStore } from '../../../hook/useAuthStore';

export const Messages = ({selectedChat}) => {

    // console.log(selectedChat);
    const { user } = useAuthStore();
    const [mensajeEnviado, setMensajeEnviado] = useState('');
    console.log('Me ejecute otra vez')
  
    const msgs = {
        listaChatEmisor: [
            {
                uid:'893yhfn398h83u2f1',
                emisor: {
                    uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc3',
                    fullname: 'Ginno Baptista',
                    correo_electronico: 'gino@correo',
                    mensaje: 'holi',
                },
            },
            {
                uid:'893yhfn39dfeg3u2f',
                emisor: {
                    uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc4',
                    fullname: 'Gabriel Diaz',
                    correo_electronico: 'gino@correo',
                    mensaje: 'holi',
                },
            },
            {
                uid:'893yhfnh443u2f3',
                emisor: {
                    uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc5',
                    fullname: 'Ginno Baptista',
                    correo_electronico: 'gino@correo',
                    mensaje: 'como estas?',
                },
            }
        ]
    };

    const handleSend = (mensaje) => {
        // Lógica para manejar el envío del mensaje
        // Puedes almacenar el mensaje en el estado o hacer cualquier otra lógica necesaria
        setMensajeEnviado(mensaje)
    };

    return (
        <div className="mesgs">

        {/* <!-- Historia inicio --> */}
        <div className="msg_history">
            {
                msgs.listaChatEmisor.map( (msg, index) => (
                    <React.Fragment key={index}>
                        {(msg.emisor.fullname === 'Ginno Baptista') ? (
                        <IncomingMessage mensaje={msg.emisor.mensaje} />
                        ) : (
                        <OutgoingMessage mensaje={msg.emisor.mensaje} />
                        )}
                    </React.Fragment>
                ))
            }

            {mensajeEnviado != '' ? <OutgoingMessage key={ 5 } mensaje={mensajeEnviado}/> : ''}

        </div>
        {/* <!-- Historia Fin --> */}

       <SendMessage  onSend={handleSend}/>

    </div>
    

  )
}
