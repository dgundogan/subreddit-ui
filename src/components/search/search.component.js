import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { get } from "../../service/punkService";
import Grid from "@material-ui/core/Grid";
import ListPreview from "../list/list.component";

const styles = theme => ({
  container: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  button: {
    margin: theme.spacing(1),
    height: 60
  },
  listContainer: {
    width: "100%",
    marginTop: 20,
  }
});

const Search = props => {
  const [subreddit, setSubreddit] = useState(0);
  const [subreddits, setSubreddits] = useState([]);

  const handleFood = e => setSubreddit(e.target.value);

  const search = async () => {
    setSubreddit([]);
    await get(subreddit).then(res => res.json())
                        .then(res => setSubreddits(res))
                        .catch(err => {
                          setSubreddits([]);
                          console.log(err);
                        });
  };

    const { classes } = props;
    return (
      <div className={classes.container}>
        <Grid container spacing={10} justify="center">
          <Grid item>
            <form
              className={classes.container}
              noValidate
              onSubmit={search}
            >
              <div>
                <TextField
                  id="standard-basic"
                  className={classes.textField}
                  onChange={handleFood}
                  label="Subreddit"
                  placeholder="e.g. News"
                  margin="normal"
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={search}
                >
                  Search
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
        <div className={classes.listContainer}>
          <ListPreview subreddits={subreddits} />
        </div>
      </div>
    );
}

export default withStyles(styles)(Search);
