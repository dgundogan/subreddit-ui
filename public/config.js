(function configLoader(){
    const config = {
        api: "https://subreddit-api-dg.herokuapp.com/api/v1"
    };
    localStorage.removeItem("config");
    localStorage.setItem("config", JSON.stringify(config));
})();