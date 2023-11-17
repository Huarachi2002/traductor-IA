import { useDispatch, useSelector } from "react-redux"
import traslateApi from "../api/traslateApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startLogin = async({correo, password}) =>{
        dispatch(onChecking());
        try {
            // console.log({correo,password});
            const {data} = await traslateApi.post('/auth/login',{correo,password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.usuarioData.nombre, id: data.usuarioData.uid, rol: data.usuarioData.rol}));
            navigate('/');
        } catch (error) {
            console.log(error);
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(()=>{
                dispatch(clearErrorMessage());
            },10)
        }
    }

    const startRegister = async({name,correo,password}) => {
        dispatch(onChecking());
        try {
            console.log({name,correo,password});
            const {data} = await traslateApi.post('/users',{nombre:name,correo,password,confirmPassword: password,rol: "USER_ROL"});
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.usuario.nombre, id: data.usuario.uid, rol: data.usuario.rol}));
            navigate('/');
        } catch (error) {
            console.log(error);
            dispatch(onLogout(error.response.data?.msg || 'Error al registrarse'));
            setTimeout(()=>{
                dispatch(clearErrorMessage());
            },10)
        }
    }

    // const checkAuthToken = async ()=>{
    //     const token = localStorage.getItem('token');
    //     if(!token) return dispatch(onLogout());
    //     try {
    //         const {data} = await traslateApi.get('/auth/renew');
    //         console.log(data);
    //         localStorage.setItem('token',data.token);
    //         localStorage.setItem('token-init-date', new Date().getTime());
    //         dispatch(onLogin({name: data.name, id: data.id}));

    //     } catch (error) {
    //         localStorage.clear();
    //         dispatch(onLogout());
    //         setTimeout(()=>{
    //             dispatch(clearErrorMessage());
    //         },10)
    //     }
    // }

    const startLogout = ()=>{
        localStorage.clear();
        dispatch(onLogout());
    }
    
    return {
        // Propiedades
        status,
        user,
        errorMessage,
        // Metodos
        startLogin,
        startRegister,
        // checkAuthToken,
        startLogout
    }
}