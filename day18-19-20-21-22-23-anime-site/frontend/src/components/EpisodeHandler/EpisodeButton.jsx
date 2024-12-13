import { Link } from "react-router";
/* eslint-disable react/prop-types */

export default function EpisodeButton({ data }) {
  const redirectURL = data?.link_url;

  return (
    <Link to={"/" + redirectURL}>
      <div className="text-white px-2 py-1 bg-purple-800 hover:bg-purple-900 text-center shadow-md hover:shadow-sm rounded-md">
        {data?.episode}
      </div>
    </Link>
  );
}
