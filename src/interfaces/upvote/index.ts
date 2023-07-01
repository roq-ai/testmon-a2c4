import { UserInterface } from 'interfaces/user';
import { PostInterface } from 'interfaces/post';
import { CommentInterface } from 'interfaces/comment';
import { GetQueryInterface } from 'interfaces';

export interface UpvoteInterface {
  id?: string;
  user_id: string;
  post_id?: string;
  comment_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  post?: PostInterface;
  comment?: CommentInterface;
  _count?: {};
}

export interface UpvoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  post_id?: string;
  comment_id?: string;
}
