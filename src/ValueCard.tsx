import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import Icon from "@mui/material/Icon";
import { Avatar, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ValueCardProps {
  title: string;
  value: string;
  text?: string;
  icon?: React.ReactNode;
  link?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  value,
  text,
  link,
}) => {
  const navigateTo = useNavigate();

  const handleLinkClick = () => {
    if (link) {
      navigateTo(link);
    }
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: 170,
        bgcolor: "#333862",
        borderRadius: 2,
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ bgcolor: "#fff", mr: 2 }}>
          <Icon color="primary">{icon}</Icon>
        </Avatar>
        <Title color="#fff">{title}</Title>
      </Box>
      <Typography color="#fff" component="p" variant="h4">
        {value}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {text}
      </Typography>
      {link && (
        <div>
          <Link
            component="button"
            variant="body2"
            color="#fff"
            onClick={handleLinkClick}
          >
            View
          </Link>
        </div>
      )}
    </Paper>
  );
};

export default ValueCard;
