"use client";
import Blogs from "@/app/blogs/page";
import React, { useState } from "react";

const Pagination = ({ nextpage, dataPerPage, totaldata, Blogdata }) => {
  let page = 1;
  //   console.log(nextpage, "nextpage");
  //   console.log(dataPerPage, "data perpage");
  //   console.log(totaldata.length / 10, "totaldata");
  const [currentpage, setcurrentpage] = useState(1);
  const lastIndex = currentpage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;

  const records = totaldata.slice(firstIndex, lastIndex);
  console.log(records, "recors");
  const pg = Math.ceil(totaldata.length / Number(dataPerPage));
  const pageNumber = [...Array(pg + 1).keys()].slice(1);

  const handlerNextPage = (e) => {
    e.preventDefault();
    if (currentpage !== firstIndex) {
      setcurrentpage(currentpage + 1);
    }
  };

  const handlerPrevPage = (e) => {
    e.preventdefault();
    if (currentpage !== firstIndex) {
      setcurrentpage(currentpage - 1);
    }
  };
  Blogdata.push(records);
  return (
    <div className=" w-2/6 m-auto">
      <nav className="flex gap-2 m-auto justify-evenly">
        <div className="pre">
          <button onClick={handlerPrevPage}> previous</button>
        </div>

        <ul className="flex gap-1 md:gap-3  justify-between">
          {pageNumber.map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>

        <div className="pre">
          <button onClick={handlerNextPage}> next</button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
