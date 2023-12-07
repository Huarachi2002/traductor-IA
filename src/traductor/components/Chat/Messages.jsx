import React, { useEffect, useState } from 'react'
import { SendMessage, IncomingMessage, OutgoingMessage } from './'
import { useAuthStore } from '../../../hook/useAuthStore';
import traslateApi from '../../../api/traslateApi';

export const Messages = ({selectedChat}) => {

    // console.log(selectedChat);
    const uid = localStorage.getItem('uid')
    const { user } = useAuthStore();
    const [mensaje, setMensaje] = useState([]);
    const [mensajeEnviado, setMensajeEnviado] = useState('');
    console.log('Me ejecute otra vez')
  
    const obtenerChats = async () => {
        const {data} = await traslateApi.get(`/chat/ver_chats_por_usuario/e469c858-bbfe-45a8-b033-1577f8af6e3f`);
        setMensaje(data.listaChatReceptor[0].listaMensaje)
        console.log(data)
    }
    useEffect(() => {
      
        obtenerChats();
      
    }, [])
    
    // const msgs = {
    //     listaChatEmisor: [
    //         {
    //             uid:'893yhfn398h83u2f1',
    //             emisor: {
    //                 uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc3',
    //                 fullname: 'Ginno Baptista',
    //                 correo_electronico: 'gino@correo',
    //                 mensaje: 'holi',
    //             },
    //         },
    //         {
    //             uid:'893yhfn39dfeg3u2f',
    //             emisor: {
    //                 uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc4',
    //                 fullname: 'Gabriel Diaz',
    //                 correo_electronico: 'gino@correo',
    //                 mensaje: 'holi',
    //             },
    //         },
    //         {
    //             uid:'893yhfnh443u2f3',
    //             emisor: {
    //                 uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc5',
    //                 fullname: 'Ginno Baptista',
    //                 correo_electronico: 'gino@correo',
    //                 mensaje: 'como estas?',
    //             },
    //         }
    //     ]
    // };

    const handleSend = async (mensaje) => {
        // Lógica para manejar el envío del mensaje
        // Puedes almacenar el mensaje en el estado o hacer cualquier otra lógica necesaria
        setMensajeEnviado(mensaje)
        await traslateApi.post(`/chat/crear_mensaje_agregar_al_chat`,{
            mensaje: mensaje,
            uid_chat: '37ca851d-8b8d-4bb1-a463-16473b7814f1',
            uid_usuario: uid,
        },{
            headers: {
                'x-token': localStorage.getItem('token'),
                // Otros encabezados según sea necesario
            },
        })
    };

    return (
        <div className="mesgs">

        {/* <!-- Historia inicio --> */}
        <div className="msg_history">
            {
                mensaje.map( (msg, index) =>(
                    <React.Fragment key={msg.uid_mensaje}>
                        {(msg.uid_usuario === uid) ? (
                        <OutgoingMessage mensaje={msg.mensaje} />
                        ) : (
                        <IncomingMessage mensaje={msg.mensaje} />
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
