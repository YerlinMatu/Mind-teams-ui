import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { ITeam, IUser } from "../../../interfaces";

interface ITeamModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (team: ITeam) => void;
  team?: ITeam;
  users: IUser[];
}

const AccountCreateEditModal: React.FC<ITeamModalProps> = ({
  open,
  onClose,
  onSave,
  team = {
    name: "",
    members: [],
  },
  users,
}) => {
  const [formData, setFormData] = useState<ITeam>(team);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMembersChange = (event: React.ChangeEvent<{}>, value: IUser[]) => {
    setFormData({ ...formData, members: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{team.id ? "Edit Team" : "Create Team"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          variant="filled"
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
        />
        <Autocomplete
          multiple
          options={users}
          getOptionLabel={(user) => user.name}
          value={formData.members}
          onChange={handleMembersChange}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="dense"
              variant="filled"
              required
              label="Members"
              name="members"
              type="text"
              id="members"
              autoComplete="off"
              fullWidth
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountCreateEditModal;
