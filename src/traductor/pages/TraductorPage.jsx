import '../../css/chat.css';
import { Messages } from "../components";
import { TraductorLayout } from '../layout/TraductorLayout';

export const TraductorPage = () => {

  return (
    <TraductorLayout>
      <Messages/>
    </TraductorLayout>
  )
}
