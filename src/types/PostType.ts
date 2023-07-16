import { User } from "./User";

export interface PostType {
  id: number;
  title: string;
  user: User;
  body: string;
  created_at: string;
}

export interface Repository {
  total_count: number;
  items: PostType[];
}