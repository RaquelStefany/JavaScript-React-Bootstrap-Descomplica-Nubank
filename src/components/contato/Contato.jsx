import "./Contato.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contato() {
  return (
    <section id="contato">
      <Form>
        <h2>Contate Nos</h2>
        <p>Deixe-nos uma mensagem. Entraremos em contato o mais rápido.</p>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" id="email" placeholder="Seu email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="assunto">
          <Form.Label>Assunto</Form.Label>
          <Form.Control type="text" id="assunto" placeholder="Assunto" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            as="textarea"
            id="mensagem"
            placeholder="Deixe sua mensagem aqui"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar Mensagem &nbsp;
          <i className="uil uil-message"></i>
        </Button>
      </Form>
    </section>
  );
}

export default Contato;
