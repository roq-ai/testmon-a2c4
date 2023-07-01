import axios from 'axios';
import queryString from 'query-string';
import { SubredditInterface, SubredditGetQueryInterface } from 'interfaces/subreddit';
import { GetQueryInterface } from '../../interfaces';

export const getSubreddits = async (query?: SubredditGetQueryInterface) => {
  const response = await axios.get(`/api/subreddits${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSubreddit = async (subreddit: SubredditInterface) => {
  const response = await axios.post('/api/subreddits', subreddit);
  return response.data;
};

export const updateSubredditById = async (id: string, subreddit: SubredditInterface) => {
  const response = await axios.put(`/api/subreddits/${id}`, subreddit);
  return response.data;
};

export const getSubredditById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/subreddits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSubredditById = async (id: string) => {
  const response = await axios.delete(`/api/subreddits/${id}`);
  return response.data;
};
