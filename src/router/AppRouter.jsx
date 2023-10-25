import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckingAuth } from '../ui/';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TraductorRoutes } from '../traductor/routes/TraductorRoutes';
// import { useCkeckAuth } from '../hook';
import { useAuthStore } from '../hook/useAuthStore';
import { useEffect } from 'react';

export const AppRouter = () => {
    const {status,checkAuthToken} = useAuthStore();

    useEffect(() => {
      checkAuthToken();
    }, []);
  
    if(status === 'checking'){
      return <CheckingAuth/>;
    }
    return (
      <Routes>
        {
            ( status === 'not-authenticated')  
                ? (
                    <>
                        <Route path="/auth/*" element={ <AuthRoutes /> } />
                        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                    </>
                )
                : (
                    <>
                        <Route path="/" element={ <TraductorRoutes /> } />
                        <Route path="/*" element={ <Navigate to="/" /> } />
                    </>
                )
        }




        {/* {
          (status === 'authenticated')
          ?  <Route path="/*" element={<TraductorRoutes/>}/>
          :  <Route path="/auth/*" element={<AuthRoutes/>}/>
        }
        <Route path="/*" element={<Navigate to='/auth/login'/>}/> */}
         
      </Routes>
  )
}
