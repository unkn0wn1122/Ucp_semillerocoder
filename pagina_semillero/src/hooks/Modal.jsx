import React, { useState } from 'react';
import Docente from '../Images/juancarlosbin.png';
import EstudianteLider from '../Images/Mario_vasque.png';
import '../estilos/index.css';

export default function Modal({ modalVisible, toggleModal }) {
  const docenteEmail = 'juanc.blandon@ucp.edu.co';
  const EstudianteEmail = 'mario1.marin@ucp.edu.co';
  const handleToggleModal = () => {
    toggleModal(); 
  };

  if (modalVisible) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      {modalVisible && ( 
        <div className="modal">
          <div onClick={handleToggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Información General</h2>
            <hr />
            <h6>
              El objetivo del semillero es participar en distintas competencias relacionadas con programación competitiva a nivel nacional e internacional.
            </h6>
            <div className="logo-informativo">
              <a href="https://www.ucp.edu.co/perfil-docente/?d=30" target="_blank">
                <img src={Docente} alt="Logo" className="logoInf" />
              </a>
              <img src={EstudianteLider} alt="Logo2" className="logoInf-2" />
              <div className="contenedor-informativo">
                <div alt="Docente Info" className="DocenteInf">
                  <span>
                    Docente Tutor<br></br>
                    Juan Carlos Blandón Andrade<br></br>
                    <i className="bx bxs-contact"></i> <a href={`mailto:${docenteEmail}`}>{docenteEmail}</a>
                  </span>
                </div>

                <div alt="Estudiante Info" className="EstudianteInf">
                  <span>
                    Estudiante líder<br></br>
                    Mario Esteban Marín Vásquez<br></br>
                    <i className="bx bxs-contact"></i> <a href={`mailto:${EstudianteEmail}`}>{EstudianteEmail}</a>
                  </span>
                </div>
              </div>
            </div>
            <button className="close-modal" onClick={handleToggleModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}