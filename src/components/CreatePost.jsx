import { useContext, useRef } from "react";
import { SocialMediaContext } from "../store/SocialMediaStore";

const CreatePost = () => {
  const { HandleAdd } = useContext(SocialMediaContext);

  const useridRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const hastagRef = useRef(null);
  const likesRef = useRef(null);
  const dislikesRef = useRef(null);

  const validateData = () => {
    if (
      useridRef.current.value.trim() == "" ||
      titleRef.current.value.trim() == "" ||
      contentRef.current.value.trim() == "" ||
      hastagRef.current.value.trim() == "" ||
      likesRef.current.value.trim() == "" ||
      dislikesRef.current.value.trim() == ""
    ) {
      return;
    }

    HandleAdd(
      useridRef.current.value,
      titleRef.current.value,
      contentRef.current.value,
      hastagRef.current.value,
      likesRef.current.value,
      dislikesRef.current.value
    );

    useridRef.current.value = "";
    titleRef.current.value = "";
    contentRef.current.value = "";
    hastagRef.current.value = "";
    likesRef.current.value = "";
    dislikesRef.current.value = "";
  };

  return (
    <div className="mt-10">
      <div className="bg-black mx-auto w-1/2 rounded-lg text-white border p-5  flex flex-col gap-7">
        <div className=" flex justify-between w-full">
          {/* div for id */}
          <div className="id flex flex-col gap-2 flex-1">
            <p className="px-2">Enter user id</p>
            <input
              type="text"
              ref={useridRef}
              name="id"
              id="id_"
              autoFocus
              placeholder="enter user id"
              className="border-b-2 border-stone-700 outline-none font-bold w-[70%] tracking-widest py-1 px-2"
            />
          </div>

          {/* div for title */}
          <div className="id flex flex-col gap-2 flex-1">
            <p className="px-2">Enter post title</p>
            <input
              type="text"
              ref={titleRef}
              name="id"
              id="id_"
              autoFocus
              placeholder="enter user id"
              className="border-b-2 border-stone-700 outline-none font-bold w-[70%] tracking-widest py-1 px-2"
            />
          </div>
        </div>

        {/* div for content */}
        <div className="id flex flex-col gap-2 ">
          <p className="px-2">Enter post content</p>
          <textarea
            ref={contentRef}
            rows={5}
            cols={10}
            className="bg-gray-800 border-none outline-none py-1 px-3 rounded text-md font-bold"
          ></textarea>
        </div>

        {/* div for content */}
        <div className="id flex flex-col gap-2 ">
          <p className="px-2">Enter hashtag</p>
          <textarea
            ref={hastagRef}
            rows={5}
            cols={10}
            className="bg-gray-800 text-blue-400 border-none max-h-20  min-h-10 outline-none py-1 px-3 rounded text-md font-bold"
            placeholder="separate by space"
          ></textarea>
        </div>

        <div className=" flex justify-between w-full">
          {/* div for likes */}
          <div className="id flex flex-col gap-2 flex-1">
            <p className="px-2">Enter no of likes</p>
            <input
              type="text"
              ref={likesRef}
              name="likes"
              id="id_likes"
              autoFocus
              placeholder="enter no of likes"
              className="border-b-2 border-stone-700 outline-none font-bold w-[70%] tracking-widest py-1 px-2"
            />
          </div>

          {/* div for dislikes */}
          <div className="id flex flex-col gap-2 flex-1">
            <p className="px-2">Enter no of dislikes</p>
            <input
              type="text"
              ref={dislikesRef}
              name="dislikes"
              id="id_dislikes"
              autoFocus
              placeholder="enter no of dislikes"
              className="border-b-2 border-stone-700 outline-none font-bold w-[70%] tracking-widest py-1 px-2"
            />
          </div>
        </div>
        <div className="">
          <button
            onClick={validateData}
            className="bg-orange-400 w-full text-black rounded-lg py-2 font-extrabold cursor-pointer"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
