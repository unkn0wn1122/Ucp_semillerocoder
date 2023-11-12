import React, { useEffect } from 'react';
const CargarIframe = ({ url, descripcion }) => {
  useEffect(() => {
    const handleIframeLoad = () => {
      let iframe = document.querySelector('.home-section iframe');
      let iframeURL = iframe.contentWindow.location.href;

      let accion;
      if (iframeURL.includes('/components/')) {
        accion = 'Se abre';
      } else if (iframeURL.includes('/components/')) {
        accion = 'Se abre';
      } else if (iframeURL.includes('/components/')) {
        accion = 'Se abre';
      } else if (iframeURL.includes('/components/')) {
        accion = 'Se abre';
      } else if (iframeURL.includes('/components/')) {
        accion = 'Se abre';
      } else if (iframeURL.includes('ganancia.php')) {
        accion = 'Se abre la página';
      } else if (iframeURL.includes('/components/')) {
        accion = 'Se abre la página';
      } else if (iframeURL.includes('')) {
        accion = 'Se abre la página de Perfiles de Usuarios';
      } else {
        accion = 'Se abre Equipos';
      }

      // Realizar una solicitud AJAX para enviar los datos a PHP
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'inicio.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('accion=' + encodeURIComponent(accion) + '&descripcion=' + encodeURIComponent(descripcion));
    };

    let seccionPrincipal = document.querySelector('.home-section');
    seccionPrincipal.innerHTML = `<iframe src="${url}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;

    // Test cambiar de acción
    let iframe = document.querySelector('.home-section iframe');
    iframe.addEventListener('load', handleIframeLoad);

    return () => {
      iframe.removeEventListener('load', handleIframeLoad);
    };
  }, [url, descripcion]);

  return null;
};

export default CargarIframe;