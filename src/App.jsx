import "./App.css";
import { Profile } from "./components/Profile/Profile";
import userData from "../src/userData.json";
import friends from "../src/friends.json";
import { FriendList } from "./components/FriendList/FriendList";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
