import { Card, Row, Col } from "react-bootstrap";
import { XSquareFill } from "react-bootstrap-icons";

const HomeP = ({ data, input, rmv }) => {
  const filteredData = data.filter((element) => {
    if (input === "") {
      return element;
    } else {
      return element.text.toLowerCase().includes(input);
    }
  });
  return (
    <>
      <h4>Home</h4>
      <Row xs={1} md={3} className="g-4">
        {filteredData.map((idx) => (
          <Col key={idx.id}>
            <XSquareFill className="cross" onClick={() => rmv(idx.id)} />
            <Card border="danger" bg="dark" text="white">
              <Card.Img
                variant="top"
                src={idx.imgSrc}
                style={{ width: "auto", height: "156px" }}
              />
              <Card.Body>
                <Card.Title>{idx.title}</Card.Title>
                <Card.Text>{idx.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeP;
