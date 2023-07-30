import Card from "react-bootstrap/Card";

const DestaqueItem = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.Image} />
      <Card.ImgOverlay>
        <a href="">
          <Card.Text>Comprar</Card.Text>
        </a>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{props.Title}<br />{props.Collection}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">R$ {props.Price}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default DestaqueItem;
