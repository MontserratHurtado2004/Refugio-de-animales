// Importando las librerías y componentes necesarios
import React, { useState } from 'react'; // Importando React y el hook useState
import Swal from "sweetalert2"; // Importando SweetAlert2 para mostrar alertas
import axios from 'axios'; // Importando axios para realizar solicitudes HTTP
import { useNavigate } from "react-router-dom"; // Importando useNavigate de react-router-dom

// Definiendo el componente Login
export const Login = () => {
    const [email, setEmail] = useState(""); // Estado para almacenar el email
    const [password, setPassword] = useState(""); // Estado para almacenar la contraseña
    const navigate = useNavigate(); // Hook para la navegación

    // Manejador para el inicio de sesión
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        try {
            Swal.fire("Iniciando sesión..."); // Mostrando alerta de carga
            Swal.showLoading(); // Mostrando el spinner de carga
            const response = await axios.post('http://localhost:4000/user/sign-in', { email, password }); // Enviando solicitud de inicio de sesión

            Swal.fire(response.data.msg, "", "success"); // Mostrando alerta de éxito
            navigate("/Home"); // Redirigiendo a la ruta Home

        } catch (error) {
            console.log(error.message); // Mostrando el error en la consola
            Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error'); // Mostrando alerta de error
        }
    };

    // Renderizando el formulario de inicio de sesión
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
                height: 100vh;
            }
            .login-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 300%;
                height: 400px;
                max-width: 600px;
                margin: 0 auto;
                padding: 30px;
                background-color: #ffffff;
                box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
                border-radius: 16px;
            }
            .login-box {
                width: 90%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            h2 {
                color: #34495e;
                margin-bottom: 20px;
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
            <div className="login-container"> {/* Contenedor del formulario de inicio de sesión */}
                <div className="login-box"> {/* Caja del formulario */}
                    <h2>Iniciar sesión</h2> {/* Título del formulario */}
                    <form onSubmit={handleLogin} style={{ width: "100%" }}> {/* Formulario de inicio de sesión */}
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
                            <label htmlFor="password">Contraseña</label> {/* Etiqueta para la contraseña */}
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>

                        <button type="submit" className="login-btn">Iniciar sesión</button> {/* Botón de inicio de sesión */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; // Exportando el componente Login como predeterminado