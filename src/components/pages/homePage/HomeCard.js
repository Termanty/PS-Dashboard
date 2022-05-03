import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function HomeCard({id, name, description}) {
  return (

      <Card key={id}
      sx={{ maxWidth: 345, Height:200, textAlign: "center", justifyContent: "center", border: "1px solid black", padding: "5px" }}
      >
        <CardContent>
        <Typography sx={{ fontSize: "30px", fontWeight: 800 }}>
          {name}
        </Typography>
        <Typography sx={{fontSize: "22px"}}>
          {description}
        </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: "center", float: "bottom"}}>
          <Button
          sx={{ width:"120px",
          height: "40px",
          backgroundColor: "#D66434",
          borderRadius: "5px",
          color: "white",
          }}
          >
            Read more
          </Button>
        </CardActions>
        </Card>
  )
}

export default HomeCard
