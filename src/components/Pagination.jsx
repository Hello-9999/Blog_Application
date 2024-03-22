"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";

import React, { useState } from "react";

const Pagination = ({ BlogsDetails }) => {
  let dataPerPage = 4;
  const [currentpage, setcurrentpage] = useState(1);
  const lastIndex = currentpage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;

  const records = BlogsDetails.slice(firstIndex, lastIndex);
  console.log(records, "recors");
  const pg = Math.ceil(BlogsDetails.length / Number(dataPerPage));
  const pageNumber = [...Array(pg + 1).keys()].slice(1);

  console.log(pageNumber, "page");

  const handlerNextPage = (e) => {
    e.preventDefault();
    if (currentpage !== firstIndex) {
      setcurrentpage(currentpage + 1);
    }
  };

  console.log(currentpage, "current page");
  const handlerPrevPage = (e) => {
    e.preventDefault();
    if (currentpage !== firstIndex) {
      setcurrentpage(currentpage - 1);
    }
  };
  return (
    <div className=" ">
      <div
        className=" gap-9 mt-6 pb-6 w-10/12 m-auto md:w-5/6 justify-evenly "
        id="Blog_Card"
      >
        {records &&
          records.map((val, index) => {
            return (
              <Card
                className="  ,bg-neutral-100	hover:bg-slate-230 "
                key={val.index}
                style={{ border: "1px solid black" }}
              >
                {" "}
                <Link href={`/blogs/${val.id}`}>
                  <CardHeader className="">
                    <p className=" text-justify font-semibold p-3">
                      {val.title}
                    </p>{" "}
                  </CardHeader>
                </Link>
                <Divider className="bg-red-300" />
                <CardBody style={{ overflow: "hidden" }}>
                  <div className="img m-auto">
                    <Image
                      src={`https://picsum.photos/seed/${val.id}/550/300`}
                    />
                  </div>
                  <p className="mt-5 mb-5">
                    {val.body.substring(0, 100) + " ..."}
                    <Link href={`/blogs/${val.id}`} color="primary">
                      {" "}
                      Read More
                    </Link>
                  </p>
                </CardBody>
              </Card>
            );
          })}
      </div>

      <nav className="flex gap-2 m-auto justify-evenly  pt-6 pb-6 ">
        <div className="pre">
          <Button
            onClick={handlerPrevPage}
            className={currentpage == 1 ? "hidden" : ""}
          >
            {" "}
            Previous
          </Button>
        </div>

        <div className="pre">
          <Button
            onClick={handlerNextPage}
            className={pageNumber.length <= currentpage ? "hidden" : ""}
          >
            {" "}
            Next
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
