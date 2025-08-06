import SocialMediaStore from "./store/SocialMediaStore";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Feed from "./components/Feed.jsx";

function App() {
  return (
    <>
      <SocialMediaStore>
        <NavBar />
        <Outlet />
      </SocialMediaStore>
    </>
  );
}

export default App;
