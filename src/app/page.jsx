const Home = () => {
  return (
    <div className="bg-gray-400 h-screen" id="homepage">
      <div className="home_body w-5/6 md:w-3/5 m-auto">
        <div className="title">
          <header className=" font-bold text-xl md:text-2xl lg:text-3xl pt-14 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </header>
        </div>

        <div className="content mt-6">
          <p className=" font-thin text-xl  md:text-2xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            inventore earum, necessitatibus expedita reiciendis, nulla saepe
            ipsam veniam, alias tenetur officia. Repudiandae mollitia saepe odit
            excepturi, earum reprehenderit. Totam, autem?
          </p>
        </div>
        <div className="m-auto w-2/6 mt-6">
          <button
            href="/blog"
            className="button bg-slate-200 rounded-xl text-blue-700  text-center "
            style={{ padding: "10px 25px" }}
          >
            {" "}
            <a href="/blogs">Read Blog</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
