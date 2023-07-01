import { CommentInterface } from 'interfaces/comment';
import { UpvoteInterface } from 'interfaces/upvote';
import { UserInterface } from 'interfaces/user';
import { SubredditInterface } from 'interfaces/subreddit';
import { GetQueryInterface } from 'interfaces';

export interface PostInterface {
  id?: string;
  content: string;
  user_id: string;
  subreddit_id: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  upvote?: UpvoteInterface[];
  user?: UserInterface;
  subreddit?: SubredditInterface;
  _count?: {
    comment?: number;
    upvote?: number;
  };
}

export interface PostGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  subreddit_id?: string;
}
