// Importando los componentes y librerías necesarios
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'; // Importando componentes de react-bootstrap
import './App.css'; // Importando el archivo CSS
import { useState } from 'react'; // Importando el hook useState de React
import axios from "axios"; // Importando axios para realizar solicitudes HTTP
import Swal from "sweetalert2"; // Importando SweetAlert2 para mostrar alertas
import './app_questionario.css' // Importando otro archivo CSS

// Definiendo el componente principal
const App_questionario = () => {
  const [formData, setFormData] = useState({}); // Inicializando el estado para almacenar los datos del formulario

  // Definiendo los campos del formulario
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

  // Manejador para los eventos de cambio en los inputs
  const onChange = (e) => {
    setFormData({
      ...formData, // Manteniendo los datos existentes
      [e.target.name]: e.target.value // Actualizando el campo específico con el nuevo valor
    });
  };

  // Manejador para el envío del formulario
  const onSubmit = async () => {
    const missingFields = fields.filter(field => !formData[field]); // Verificando si hay campos faltantes

    if (missingFields.length > 0) { // Si hay campos faltantes
      Swal.fire(
        "Oops!, parece que faltan algunos campos", // Título de la alerta
        missingFields.join(', '), // Listando los campos faltantes
        "error" // Tipo de alerta
      );
      return; // Salir de la función
    }

    Swal.fire("Enviando formulario..."); // Mostrando alerta de carga
    Swal.showLoading(); // Mostrando el spinner de carga

    try {
      await axios.post("http://localhost:4000/save-adoption", formData); // Enviando los datos del formulario al servidor
      Swal.fire("Formulario enviado con éxito", "", "success").then(() => window.location.reload()); // Alerta de éxito y recargar la página
    } catch (error) {
      Swal.fire("Opsss! Ocurrió un error al enviar el formulario", error.message, "error"); // Alerta de error
    }
  };

  // Renderizando el formulario
  return (
    <Container className='formulario_adopcion'> {/* Contenedor para el formulario */}
      <Card> {/* Componente Card para contener el formulario */}
        <Card.Body> {/* Cuerpo del Card */}
          <Card.Title>Formulario de Adopción</Card.Title> {/* Título del formulario */}
          <Form> {/* Componente Form */}
            {fields.map((field, i) => ( // Mapeando los campos para crear grupos de formulario
              <Form.Group key={i}> {/* Grupo de formulario para cada campo */}
                <Form.Label>{field}</Form.Label> {/* Etiqueta para el campo */}
                <Form.Control
                  type={field.includes("Fecha") ? "date" : "text"} // Tipo de input basado en el nombre del campo
                  name={field} // Estableciendo el atributo name
                  onChange={onChange} // Estableciendo el manejador de cambio
                />
              </Form.Group>
            ))}
          </Form>
          <Row className='text-center mt-3'> {/* Fila para el botón de envío */}
            <Col> {/* Columna para centrar el botón */}
              <Button onClick={onSubmit}>Enviar</Button> {/* Botón de envío */}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App_questionario; // Exportando el componente como predeterminado