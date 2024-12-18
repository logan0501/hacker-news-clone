const HACKER_NEWS_API = "https://hacker-news.firebaseio.com/v0/";

export async function fetchStories(type, currentPage = 0, pageSize = 10) {
  if (currentPage < 0) return { stories: [], totalPages: 0 };
  try {
    const response = await fetch(`${HACKER_NEWS_API}${type}stories.json`);

    const storyIds = await response.json();
    const totalPages = Math.ceil(Number(storyIds.length) / pageSize);
    const stories = await Promise.all(
      storyIds
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map(async (id) => {
          const res = await fetch(`${HACKER_NEWS_API}item/${id}.json`);
          return res.json();
        })
    );
    return { stories, totalPages };
  } catch (e) {
    return { stories: [], totalPages: 0 };
  }
}
