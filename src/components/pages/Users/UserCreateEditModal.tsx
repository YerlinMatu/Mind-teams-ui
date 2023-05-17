import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";
import { IUser } from "../../../interfaces";
import { size } from "lodash";

interface IUserModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (user: IUser) => void;
  user?: IUser;
}

const UserCreateEditModal: React.FC<IUserModalProps> = ({
  open,
  onClose,
  onSave,
  user = {
    name: "",
    email: "",
    password: "",
    technicalSkills: "",
    englishLevel: "",
    role: "normal",
    cvLink: "",
  },
}) => {
  const [formData, setFormData] = useState<IUser>(user);
  const [skills, setSkills] = useState<string[]>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChipChange = (skills: string[]) => {
    const technicalSkills = skills.join(", ");
    setFormData({ ...formData, technicalSkills });
    setSkills(skills);
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{user.id ? "Edit User" : "Create User"}</DialogTitle>
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
        <TextField
          margin="dense"
          variant="filled"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          variant="filled"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          margin="dense"
          variant="filled"
          label="English Level"
          name="englishLevel"
          select
          value={formData.englishLevel}
          onChange={handleInputChange}
          fullWidth
        >
          <MenuItem value="basic">Basic</MenuItem>
          <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="advanced">Advanced</MenuItem>
          <MenuItem value="fluent">Fluent</MenuItem>
        </TextField>
        <MuiChipsInput
          margin="dense"
          variant="filled"
          label={!size(skills) && "Technical Skills"}
          name="technicalSkills"
          value={skills}
          onChange={handleChipChange}
          fullWidth
        />
        <TextField
          margin="dense"
          variant="filled"
          label="CV Link"
          type="text"
          name="cvLink"
          value={formData.cvLink}
          onChange={handleInputChange}
          fullWidth
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

export default UserCreateEditModal;
