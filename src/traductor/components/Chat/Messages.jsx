import React from 'react'
import { SendMessage, IncomingMessage, OutgoingMessage } from './'
import { useAuthStore } from '../../../hook/useAuthStore';

export const Messages = ({selectedChat}) => {

    console.log(selectedChat);
    const { user } = useAuthStore();
  
    const msgs = {
        listaChatEmisor: [
            {
                uid:'893yhfn398h83u2f',
                emisor: {
                    uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc3',
                    fullname: 'Ginno Baptista',
                    correo_electronico: 'gino@correo'
                },
                receptor: {
                    uid: '8r39hf3',
                    fullname: 'Gabriel Diaz',
                    correo_electronico: 'gabdihu@correo'
                }
            },
            {
                uid:'893yhfn39dfeg3u2f',
                emisor: {
                    uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc3',
                    fullname: 'Ginno Baptista',
                    correo_electronico: 'gino@correo'
                },
                receptor: {
                    uid: '8r39hf3',
                    fullname: 'Gabriel Diaz',
                    correo_electronico: 'gabdihu@correo'
                }
            },
            {
                uid:'893yhfnh443u2f',
                emisor: {
                    uid: '084cc118-2a30-4ad9-ba13-e07b26e50cc3',
                    fullname: 'Ginno Baptista',
                    correo_electronico: 'gino@correo'
                },
                receptor: {
                    uid: '8r39hf3',
                    fullname: 'Gabriel Diaz',
                    correo_electronico: 'gabdihu@correo'
                }
            }
        ]
    };
    return (
        <div className="mesgs">

        {/* <!-- Historia inicio --> */}
        <div className="msg_history">
            {
                msgs.listaChatEmisor.map( (msg, index) => (
                    <>
                        <IncomingMessage key={ index } />
                        <OutgoingMessage key={ index } />
                    </>
                ))
            }

            

        </div>
        {/* <!-- Historia Fin --> */}

       <SendMessage />

    </div>
    

  )
}
