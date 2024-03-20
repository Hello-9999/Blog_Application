import React from "react";
import Link from "next/link";
import { getBlogs } from "../../../services/apiHandler";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";

const Blogs = async () => {
  const blogsdata = await getBlogs();

  return (
    <div>
      <div className="title text-center mb-5 mt-5 font-bold  text-xl md:text-2xl">
        {" "}
        Our Blogs
      </div>
      <div className=" flex flex-wrap gap-5   w-10/12 m-auto md:w-5/6 justify-evenly">
        {blogsdata &&
          blogsdata.splice(0, 8).map((val) => {

            return (
              <Card className=" md:w-5/12">
                {" "}
                <CardHeader className="">
                  <p className=" text-center font-semibold	 ">{val.title}</p>
                </CardHeader>
                <Divider />
                <CardBody>
                  {" "}
                  <p>{val.body}</p>
                </CardBody>
              </Card>
            );
          }, <Pagination />)}
      </div>
    </div>
  );
};

export default Blogs;
