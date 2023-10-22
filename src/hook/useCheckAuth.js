import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export const useCkeckAuth = () => {
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
  
    }, []);
    
    return status;
    
}
