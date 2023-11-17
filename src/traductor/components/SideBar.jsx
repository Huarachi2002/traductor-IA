import '../../css/chat.css';
import { useAuthStore } from '../../hook/useAuthStore';
import { SidebarChat } from "./SidebarChat";
export const SideBar = () => {
    const chats = [1,2,3,4,5,6];
  return (
    <div className="inbox_chat">

        {
            chats.map( (chat) => (
                <SidebarChat key={ chat }/>
            ))
        }


        {/* <!-- Espacio extra para scroll --> */}
        <div className="extra_space"></div>


    </div>
  )
}
