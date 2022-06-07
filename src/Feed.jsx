import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import ImportOption from "./ImportOption";
import Post from "./Post";
import { useEffect, useState } from "react";
import { db } from "./firebaseC";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import userSlice, { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed(props) {
  const [input, setInput] = useState(" ");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
      });
  }, []);
  const senPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input onChange={(e) => setInput(e.target.value)} type="text" />
            <button type="submit" onClick={senPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <ImportOption title={"Photo"} Icon={ImageIcon} color="#7085F9" />
          <ImportOption
            title={"Video"}
            Icon={SubscriptionsIcon}
            color="#E7a33e"
          />
          <ImportOption title={"Event"} Icon={EventNoteIcon} color="#c0cbcd" />
          <ImportOption
            title={"Write Article"}
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
