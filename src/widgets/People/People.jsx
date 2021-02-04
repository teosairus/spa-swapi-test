import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InfoDialog from "../InfoDialog";
import "./people-styles.scss";

const People = (props) => {
  const { people } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [arrData, setArrData] = useState("");

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < Object.values(people).length; i += 1) {
      if (Array.isArray(Object.values(people)[i])) {
        temp = [
          ...temp,
          {
            count: Object.values(people)[i].length,
            name: Object.keys(people)[i],
          },
        ];
      }
    }
    setArrData([...temp]);
  }, [people]);

  return (
    <Grid container spacing={3} classes={{ root: "people-container" }}>
      <Grid item xs={12} m={12}>
        <span className="people-title">{people.name}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Gender: ${people.gender}`}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Birth Year: ${people.birth_year}`}</span>
      </Grid>

      <Grid item xs={6}>
        <span>{`Created: ${
          new Date(people.created).toLocaleString().split(",")[0]
        }`}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Edited: ${
          new Date(people.edited).toLocaleString().split(",")[0]
        }`}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Height: ${people.height}`}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Mass: ${people.mass}`}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Skin Color: ${people.skin_color}`}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Hair Color: ${people.hair_color}`}</span>
      </Grid>
      <Grid item xs={6}>
        <span>{`Eye Color: ${people.eye_color}`}</span>
      </Grid>

      <Grid item xs={12} m={3}>
        <a className="people-link" href={people.url}>
          Click to check SWAPI PEOPLE URL
        </a>
      </Grid>
      <Grid item xs={12} m={3}>
        <a className="people-link" href={people.homeworld}>
          Click to check HOMEWORLD URL
        </a>
      </Grid>
      <Grid item xs={12} m={12}>
        <Button
          onClick={() => {
            setOpenDialog(true);
          }}
          variant="outlined"
          color="primary"
        >
          See more
        </Button>
      </Grid>
      {openDialog && (
        <InfoDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          arrData={arrData}
        />
      )}
    </Grid>
  );
};

export default People;
