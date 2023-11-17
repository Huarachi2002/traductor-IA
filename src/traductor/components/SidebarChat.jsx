import React from 'react'
import { useAuthStore } from '../../hook/useAuthStore'

export const SidebarChat = () => {
  return (
    <div className="chat_list">
        <div className="chat_people">
            <div className="chat_img"> 
                <img src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="sunil" />
            </div>
            <div className="chat_ib">
                <h5>un ramdom</h5>
                <span className="text-success">Online</span>
                <span className="text-danger">Offline</span>
            </div>
        </div>
    </div>
  )
}
