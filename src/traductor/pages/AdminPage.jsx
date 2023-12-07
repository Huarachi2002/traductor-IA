import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../layout';
import { UsersPage } from './UsersPage';
import { Dashboard } from './Dashboard';
import { GestionEmpresasPage } from './GestionEmpresasPage';

import traslateApi from "../../api/traslateApi";

export const AdminPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Realiza la lógica para obtener datos según la opción seleccionada
    const fetchData = async () => {
      if (selectedItem === 'Usuarios') {
        try {
          const { data } = await traslateApi.get('/users', {
            headers: {
              'x-token': localStorage.getItem('token'),
              // Otros encabezados según sea necesario
            },
          });
          // Almacena los datos en el estado
          setUserData(data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [selectedItem]);  // Este efe

  const handleNavegationItemClick = async (selectedOption) => {
    setSelectedItem(selectedOption);
  };

  const componentMapping = {
    Dashboard: <Dashboard/>,
    Usuarios: <UsersPage userData={userData}/>,
    Empresas: <GestionEmpresasPage />,
    // Agrega más opciones según sea necesario
  };  

  return (
    <AdminLayout onNavegationItemClick={handleNavegationItemClick}>
      {/* Utiliza el objeto 'componentMapping' para seleccionar y renderizar el componente */}
      {selectedItem === 'Usuarios' ? componentMapping[selectedItem] : null}
      {selectedItem === 'Dashboard' ? componentMapping[selectedItem] : null}
      {selectedItem === 'Empresas' ? componentMapping[selectedItem] : null}
    </AdminLayout>
  )
}
