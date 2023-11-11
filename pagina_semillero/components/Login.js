import React, { useState } from "react";
import "../estilos/index.css" ;
import LogoImage from '../Images/logo.png';
import Modal from '../hooks/Modal';
const estiloLoginSection = {
  paddingRight: '500px',
}
export const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <div>
        <header className="header">
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          ></link>
          <nav className="navbar">
            <a href="http://localhost:3000">Inicio</a>
            <a href="https://www.instagram.com/ing.ist.ucp/">Contactanos</a>
            <a href="#" onClick={toggleModal}>
              Información
            </a>
            <div className="logo-container">
              <h2 style={{ color: "#fff" }} alt="Banner">
                <i class='bx bxl-xing'><span>Semillero_Coders_UCP</span></i>
              </h2>
              <a href="https://ucp.edu.co" target="_blank">
                <img src={LogoImage} alt="Logo" className="logoP" />
              </a>
            </div>
          </nav>
        </header>
        <div className="background"></div>
        <div className="container">
          <div className="item">
            <div className="text-item">
              <div className="social-icon">
                <p>Semillero Coders_UCP</p>
                <a href="https://www.instagram.com/ing.ist.ucp">
                  <i className='bx bxl-instagram'></i>
                </a>
              </div>
            </div>
          </div>
          <div className="login-section" style={estiloLoginSection}>
  <div className="form-box login">
    <form action="./Autenticacion.js" method="post">
      <h1>Iniciar Sesion</h1>
      <div className="txt_field">
        <input type="text" name="user" required />
        <label>Nombre de usuario</label>
        <span className="icon"><i className='bx bxs-envelope'></i></span>
        <span></span>
      </div>
      <div className="txt_field">
        <input type="password" name="clave" required="required" />
        <label>Contraseña</label>
        <span className="icon"><i className='bx bxs-lock-alt'></i></span>
        <span></span>
      </div>
      <div className="remember-password">
         <label><input type="checkbox" />Recordar Datos</label>
            <a href="">Olvido la Contrasena?</a>
      </div>
      <input type="submit" name="button" value="Ingresar" />
    </form>
  </div>
</div>

          <hr />
        </div>
      </div>
      <Modal modalVisible={modalVisible} toggleModal={toggleModal} />
    </>
  );
}