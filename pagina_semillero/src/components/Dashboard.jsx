import React from "react";
import "../estilos/dashboard.css";
import Logo from '../Images/Mario_vasque.png';
import Sidebar from '../hooks/Sidebar';
const Dashboard = () => {
  Sidebar();
  return (
    <>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

      <div className="sidebar close">
        <div className="logo-details">
          <i className='bx bxl-xing'></i>
          <span className="logo_name">Semillero Coders</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="inicio.php">
              <i className='bx bx-grid-alt'></i>
              <span className="link_name">Principal</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="">Inicio</a></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-book-alt'></i>
                <span className="link_name">Equipos</span>
              </a>
              <i className='bx bxs-chevron-down arrow'></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Equipos</a></li>
              <li><a href="#">MadCoders</a></li>
              <li><a href="#" >Dolphin</a></li>
              <li><a href="#" >ASCI38</a></li>
              <li><a href="#" >Gula</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-pie-chart-alt-2'></i>
              <span className="link_name">Competencias</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Competencias</a></li>
            </ul>
          </li>
          <li>
            <a href="#" >
              <i className='bx bx-bar-chart-alt-2'></i>
              <span className="link_name">Ejercicios</span>
            </a>
            <ul className="sub-menu blank">
              <li><a href="#" className="link_name">Ejercicios</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-line-chart'></i>
              <span className="link_name">Plataformas</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Plataformas</a></li>
            </ul>
          </li>
          <li>
            <a href="#" >
              <i className='bx bx-history'></i>
              <span className="link_name">Certificados</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#" >Certificados</a></li>
            </ul>
          </li>
          <li>
            <a href="#" >
              <i className='bx bx-cog'></i>
              <span className="link_name">Ajustes</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#" >Ajustes</a></li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={Logo} alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">tttt</div>
                <div className="job">tttttt</div>
              </div>
              <a href=""><i className='bx bx-log-out'></i></a>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu'></i>
          <span className="text">Principal</span>
        </div>
        <section className="content">
          <h2 style={{ textAlign: 'center' }}>Prueba</h2>
          <h3 style={{ textAlign: 'center' }}>pruebbbb</h3>
          <p style={{ textAlign: 'center' }}>Semillero Coders<br />
          Universidad Católica de Pereira
          </p>
        </section>
      </section>
    </>
  );
}

export default Dashboard;