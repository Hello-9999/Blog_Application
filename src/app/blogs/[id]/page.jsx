import { getBlogs, getBlogsDetails } from "../../../../services/apiHandler";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

const Pages = async ({ params }) => {
  const { id } = params;
  const postdetails = await getBlogsDetails(id);

  return (
    <div className=" w-10/12 md:w-4/6 m-auto  mt-10">
      <div className="btn">
      
        <Link href="/blogs"> Back to Blog </Link>
      </div>
      <div className="title mt-14 mb-9">
        <h2
          style={{}}
          className="text-xl md:text-3xl lg:text-4xl font-semibold "
        >
          {postdetails.title}
        </h2>
      </div>

      <div className="content">
        <p className="text-xl font-thin">{postdetails.body}</p>
      </div>
    </div>
  );
};

export default Pages;

export async function generateStaticParams() {
  const Blogdata = await getBlogs();
  return Blogdata.map((value) => ({ id: value.id.toString() }));
}
