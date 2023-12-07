import React, { useState } from 'react';
import { AdminLayout } from '../layout';
import { UsersPage } from './UsersPage';
import { Dashboard } from './Dashboard';
import { GestionEmpresasPage } from './GestionEmpresasPage';

const componentMapping = {
  Dashboard: <Dashboard />,
  Usuarios: <UsersPage />,
  Empresas: <GestionEmpresasPage />,
  // Agrega más opciones según sea necesario
};

export const AdminPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavegationItemClick = (selectedOption) => {
      setSelectedItem(selectedOption);
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
