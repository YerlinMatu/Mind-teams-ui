import React from "react";
import { Grid } from "@mui/material";
// @common
import ValueCard from "../../../ValueCard";

// @Icons
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Groups2Icon from "@mui/icons-material/Groups2";
import GroupIcon from "@mui/icons-material/Group";
import MoveUpIcon from "@mui/icons-material/MoveUp";

const cards = [
  {
    title: "Accounts",
    value: "22",
    text: "",
    icon: <AccountTreeIcon />,
    link: "/accounts",
  },
  {
    title: "Teams",
    value: "30",
    text: "",
    icon: <Groups2Icon />,
    link: "/teams",
  },
  {
    title: "Users",
    value: "40",
    text: "",
    icon: <GroupIcon />,
    link: "/users",
  },
  {
    title: "Movements",
    value: "40",
    text: "",
    icon: <MoveUpIcon />,
    link: "/movements",
  },
];

const Dashboard = () => {
  return (
    <React.Fragment>
      {cards.map((card) => (
        <Grid key={card.title} item xs={12} md={4} lg={3}>
          <ValueCard
            title={card.title}
            value={card.value}
            text={card.text}
            icon={card.icon}
            link={card.link}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Dashboard;