import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormExample() {
  return (
    <Form>
      <br/><br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormExample;