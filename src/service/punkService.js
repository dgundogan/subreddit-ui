import { config } from '../config/config';

export const get = subreddit => {
  return fetch(`${config.api}/subreddits/` + subreddit);
};
