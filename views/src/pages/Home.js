import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navb from "../components/Navb";
import ProfileP from "../components/ProfileP";
import HomeP from "../components/HomeP";
import Friends from "../components/Friends";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import avatar5 from "../images/avatar5.jpg";
import data from "../components/data";

const Home = () => {
  const avatar = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [datas, setDatas] = useState([...data]);

  const rmv = (elem) => {
    setDatas(datas.filter((element) => element.id !== elem));
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleEvent = (event) => {
    event.preventDefault();
    setDatas([
      {
        id: uuidv4(),
        title: title,
        imgSrc: avatar[Math.floor(Math.random() * 5)],
        text: des,
      },
      ...datas,
    ]);
  };
  return (
    <Container fluid className="homepage">
      <Row>
        <Col lg={1}>
          <Navb />
        </Col>
        <div className="home-profile">
          <ProfileP
            image={avatar}
            setTitle={setTitle}
            setDes={setDes}
            handleEvent={handleEvent}
            inputHandler={inputHandler}
          />
        </div>
        <Col lg={7} className="home-card">
          <HomeP data={datas} input={inputText} rmv={rmv} />
        </Col>
        <Col lg={3} className="friends">
          <Friends image={avatar} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
