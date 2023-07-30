import "./Carrossel.css";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/img/carousel/1.png";
import Image2 from "../../assets/img/carousel/2.png";
import Image3 from "../../assets/img/carousel/3.png";
import Image4 from "../../assets/img/carousel/4.png";

function Carrossel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={Image1} className="carrosselImg" alt="Foto Carrossel" />
          <Carousel.Caption>
            <h3>GeekShop</h3>
            <p>Encontre o seu Look Geek com apenas um clique!</p>
            <a href="">Veja as Novidades</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image2} className="carrosselImg" alt="Foto Carrossel" />
          <Carousel.Caption>
            <h3>GeekShop</h3>
            <p>Encontre o seu Look Geek com apenas um clique!</p>
            <a href="">Veja as Novidades</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image3} className="carrosselImg" alt="Foto Carrossel" />
          <Carousel.Caption>
            <h3>GeekShop</h3>
            <p>Encontre o seu Look Geek com apenas um clique!</p>
            <a href="">Veja as Novidades</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Image4} className="carrosselImg" alt="Foto Carrossel" />
          <Carousel.Caption>
            <h3>GeekShop</h3>
            <p>Encontre o seu Look Geek com apenas um clique!</p>
            <a href="">Veja as Novidades</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carrossel;
