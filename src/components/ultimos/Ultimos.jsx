import "./Ultimos.css";
import Image1 from "../../assets/img/ultimos/1.png";
import Image2 from "../../assets/img/ultimos/2.png";
import Image3 from "../../assets/img/ultimos/3.png";
import Image4 from "../../assets/img/ultimos/4.png";
import UltimoItem from "./Item";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Ultimos() {
  return (
    <section id="ultimos">
      <div>
        <h2>
          <i className="lni lni-timer"></i>
          Últimos Adicionados
          <span>
            <Badge bg="warning">9+</Badge>
          </span>
        </h2>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <UltimoItem
              Image={Image1}
              Title="Cobertor Sonserina"
              Collection="Harry Potter"
              Price="80,00"
            />
          </Col>
          <Col>
            <UltimoItem
              Image={Image2}
              Title="Cobertor Grifinória"
              Collection="Harry Potter"
              Price="80,00"
            />
          </Col>
          <Col>
            <UltimoItem
              Image={Image3}
              Title="Cobertor Lufa-Lufa"
              Collection="Harry Potter"
              Price="80,00"
            />
          </Col>
          <Col>
            <UltimoItem
              Image={Image4}
              Title="Cobertor Corvinal"
              Collection="Harry Potter"
              Price="80,00"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Ultimos;
