export interface Comment {
  id: number;
  user: string;
  text: string;
  indent: number; // 0 for root, 1 for nested, etc.
}

export interface NewsItem {
  id: number;
  title: string;
  url: string;
  domain: string;
  points: number;
  user: string;
  timeAgo: string; // "2 hours ago"
  comments: Comment[];
  text?: string; // Optional text content for the article itself
}

export enum ViewState {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
  ABOUT = 'ABOUT'
}