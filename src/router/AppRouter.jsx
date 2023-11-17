import { Navigate, Route, Routes } from 'react-router-dom';
import { CheckingAuth } from '../ui/';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useAuthStore } from '../hook/useAuthStore';
import { PaymentPage, TraductorPage, UsersPage } from '../traductor/pages';

export const AppRouter = () => {
    const {status} = useAuthStore();

    // useEffect(() => {
    //   checkAuthToken();
    // }, []);
  
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
                        <Route path="/" element={ <TraductorPage /> } />
                        <Route path="/users" element={ <UsersPage /> } />
                        <Route path="/payment" element={ <PaymentPage /> } />
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
