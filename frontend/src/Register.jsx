// Importando las librerías y componentes necesarios
import React, { useState } from 'react'; // Importando React y el hook useState
import Swal from "sweetalert2"; // Importando SweetAlert2 para mostrar alertas
import axios from 'axios'; // Importando axios para realizar solicitudes HTTP
import { useNavigate } from "react-router-dom"; // Importando useNavigate de react-router-dom

// Definiendo el componente SignUp
export const SignUp = () => {
    const [name, setName] = useState(""); // Estado para almacenar el nombre
    const [email, setEmail] = useState(""); // Estado para almacenar el email
    const [password, setPassword] = useState(""); // Estado para almacenar la contraseña
    const [rol, setRol] = useState("Client"); // Estado para almacenar el rol, por defecto "Client"
    const navigate = useNavigate(); // Hook para la navegación

    // Manejador para el registro de usuario
    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        setRol("Client"); // Establecer el rol a "Client"

        try {
            Swal.fire("Registrando usuario..."); // Mostrando alerta de carga
            Swal.showLoading(); // Mostrando el spinner de carga

            const response = await axios.post('http://localhost:4000/user/create', { name, email, password, rol }); // Enviando solicitud de registro

            Swal.fire(response.data.msg, "", "success"); // Mostrando alerta de éxito
            navigate("/app_questionario"); // Redirigiendo a la ruta app_questionario

        } catch (error) {  
            console.log(error.message); // Mostrando el error en la consola
            Swal.fire('Error', error.response?.data?.msg || 'Ocurrió un error al registrar el usuario.', 'error'); // Mostrando alerta de error
        }
    };

    // Manejador para redirigir al login
    const goToLogin = () => {
        navigate("../login"); // Redirigiendo a la ruta login
    };

    // Renderizando el formulario de registro
    return (
        <div>
            <style>{`
            body {
                font-family: 'Roboto', sans-serif;
                background-color: #fde8e8;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .login-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 200%;
                height: 600px;
                max-width: 600px;
                margin: 0 auto;
                padding: 30px;
                background-color: #ffffff;
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
                border-radius: 16px;
            }
            .login-box {
                width: 95%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            h2 {
                color: #34495e;
                margin-bottom: 1px;
                font-size: 32px;
                font-weight: 700;
                text-align: center;
            }
            .input-group {
                margin-bottom: 15px;
                text-align: left;
                width: 100%;
            }
            label {
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
                color: #2c3e50;
                font-size: 16px;
            }
            input {
                width: 100%;
                padding: 16px;
                margin-bottom: 12px;
                border: 1px solid #dcdfe6;
                border-radius: 8px;
                font-size: 18px;
                background-color: #f9f9f9;
                color: #34495e;
                transition: border 0.3s;
            }
            input:focus {
                border-color: #3498db;
                outline: none;
            }
            button {
                display: inline-block;
                width: 100%;
                padding: 14px;
                font-size: 18px;
                font-weight: bold;
                color: #ffffff;
                background-color: #3498db;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.3s ease, transform 0.2s;
            }
            button:hover {
                background-color: #2980b9;
                transform: scale(1.02);
            }
            .login-btn {
                margin-top: 10px;
            }
            button[type="button"] {
                background-color: #2ecc71;
            }
            button[type="button"]:hover {
                background-color: #27ae60;
            }
            @media (max-width: 768px) {
                .login-container {
                    padding: 20px;
                }
                h2 {
                    font-size: 26px;
                }
                button {
                    font-size: 16px;
                }
            }
            `}</style>
            <div className="login-container"> {/* Contenedor del formulario de registro */}
                <div className="login-box"> {/* Caja del formulario */}
                    <h2>Registro</h2> {/* Título del formulario */}
                    <form onSubmit={handleSignUp} style={{ width: "100%" }}> {/* Formulario de registro */}
                        <div className="input-group"> {/* Grupo de entrada para el nombre */}
                            <label htmlFor="name">Nombre y apellidos</label> {/* Etiqueta para el nombre */}
                            <input 
                                type="text" 
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                                placeholder="Ingresa tu nombre y apellidos"
                            />
                        </div>
                        <div className="input-group"> {/* Grupo de entrada para el email */}
                            <label htmlFor="email">Correo electrónico</label> {/* Etiqueta para el email */}
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                placeholder="Ingresa tu correo"
                            />
                        </div>
                        <div className="input-group"> {/* Grupo de entrada para la contraseña */}
                            <label htmlFor="password">Crear una Contraseña</label> {/* Etiqueta para la contraseña */}
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                placeholder="Crea una contraseña"
                            />
                        </div>
                        <button type="submit" className="login-btn">Registrarse</button> {/* Botón de registro */}
                        <div className="input-group">
                            <h2>¿Ya tienes cuenta?</h2> {/* Pregunta para redirigir al login */}
                            <button type="button" className="login-btn" onClick={goToLogin}>Inicia sesión</button> {/* Botón para redirigir al login */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp; // Exportando el componente SignUp como predeterminado