import { ThumbsDownIcon, ThumbsUpIcon, Trash2Icon } from "lucide-react";
import { useContext } from "react";
import { SocialMediaContext } from "../store/SocialMediaStore";
import Empty from "./Empty";

const Feed = () => {
  const { post, HandleDelete } = useContext(SocialMediaContext);

  console.log(post);

  console.log(post);

  if (post.length === 0) {
    return <Empty />;
  } else {
    return post.map((item, index) => (
      <div key={index}>
        <div className="mt-10 posts  w-1/2 p-5 rounded mx-auto bg-gray-100 shadow shadow-black flex flex-col gap-5 relative">
          <Trash2Icon
            fill="red"
            className="cursor-pointer absolute top-4 right-3"
            onClick={() => {
              HandleDelete(index);
            }}
          />
          <p className="text-sm font-bold">@{item.userId}</p>
          <h1 className="text-4xl font-extrabold">{item.title}</h1>
          <p className="text  font-semibold">{item.body}</p>
          <div className="hastags flex gap-5">
            {item.tags?.map((tag, index) => (
              <p key={index} className="text-violet-800 font-bold">
                #{tag}
              </p>
            ))}
          </div>
          <div className="flex gap-5">
            <div className="flex gap-3">
              <ThumbsUpIcon color="blue" fill="blue" />
              <p>{item.reactions?.likes}</p>
            </div>
            <div className="flex gap-3">
              <ThumbsDownIcon color="red" fill="red" />
              <p>{item.reactions?.dislikes}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }
};

export default Feed;
