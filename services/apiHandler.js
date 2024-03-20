export const getBlogs = async () => {
  const data = await fetch(process.env.SERVER_URL, {
    cache: "force-cache",
  });
  return data.json();
};

