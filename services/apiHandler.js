// fetch blog data using SSG
export const getBlogs = async () => {
  const data = await fetch(process.env.SERVER_URL, {
    next: { revalidate: 60 },
  });

  return data.json();
};

export const getBlogsDetails = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });
  return data.json();
};



