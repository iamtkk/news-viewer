/* eslint-disable react/prop-types */
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div className="flex mt-12 first:mt-0">
      {urlToImage && (
        <div className="mr-4 flex-shrink-0">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              className="block w-[160px] h-[100px] object-cover"
              src={urlToImage}
              alt="thumbnail"
            />
          </a>
        </div>
      )}
      <div>
        <h2 className="m-0 text-xl underline font-bold">
          <a
            className="text-black"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
        <p className="m-0 leading-normal mt-2 whitespace-norma">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
