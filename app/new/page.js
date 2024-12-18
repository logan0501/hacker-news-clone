import { STORY_TYPES } from "../lib/constants";
import { fetchStories } from "../lib/actions";
import Pagination from "../components/Pagination/Pagination";
import Stories from "../components/Stories/Stories";

export default async function Home(props) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  const { stories, totalPages } = await fetchStories(
    STORY_TYPES.NEW,
    currentPage
  );
  return (
    <>
      <Stories stories={stories} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
