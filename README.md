# SubReddit Search
This app helps to show the top articles in a given subreddit

## Run locally

## Change api url in /public/config.js to Local Nodejs server url

```
    const config = {
        api: "https://subreddit-api-dg.herokuapp.com/api/v1"
    };
```

## Install
```
npm install
```
## Run

```
npm start
```

Then browse to `localhost:3000`

## Run Tests

```
npm test
```

## About

This app uses React and Material-ui 

### Production Link on Heroku

```
https://subreddit-ui-dg.herokuapp.com
```

### Screen 

<table style={border:"none"}><tr><td><img src="https://github.com/dgundogan/subreddit-ui/blob/master/screen.png" alt="Landing Page" width="800"/></td></tr></table>


### Usage

When activated by the app, the search dialog appears at the top of the homepage. When the user submits a query, the app calls the back-end api and retreive the top top articles. 

