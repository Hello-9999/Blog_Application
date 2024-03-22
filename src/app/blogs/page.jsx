import { Link } from "@nextui-org/react";
import { getBlogs } from "../../../services/apiHandler";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
} from "@nextui-org/react";

const Blogs = async () => {
  const blogsdata = await getBlogs();

  return (
    <div className=" bg-slate-400">
      <div className="title text-center mb-5 pt-7 font-bold  text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Our Blogs
      </div>
      <div
        className=" gap-9 mt-6 pb-6 w-10/12 m-auto md:w-5/6 justify-evenly "
        id="Blog_Card"
      >
        {blogsdata &&
          blogsdata.splice(0, 5).map((val, index) => {
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
                    <Image src={`https://picsum.photos/id/${val.id}/550/300`} />
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
    </div>
  );
};

export default Blogs;
