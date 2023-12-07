
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { AdminLayout } from '../layout';

const columns = [
  { field: 'uid', headerName: 'UID', width: 100 },
  { field: 'fullname', headerName: 'FullName', width: 130 },
  { field: 'correo_electronico', headerName: 'Email', width: 180 },
  { field: 'iso_language', headerName: 'Lenguaje', width: 100 },
  { field: 'ciudad', headerName: 'Ciudad', width: 100 },
  { field: 'nombre_empresa', headerName: 'Empresa', width: 100 },
  { field: 'estado', headerName: 'Estado', width: 100 },
  {
    field: 'banButton',
    headerName: 'Banear',
    width: 120,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleBan(params.row.uid)}
        color="error"
      >
        Banear
      </Button>
    ),
  },
];

// const rows = [
  // {uid: 1, fullname: 'Jon Snow', correo_electronico: 'Jon@Snow.com',estado: 'Activo' },
  // { uid: 2, fullname: 'Cersei Lannister', correo_electronico: 'Cersei@Snow.com', estado:'Activo'},
  // { uid: 3, fullname: 'Jaime Lannister', correo_electronico: 'Jaime@Snow.com', estado: 'Activo'},
  // { uid: 4, fullname: 'Arya Stark', correo_electronico: 'Arya@Snow.com', estado: 'Activo' },
  // { uid: 5, fullname: 'Daenerys Targaryen', correo_electronico: 'Daenerys@Snow.com', estado: 'Activo' },
  // { uid: 6, fullname: 'Melisandre', correo_electronico: 'Melisandre@Snow.com', estado: 'Activo' },
  // { uid: 7, fullname: 'Ferrar Clifford', correo_electronico: 'Ferrrar@Snow.com', estado: 'Activo' },
  // { uid: 8, fullname: 'Rossini Frances', correo_electronico: 'Rossini@Snow.com', estado: 'Activo' },
  // { uid: 9, fullname: 'Harvey Roxie', correo_electronico: 'Harvey@Snow.com', estado: 'Activo' },
  // { uid: 10, fullname: 'Jon Snow', correo_electronico: 'Jon@Snow.com', estado: 'Activo' },
  // { uid: 11, fullname: 'Cersei Lannister', correo_electronico: 'Cersei@Snow.com', estado: 'Activo' },
  // { uid: 12, fullname: 'Jaime Lannister', correo_electronico: 'Jaime@Snow.com', estado: 'Activo' },
  // { uid: 13, fullname: 'Arya Stark', correo_electronico: 'Jon@Snow.com', estado: 'Activo' },
  // { uid: 14, fullname: 'Targaryen', correo_electronico: 'Targaryen@Snow.com', estado: 'Activo' },
  // { uid: 15, fullname: 'Melisandre', correo_electronico: 'Melisandre@Snow.com', estado: 'Activo' },
  // { uid: 16, fullname: 'Clifford', correo_electronico: 'Clifford@Snow.com', estado: 'Activo' },
  // { uid: 17, fullname: 'Frances', correo_electronico: 'Frances@Snow.com', estado: 'Activo' },
  // { uid: 18, fullname: 'Roxie', correo_electronico: 'Roxie@Snow.com', estado: 'Activo' },
// ];

const handleBan = (id) => {
  console.log(`Banear a usuario con ID: ${id}`);
};

export const UsersPage = ({userData}) => {
  const rows = [];
  if(userData.length === 0){
    return;
  };

  if(userData.listaClientes.length !== 0){
    userData.listaClientes.map(cliente => {
      const datos = {};

      if(cliente.cliente !== null){
        datos.uid = cliente.cliente.uid;
        datos.fullname = cliente.cliente.fullname;
        datos.correo_electronico = cliente.cliente.correo_electronico;
      }else{
        datos.uid = null
        datos.fullname = null;
        datos.correo_electronico = null;
      };

      if(cliente.unIdioma !== null){
        datos.iso_language = cliente.unIdioma.iso_language;
      }else{
        datos.iso_language = null
      };

      if(cliente.unaEmpresa !== null){
        datos.ciudad = cliente.unaEmpresa.ciudad;
        datos.nombre_empresa = cliente.unaEmpresa.nombre_empresa;
        datos.estado = cliente.cliente.estado;
      }else{
        datos.ciudad = null;
        datos.nombre_empresa = null;
        datos.estado = null;
      };

      rows.push(datos)
    })

    console.log(rows)
  }else{
    return;
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5,10, 15]}
      getRowId={(row) => row.uid} // Especifica el campo que sirve como identificador
    />
    </div>
  )
}
