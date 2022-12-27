import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul>
      {pageNumber.map((number) => (
        <div key = {number} className="btn-group">
          <button onClick={()=> paginate(number)} className="btn btn-sm mx-1 btn-outline btn-primary">{number}</button>
        </div>
      ))}
    </ul>
  );
};

export default Pagination;
