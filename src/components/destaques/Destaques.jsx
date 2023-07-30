import "./Destaques.css";
import Image1 from "../../assets/img/destaques/1.png";
import Image2 from "../../assets/img/destaques/2.png";
import Image3 from "../../assets/img/destaques/3.png";
import Image4 from "../../assets/img/destaques/4.png";
import DestaqueItem from "./Item";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Destaques() {
  return (
    <section id="destaques">
      <div>
        <h2>
          <i className="lni lni-stats-up"></i>
          Destaques da Semana
          <span>
            <Badge bg="info">9+</Badge>
          </span>
        </h2>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <DestaqueItem
              Image={Image1}
              Title="Decoração Sonserina"
              Collection="Harry Potter"
              Price="15,00"
            />
          </Col>
          <Col>
            <DestaqueItem
              Image={Image2}
              Title="Anel Grifinória"
              Collection="Harry Potter"
              Price="15,00"
            />
          </Col>
          <Col>
            <DestaqueItem
              Image={Image3}
              Title="Copo com Tampa"
              Collection="Harry Potter"
              Price="15,00"
            />
          </Col>
          <Col>
            <DestaqueItem
              Image={Image4}
              Title="Bordado Corvinal"
              Collection="Harry Potter"
              Price="15,00"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Destaques;
