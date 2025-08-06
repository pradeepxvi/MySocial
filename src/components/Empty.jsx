import { useContext, useEffect, useState } from "react";
import { SocialMediaContext } from "../store/SocialMediaStore";
import Loader from "./Loader";

const Empty = () => {
  const { fetch_data } = useContext(SocialMediaContext);

  const [valueOnEmptyPost, setValueOnEmptyPost] = useState("No Posts");
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1 className="text-5xl bg-orange-500  w-1/3 text-center py-10 font-extrabold mt-10 mx-auto rounded-lg shadow-lg shadow-black flex justify-center items-center gap-3">
        {valueOnEmptyPost}
        {showLoader && <Loader />}
      </h1>

      <button
        className="bg-gradient-to-r from-violet-900 to-gray-500 text-white  px-10 py-3 text-lg font-extrabold rounded-full cursor-pointer "
        onClick={() => {
          setValueOnEmptyPost("getting post...");
          setShowLoader(true);
          fetch_data();
        }}
      >
        Get Post
      </button>
    </div>
  );
};

export default Empty;
