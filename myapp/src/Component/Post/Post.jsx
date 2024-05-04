import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/slices/post.slice";

const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((res) => res.postSlice);
  console.log(post);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      {post.loading && (
        <div className="flex items-center justify-center bg-red-100 min-h-screen">
          <h1 className="text-2xl shadow-sm font-semibold bg-white px-5 p-3 rounded-lg">
            Loading...
          </h1>
        </div>
      )}

      {post.loading === false && post.data && (
        <div className="flex flex-col gap-y-4 p-8 md:px-0 md:py-16 items-center bg-red-100 min-h-screen animate__animated animate__fadeIn">
          {post.data.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-lg shadow-lg md:w-3/4"
            >
              <h1 className="font-semibold text-2xl">{item.title}</h1>
              <p className="text-slate-500">{item.body}</p>
            </div>
          ))}
        </div>
      )}

      {post.loading === false && post.error && (
        <div className="flex items-center justify-center bg-red-100 min-h-screen">
          <h1 className="text-2xl shadow-sm bg-red-500 text-white font-semibold px-5 p-3 rounded-lg">
            Something Went wrong!
          </h1>
        </div>
      )}
    </>
  );
};

export default Post;
