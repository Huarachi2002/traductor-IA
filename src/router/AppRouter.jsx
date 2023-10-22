import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckingAuth } from '../ui/';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TraductorRoutes } from '../traductor/routes/TraductorRoutes';
import { useCkeckAuth } from '../hook';

export const AppRouter = () => {
    const status = useCkeckAuth();
  
    if(status === 'checking'){
      return <CheckingAuth/>;
    }
    return (
      <Routes>
        {
          (status === 'authenticated')
          ?  <Route path="/*" element={<TraductorRoutes/>}/>
          :  <Route path="/auth/*" element={<AuthRoutes/>}/>
        }
        <Route path="/*" element={<Navigate to='/auth/login'/>}/>
         
      </Routes>
  )
}
