import { PostInterface } from 'interfaces/post';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SubredditInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  post?: PostInterface[];
  organization?: OrganizationInterface;
  _count?: {
    post?: number;
  };
}

export interface SubredditGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
