import React, { useState } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [rol, setRol] = useState("Client");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
    e.preventDefault();
    setRol("Client");

    try {
        Swal.fire("Registrando usuario...");
        Swal.showLoading();

        const response = await axios.post('http://localhost:4000/user/create', { name, email, password, rol });

        Swal.fire(response.data.msg, "", "success");
        navigate("/Home"); 

    } catch (error) {  
        console.log(error.message);
        Swal.fire('Error', error.response?.data?.msg || 'Ocurrió un error al registrar el usuario.', 'error');
    }
    };

    const goToLogin = () => {
    navigate("../login");
    };

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
        <div className="login-container">
        <div className="login-box">
            <h2>Registro</h2>
            <form onSubmit={handleSignUp} style={{ width: "100%" }}>
            <div className="input-group">
                <label htmlFor="name">Nombre y apellidos</label>
                <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                placeholder="Ingresa tu nombre y apellidos"
                />
            </div>
            <div className="input-group">
                <label htmlFor="email">Correo electrónico</label>
                <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="Ingresa tu correo"
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Crear una Contraseña</label>
                <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Crea una contraseña"
                />
            </div>
            <button type="submit" className="login-btn">Registrarse</button>
            <div className="input-group">
            <h2>¿Ya tienes cuenta?</h2>
            <button type="button" className="login-btn" onClick={goToLogin}>Inicia sesión</button>
            </div>
            </form>
           
            
        </div>
        </div>
    </div>
    );
};

export default SignUp;  