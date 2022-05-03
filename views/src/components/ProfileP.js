import { Button } from "react-bootstrap";
import { Send } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import axios from "axios";

const ProfileP = ({ handleEvent, setTitle, setDes, image, inputHandler }) => {
  const [visible, setVisible] = useState("hidden");
  const [addition, setAddition] = useState("Add");
  const [UserName, setUserName] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    axios.get("/login").then((data) => setUserName(data.data.data));
    setImg(image[Math.floor(Math.random() * 5)]);
  }, []);

  const visibilities = () => {
    const tog = () => {
      setAddition("Close");
      setVisible("initial");
    };
    const rtog = () => {
      setAddition("Add");
      setVisible("hidden");
    };
    addition === "Add" ? tog() : rtog();
  };
  return (
    <>
      <h4>Profile</h4>
      <img alt="" src={img} />
      <br />
      <h5>{UserName}</h5>
      <p>68k Follower</p>
      <p>Hello guys. Welcome to my channel</p>
      <div className="mb-2 home-profile-icons">
        <Button variant="danger" className="home-prof-icons">
          Follow
        </Button>
        <Button variant="danger" className="home-prof-icons">
          <Send />
        </Button>
        <Button
          variant="danger"
          className="home-prof-icons"
          onClick={visibilities}
        >
          {addition}
        </Button>
      </div>
      <form
        style={{ visibility: visible }}
        className="form"
        onSubmit={handleEvent}
      >
        <input
          type="text"
          placeholder="Title"
          className="add-btn"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="add-btn"
          onChange={(e) => setDes(e.target.value)}
        />
        <Button variant="danger" className="home-p" type="submit">
          Submit
        </Button>
      </form>
      <input
        type="search"
        placeholder="Search"
        className="searches"
        onChange={inputHandler}
      />
    </>
  );
};

export default ProfileP;
