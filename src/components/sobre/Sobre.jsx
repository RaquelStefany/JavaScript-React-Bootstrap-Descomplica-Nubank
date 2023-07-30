import "./Sobre.css";
import Container from "react-bootstrap/Container";
import Image from "../../assets/img/logos/logotipo_1.png";

function Sobre() {
  return (
    <section id="sobre">
      <div>
        <Container>
          <div id="quemsomos">
            <div>
              <h2>Quem Somos</h2>
              <p>
                O GeekShop é um site inovador e intuitivo, projetado
                especialmente para os entusiastas da cultura geek, gamers, fãs
                de quadrinhos, filmes e séries.
                <br />
                Aqui, com apenas um clique, você encontrará o seu look geek
                perfeito para expressar sua paixão pela cultura nerd de forma
                única e estilosa!
              </p>
            </div>
            <div>
              <img src={Image} alt="Geek Shop" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Sobre;
