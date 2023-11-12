import { useEffect } from 'react';

const Sidebar = () => {
  useEffect(() => {
    const handleArrowClick = (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    };

    const handleSidebarBtnClick = () => {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("close");
    };

    let arrows = document.querySelectorAll(".arrow");
    let sidebarBtn = document.querySelector(".bx-menu");

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", handleArrowClick);
    });

    sidebarBtn.addEventListener("click", handleSidebarBtnClick);

    return () => {
      // Limpiar los event listeners al desmontar el componente
      arrows.forEach((arrow) => {
        arrow.removeEventListener("click", handleArrowClick);
      });
      sidebarBtn.removeEventListener("click", handleSidebarBtnClick);
    };
  }, []); // El segundo argumento del useEffect vacío asegura que el efecto se ejecute solo una vez al montar el componente.

  // Puedes devolver cualquier cosa que quieras aquí, si es necesario.
  return null;
};

export default Sidebar;