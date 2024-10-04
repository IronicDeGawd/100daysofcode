// import React from "react";
import PropTypes from "prop-types";

function Cards({ fullName = "NaN", post = "NaN" }) {
  return (
    <>
      <div className="max-w-3xl mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/mine.jpg" alt="ChitChat Logo" />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">{fullName}</h4>
          <p className="text-base text-gray-600 leading-normal">
            Post : {post}
          </p>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = {
  post: PropTypes.string,
  fullName: PropTypes.string,
};

export default Cards;
