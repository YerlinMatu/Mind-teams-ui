import React, { useEffect, useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { size } from "lodash";
import { IUser } from "../../../interfaces";
import NoData from "../../common/NoData/NoData";
import UserCreateEditModal from "./UserCreateEditModal";
import usersService from "../../../services/usersService";
import ButtonAdd from "../../common/ButtonAdd/ButtonAdd";

const Users = (props: any) => {
  const [rowData, setRowData] = useState<IUser[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const columnDefs = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "englishLevel", headerName: "English Level", width: 150 },
    { field: "technicalSkills", headerName: "Technical Skills", width: 200 },
    { field: "cvLink", headerName: "CV Link", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    {
      field: "",
      headerName: "",
      width: 180,
      renderCell: (params: any) => (
        <Box>
          <EditIcon onClick={() => handleUpdateUser(params.row.id, params.row)} sx={{ mr: 2, cursor: "pointer" }} color="secondary" />
          <RemoveCircleIcon onClick={() => handleDeleteUser(params.row.id)} sx={{ mr: 2, cursor: "pointer" }} color="primary" />
        </Box>
      ),
    },
  ];

  const hasUsers = size(rowData);

  const fetchUsers = async () => {
    // const users = await usersService.getAll();
    // setRowData(users);
  };

  const handleSaveUser = async (user: IUser) => {
    await usersService.create(user);
    setOpenModal(false);
    fetchUsers();
  };

  const handleUpdateUser = async (id: string, user: IUser) => {
    await usersService.update(id, user);
    setOpenModal(false);
    fetchUsers();
  };

  const handleDeleteUser = async (id: string) => {
    await usersService.delete(id);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      <Grid item xs={12} md={12} lg={12}>
        {hasUsers ? (
          <Paper>
            <DataGrid
              sx={{
                color: "secondary",
              }}
              rows={rowData}
              columns={columnDefs}
              components={{ Toolbar: GridToolbar }}
            />
          </Paper>
        ) : (
          <NoData />
        )}
      </Grid>
      <ButtonAdd title="Add User" onClick={() => setOpenModal(true)} />
      <UserCreateEditModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSaveUser}
      ></UserCreateEditModal>
    </React.Fragment>
  );
};

export default Users;
