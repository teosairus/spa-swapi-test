import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { CSVLink } from "react-csv";
import FilmDetails from "../../widgets/FilmDetails";
import People from "../../widgets/People";
import GetInfo from "../../httpRequests/GetInfo";
import "./main-styles.scss";

const Main = (props) => {
  const { page } = props;
  const [data, setData] = useState("");
  const [planets, setPlanets] = useState("");

  useEffect(() => {
    GetInfo("planets").then((res) => {
      if (res.status === 200) {
        let text = res.data;
        text = text.replace(/whhuanan/g, '"whhuanan"');
        const formattedText = JSON.parse(text);
        let temp = [];

        for (let i = 0; i < Object.values(formattedText).length; i += 1) {
          if (!Array.isArray(Object.values(formattedText)[i])) {
            temp = [
              ...temp,
              {
                [Object.keys(formattedText)[i]]: Object.values(formattedText)[
                  i
                ],
              },
            ];
          }
        }
        setPlanets(temp);
      }
    });
  }, []);

  useEffect(() => {
    setData("");
    if (page === "people") {
      GetInfo("people").then((res) => {
        if (res.status === 200) {
          setData(res.data.results);
        }
      });
    } else {
      GetInfo("films").then((res) => {
        if (res.status === 200) {
          setData(res.data.results);
        }
      });
    }
  }, [page]);

  if (data.length > 0 && page === "films") {
    return (
      <Grid container spacing={3} classes={{ root: "main-container" }}>
        <Grid item xs={12}>
          {data.map((film) => {
            return <FilmDetails key={film.title} film={film} />;
          })}
        </Grid>
        <Grid item xs={12}>
          <CSVLink data={planets}>Export Planets in CSV</CSVLink>
        </Grid>
      </Grid>
    );
  } else if (data.length > 0 && page === "people") {
    return (
      <Grid container spacing={3} classes={{ root: "main-container" }}>
        <Grid item xs={12}>
          {data.map((people) => {
            return <People key={people.name} people={people} />;
          })}
        </Grid>
        <Grid item xs={12}>
          <CSVLink data={planets}>Export Planets in CSV</CSVLink>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container spacing={3} classes={{ root: "main-container" }}>
      <Grid classes={{ root: "main-error-container" }} item xs={12}>
        <span className="main-error-message">
          We could not fetch data. Please try again later...
        </span>
      </Grid>
      <Grid item xs={12}>
        <CSVLink data={planets}>Export Planets in CSV</CSVLink>
      </Grid>
    </Grid>
  );
};

export default Main;
