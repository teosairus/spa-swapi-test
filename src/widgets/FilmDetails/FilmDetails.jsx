import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InfoDialog from "../InfoDialog";

import "./filmDetails-styles.scss";

const FilmDetails = (props) => {
  const { film } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [arrData, setArrData] = useState("");

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < Object.values(film).length; i += 1) {
      if (Array.isArray(Object.values(film)[i])) {
        temp = [
          ...temp,
          {
            count: Object.values(film)[i].length,
            name: Object.keys(film)[i],
          },
        ];
      }
    }
    setArrData([...temp]);
  }, [film]);

  return (
    <Grid container spacing={3} classes={{ root: "filmDetails-container" }}>
      <Grid item xs={12} m={12}>
        <span className="filmDetails-title">{film.title}</span>
      </Grid>
      <Grid item xs={12} m={12}>
        <span className="filmDetails-subtitle">{`by ${film.director}`}</span>
      </Grid>
      <Grid item xs={12} m={12}>
        <span className="filmDetails-subtitle">{`Producers: ${film.director}`}</span>
      </Grid>

      <Grid item xs={6} m={3}>
        <span>{`Episode ID: ${film.episode_id}`}</span>
      </Grid>
      <Grid item xs={6} m={3}>
        <span>{`Release: ${film.release_date}`}</span>
      </Grid>
      <Grid item xs={6} m={3}>
        <span>{`Created: ${
          new Date(film.created).toLocaleString().split(",")[0]
        }`}</span>
      </Grid>
      <Grid item xs={6} m={3}>
        <span>{`Edited: ${
          new Date(film.edited).toLocaleString().split(",")[0]
        }`}</span>
      </Grid>
      <Grid item xs={12} m={12}>
        <span>{film.opening_crawl}</span>
      </Grid>
      <Grid item xs={12} vm={12}>
        <a className="filmDetails-link" href={film.url}>
          Click to check SWAPI URL
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

export default FilmDetails;
