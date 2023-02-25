type Trend = {
  hashtag: string;
  count: number;
};

type User = {
  display_name: string;
  handle: string;
};

type Activity = {
  id: number;
  handle: string;
  display_name: string;
  message: string;
  created_at: string;
  expires_at: string;
  uuid: string;
  replies: Activity[];
  replies_count: number;
  reposts_count: number;
  likes_count: number;
};

type Message = {
  id: number;
  uuid: string;
  display_name: string;
  handle: string;
  message: string;
  created_at: string;
};
