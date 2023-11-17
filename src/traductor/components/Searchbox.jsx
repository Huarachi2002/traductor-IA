import { LogoutOutlined, Store, Storefront } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useAuthStore } from "../../hook/useAuthStore"
import { LongMenu } from "./LongMenu";
import { useNavigate } from "react-router-dom";

export const Searchbox = () => {
    const navigate = useNavigate();
    const { startLogout , user} = useAuthStore();

    const handleClick = () => {
        navigate('/payment')
    }
    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>{user.name}</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    {
                        (user.rol === "ADMIN_ROLE")
                        ? <LongMenu/>
                        : (
                            <>
                                <IconButton>
                                    <LogoutOutlined sx={{color: 'red'}} onClick={startLogout}/>
                                </IconButton>
                                <IconButton>
                                    <Storefront sx={{color:'yellowgreen'}} onClick={handleClick}/>   
                                </IconButton>
                            </>
                            
                        )
                    }
                </div>
            </div>
        </div>
    )
}