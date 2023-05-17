import React, { useEffect, useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { size } from "lodash";
import { ITeam, IUser } from "../../../interfaces";
import NoData from "../../common/NoData/NoData";
import TeamCreateEditModal from "./TeamCreateEditModal";
import teamsService from "../../../services/teamServices";
import ButtonAdd from "../../common/ButtonAdd/ButtonAdd";

const Teams = (props: any) => {
  const [rowData, setRowData] = useState<IUser[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const columnDefs = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "Members", headerName: "Email", width: 200 },
    {
      field: "",
      headerName: "",
      width: 180,
      renderCell: (params: any) => (
        <Box>
          <EditIcon onClick={() => handleUpdateTeam(params.row.id, params.row)} sx={{ mr: 2, cursor: "pointer" }} color="secondary" />
          <RemoveCircleIcon onClick={() => handleDeleteTeam(params.row.id)} sx={{ mr: 2, cursor: "pointer" }} color="primary" />
        </Box>
      ),
    },
  ];

  const hasTeams = size(rowData);

  const fetchTeams = async () => {
    // const teams = await teamsService.getAll();
    // setRowData(teams);
  };

  const fetchUsers = async () => {
    // const users = await usersService.getAll();
    // setRowData(users);
  };

  const handleSaveTeam = async (Team: ITeam) => {
    await teamsService.create(Team);
    setOpenModal(false);
    fetchTeams();
  };

  const handleUpdateTeam = async (id: string, Team: ITeam) => {
    await teamsService.update(id, Team);
    setOpenModal(false);
    fetchTeams();
  };

  const handleDeleteTeam = async (id: string) => {
    await teamsService.delete(id);
    fetchTeams();
  };

  useEffect(() => {
    fetchTeams();
    fetchUsers();
  }, []);

  return (
    <React.Fragment>
      <Grid item xs={12} md={12} lg={12}>
        {hasTeams ? (
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
      <ButtonAdd title="Add Team" onClick={() => setOpenModal(true)} />
      <TeamCreateEditModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSaveTeam}
        users={[]}
      />
    </React.Fragment>
  );
};

export default Teams;
