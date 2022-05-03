import { Button } from "react-bootstrap";
import { useState } from "react";

const Friends = ({ image }) => {
  const [friend, setFriend] = useState([
    { imgSrc: image[0], name: "Dattebayo" },
    { imgSrc: image[1], name: "Rohan" },
    { imgSrc: image[2], name: "Kobayashi" },
    { imgSrc: image[3], name: "Naruto" },
    { imgSrc: image[4], name: "Saitama" },
  ]);
  const [friendSearch, setFriendSearch] = useState("");

  const addFriend = () => {
    setFriend([
      ...friend,
      { imgSrc: image[Math.floor(Math.random() * 5)], name: friendSearch },
    ]);
  };

  const filteredData = friend.filter((element) => {
    if (friendSearch === "") {
      return element;
    } else {
      return element.name.toLowerCase().includes(friendSearch);
    }
  });

  return (
    <>
      <h4>Friends</h4>
      <div>
        {filteredData.map((elem) => {
          return (
            <ul key={elem.name}>
              <img alt="" src={elem.imgSrc} className="friendsimg" />
              <p>{elem.name}</p>
            </ul>
          );
        })}
      </div>
      <Button
        variant="danger"
        type="submit"
        className="login-btn-friend"
        onClick={addFriend}
      >
        Add Friend
      </Button>
      <br />
      <input
        type="search"
        placeholder="Search / Add Friends"
        className="friendsSearch"
        onChange={(e) => setFriendSearch(e.target.value)}
      />
    </>
  );
};

export default Friends;
