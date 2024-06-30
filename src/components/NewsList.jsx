/* eslint-disable react/prop-types */
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=16afe25de68641d588e8ed2ecaf19ce2`
    );
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return (
      <div className="box-border pb-12 px-4 w-full my-0 mx-auto mt-8 md:w-[768px] md:px-0">
        대기 중...
      </div>
    );
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return (
      <div className="box-border pb-12 px-4 w-full my-0 mx-auto mt-8 md:w-[768px] md:px-0">
        에러 발생!
      </div>
    );
  }

  const { articles } = response.data;

  return (
    <div className="box-border pb-12 px-4 w-full my-0 mx-auto mt-8 md:w-[768px] md:px-0">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
