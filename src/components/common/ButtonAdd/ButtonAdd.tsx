import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface IButtonAddProps {
  title?: string;
  onClick: () => void;
}

const ButtonAdd: React.FC<IButtonAddProps> = ({ title, onClick }) => (
  <Fab
    color="secondary"
    aria-label="add"
    variant="extended"
    onClick={onClick}
    style={{ position: "fixed", bottom: 16, right: 16 }}
  >
    <AddIcon /> {title}
  </Fab>
);

export default ButtonAdd;