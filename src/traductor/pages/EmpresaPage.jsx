import React, { useState } from 'react';
import { UsersPage } from './UsersPage';
import { GestionEmpresasPage } from './GestionEmpresasPage';
import { EmpresaLayout } from '../layout/EmpresaLayout';

const componentMapping = {
  Usuarios: <UsersPage />,
  Empresas: <GestionEmpresasPage />,
  // Agrega más opciones según sea necesario
};

export const EmpresaPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavegationItemClick = (selectedOption) => {
      setSelectedItem(selectedOption);
  };

  return (
    <EmpresaLayout onNavegationItemClick={handleNavegationItemClick}>
      {/* Utiliza el objeto 'componentMapping' para seleccionar y renderizar el componente */}
      {selectedItem === 'Usuarios' ? componentMapping[selectedItem] : null}
      {selectedItem === 'Empresas' ? componentMapping[selectedItem] : null}
    </EmpresaLayout>
  )
}
