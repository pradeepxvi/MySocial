import { Cookie } from "lucide-react";
import { createContext, useReducer } from "react";
import { data } from "react-router-dom";

export const SocialMediaContext = createContext([]);

const SocialMediaReducer = (currentItems, action) => {
  if (action.type === "ADD") {
    return [...action.payload, ...currentItems];
  } else if (action.type === "DEL") {
    return currentItems.filter((_, index) => index != action.payload.index);
  } else if (action.type === "DEL_ALL") {
    return [];
  }
};

const SocialMediaStore = ({ children }) => {
  const DEFAULT_POST_LIST = {
    userId: "12345",
    title: "Hello world",
    body: "This is hello world contennt",
    tags: ["hello", "world", "my", "name", "is", "pradeep"],
    reactions: { likes: 100, dislikes: 10 },
  };

  const [post, dispatchPost] = useReducer(SocialMediaReducer, []);

  async function fetch_data() {
    try {
      const response = await fetch("https://dummyjson.com/posts");

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }

      const data = await response.json();

      if (Array.isArray(data.posts)) {
        dispatchPost({
          type: "ADD",
          payload: data.posts,
        });
      } else {
        console.error("Expected 'posts' to be an array but got:", data.posts);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const HandleAdd = (userId, title, body, tags, likes, dislikes) => {
    dispatchPost({
      type: "ADD",
      payload: [
        {
          userId,
          title,
          body,
          tags: tags.split(" "),
          reactions: { likes, dislikes },
        },
      ],
    });
  };
  const HandleDelete = (index) => {
    dispatchPost({
      type: "DEL",
      payload: { index },
    });
  };
  const HandleDeleteAll = () => {
    dispatchPost({ type: "DEL_ALL" });
  };

  return (
    <>
      <SocialMediaContext.Provider
        value={{ HandleAdd, HandleDelete, HandleDeleteAll, post, fetch_data }}
      >
        {children}
      </SocialMediaContext.Provider>
    </>
  );
};
export default SocialMediaStore;
