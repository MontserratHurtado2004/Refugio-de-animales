import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import './app_questionario.css'

const App_questionario = () => {
  const [formData, setFormData] = useState({});

  const fields = [
    "Nombre del Animal",
    "Especie",
    "Raza",
    "Edad",
    "Tamaño",
    "Estado",
    "Fecha de Rescate",
    "Descripción",
    "Nombre del Adoptante",
    "Teléfono",
    "Email",
    "Dirección",
    "Fecha de Solicitud"
  ];

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async () => {
    const missingFields = fields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      Swal.fire(
        "Oops!, parece que faltan algunos campos",
        missingFields.join(', '),
        "error"
      );
      return;
    }

    Swal.fire("Enviando formulario...");
    Swal.showLoading();

    try {
      await axios.post("http://localhost:4000/save-adoption", formData);
      Swal.fire("Formulario enviado con éxito", "", "success").then(() => window.location.reload());
    } catch (error) {
      Swal.fire("Opsss! Ocurrió un error al enviar el formulario", error.message, "error");
    }
  };

  return (
    <Container className='formulario_adopcion'>
      <Card>
        <Card.Body>
          <Card.Title>Formulario de Adopción</Card.Title>
          <Form>
            {fields.map((field, i) => (
              <Form.Group key={i}>
                <Form.Label>{field}</Form.Label>
                <Form.Control
                  type={field.includes("Fecha") ? "date" : "text"}
                  name={field}
                  onChange={onChange}
                />
              </Form.Group>
            ))}
          </Form>
          <Row className='text-center mt-3'>
            <Col>
              <Button onClick={onSubmit}>Enviar</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App_questionario;
