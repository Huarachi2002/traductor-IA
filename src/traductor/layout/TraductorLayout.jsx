import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const TraductorLayout = ({children}) => {
  return (
    <Box 
      className="animate__animated animate__fadeIn animate__faster"
      sx={{display: 'flex'}}>
        {/* NavBar */}
        <NavBar drawerWidth={drawerWidth}/>
        {/* SideBar */}
        <SideBar drawerWidth={drawerWidth}/>

        <Box component='main' sx={{flexGrow: 1, p:1}}>         
            {/* Toolbar */}
            <Toolbar/>
            {children}
        </Box>
    </Box>
  )
}
