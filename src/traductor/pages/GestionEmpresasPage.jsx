
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { AdminLayout } from '../layout';
import { useEffect } from 'react';

const columns = [
  { field: 'uid', headerName: 'UID'},
  { field: 'nombre_empresa', headerName: 'Empresa'},
  { field: 'correo_electronico', headerName: 'Email',},
  { field: 'direccion', headerName: 'Direccion'},
  { field: 'ciudad', headerName: 'Ciudad'},
  { field: 'estado', headerName: 'Estado'},
  {
    field: 'banButton',
    headerName: 'Banear',
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

const rows = [
  { uid: 1, nombre_empresa: 'Sofia', correo_electronico: 'Jon@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 2, nombre_empresa: 'UAGRM', correo_electronico: 'Cersei@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado:'Activo'},
  { uid: 3, nombre_empresa: 'Pago facil', correo_electronico: 'Jaime@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo'},
  { uid: 4, nombre_empresa: 'Pedidos YA', correo_electronico: 'Arya@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 5, nombre_empresa: 'YANGO', correo_electronico: 'Daenerys@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 6, nombre_empresa: 'Uber', correo_electronico: 'Melisandre@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 7, nombre_empresa: 'Assure', correo_electronico: 'Ferrrar@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 8, nombre_empresa: 'Microsoft', correo_electronico: 'Rossini@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 9, nombre_empresa: 'Iphone', correo_electronico: 'Harvey@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 10, nombre_empresa: 'Android', correo_electronico: 'Jon@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 11, nombre_empresa: 'Google', correo_electronico: 'Cersei@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 12, nombre_empresa: 'Huawei', correo_electronico: 'Jaime@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 13, nombre_empresa: 'Disney', correo_electronico: 'Jon@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 14, nombre_empresa: 'Warner', correo_electronico: 'Targaryen@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 15, nombre_empresa: 'UAGRM', correo_electronico: 'Melisandre@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 16, nombre_empresa: 'Sofia', correo_electronico: 'Clifford@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 17, nombre_empresa: 'Frances', correo_electronico: 'Frances@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
  { uid: 18, nombre_empresa: 'Pedidos', correo_electronico: 'Roxie@Snow.com', direccion: 'Av. Pesherman C/ Ualabi 42 Sidney', ciudad: 'Polonia', estado: 'Activo' },
];

const handleBan = (uid) => {
  console.log(`Banear a empresa con UID: ${uid}`);
};

export const GestionEmpresasPage = () => {

    return (
        <div style={{ height: '100%', width: '100%'}}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10, 15]}
            getRowId={(row) => row.uid} // Especifica el campo que sirve como identificador
        />
        </div>
    )
}
