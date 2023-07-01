const mapping: Record<string, string> = {
  comments: 'comment',
  organizations: 'organization',
  posts: 'post',
  subreddits: 'subreddit',
  upvotes: 'upvote',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
