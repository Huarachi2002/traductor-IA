import { ChatSelect } from "../components/ChatSelect";
import { InboxPeople } from "../components/InboxPeople";

export const TraductorLayout = ({children}) => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
          <InboxPeople />
          {
            (true)
            ? children
            : <ChatSelect />
          }
      </div>
    </div>
  )
}
