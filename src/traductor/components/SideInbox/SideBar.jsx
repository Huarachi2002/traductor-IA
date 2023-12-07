import { Grid } from '@mui/material';
import '../../../css/chat.css';
import { useAuthStore } from '../../../hook/useAuthStore';
import { SidebarChat } from "./SidebarChat";
import { useState } from 'react';

export const SideBar = ({onChatSelected}) => {
  const chats = [
    {id: '8r39hf3', name: 'Gabriel', estado:'Online'},
    {id: '8r39hf4', name: 'Ginno', estado:'Offline'},
    {id: '8r39hf5', name: 'Wu', estado:'Online'},
    {id: '8r39hf6', name: 'Dario', estado:'Online'},
    {id: '8r39hf7', name: 'Yefferson', estado:'Offline'},
    {id: '8r39hf8', name: 'Micaela', estado:'Online'},
    {id: '8r39hf9', name: 'Julio', estado:'Offline'}
  ];
  const [clicked, setClicked] = useState(null);

  const handleClick = (id) => {
    setClicked(id);
    onChatSelected(id)
  };
  return (
    <Grid className="inbox_chat">

        {
            chats.map( (chat) => (
              <Grid item xs={12} key={chat.id}>
                  <SidebarChat 
                    chat={chat}
                    handleClick={() => handleClick(chat.id)}
                    clicked={clicked}
                  />
              </Grid>
            ))
        }


        {/* <!-- Espacio extra para scroll --> */}
        <div className="extra_space"></div>


    </Grid>
  )
}
