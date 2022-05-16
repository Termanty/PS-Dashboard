import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function HomeCard({ id, name, description, link }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <Card
      key={id}
      sx={{
        maxWidth: 345,
        height: 260,
        textAlign: "center",
        border: "1px solid black",
        padding: "5px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: "30px", fontWeight: 800 }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: "22px" }}>{description}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          sx={{
            width: "120px",
            height: "40px",
            backgroundColor: "#D66434",
            borderRadius: "5px",
            color: "white",
          }}
          onClick={onClickUrl(link)}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}

export default HomeCard;
