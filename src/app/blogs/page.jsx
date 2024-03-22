import { getBlogs } from "../../../services/apiHandler";
import Pagination from "@/components/Pagination";

const Blogs = async () => {
  const blogsdata = await getBlogs();

  return (
    <div className=" bg-slate-400">
      <div className="title text-center mb-5 pt-7 font-bold  text-2xl md:text-3xl lg:text-4xl">
        {" "}
        Our Blogs
      </div>
      <Pagination BlogsDetails={blogsdata} />;
    </div>
  );
};

export default Blogs;
