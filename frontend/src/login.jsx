import React, { useState } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import { useNavigate } from "react-router-dom";  

export const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");  
    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
        Swal.fire("Iniciando sesión...");
        Swal.showLoading();
        const response = await axios.post('http://localhost:4000/user/sign-in', { email, password });

        Swal.fire(response.data.msg, "", "success");
      navigate("/Home"); // Redirige a la ruta Home

    } catch (error) {  
        console.log(error.message);
        Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error');
    }
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
        <div className="login-container">
        <div className="login-box">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleLogin} style={{ width: "100%" }}>
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
                <label htmlFor="password">Contraseña</label>
                <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Ingresa tu contraseña"
                />
            </div>

            <button type="submit" className="login-btn">Iniciar sesión</button>
            </form>
        </div>
        </div>
    </div>
    );
};

export default Login;
