import "./Footer.css";
import Logo from "../../assets/img/logos/logotipo_2.png";

function Footer() {
  return (
    <footer className="bg-light">
      <div>
        <div>
          <img src={Logo} alt="Logo" />
          <h2>GeekShop</h2>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="#destaques">Destaques</a>
            </li>
            <li>
              <a href="#ultimos">Últimos Adicionados</a>
            </li>
            <li>
              <a href="#sobre">Sobre Nos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
      <span>
        &copy; Desenvolvido por
        <a href="https://github.com/RaquelStefany">
          Raquel Stefany
        </a>
      </span>
    </footer>
  );
}

export default Footer;
