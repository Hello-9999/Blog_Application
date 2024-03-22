import { getBlogs, getBlogsDetails } from "../../../../services/apiHandler";
import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

const Pages = async ({ params }) => {
  const { id } = params;
  const postdetails = await getBlogsDetails(id);

  return (
    <div className="bg-gray-400">
      <div className=" w-10/12 md:w-4/6 m-auto ">
        <div className="btn pt-10">
          <nav className="	">
            {" "}
            <Link
              href="/blogs"
              className="inline-flex items-center  px-2 py-1 text-2xs font-medium text-gray-700 hover:text-blue-600"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2d2b2b"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="arcs"
              >
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
              Back to Blog
            </Link>
          </nav>
    
        </div>
        <div className="title mt-10 mb-9">
          <h2
            style={{}}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold "
          >
            {postdetails.title}
          </h2>
        </div>

        <div className="img">
          <Image src={`https://picsum.photos/seed/${postdetails.id}/700/350`} />{" "}
        </div>

        <div className="content">
          <p className="text-xl md:text-2xl lg:text-2xl font-light pt-7 pb-11">
            {postdetails.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pages;

export async function generateStaticParams() {
  const Blogdata = await getBlogs();
  return Blogdata.map((value) => ({ id: value.id.toString() }));
}
