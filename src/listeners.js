
// Detectar el tipo de dispositivo y establecer el atributo correspondiente
function detectDevice() {
    const htmlElement = document.documentElement;
    const isMobile = window.innerWidth <= 768; // Cambia este valor según tu definición de "móvil"
  
    const currentDevice = htmlElement.getAttribute("data-device");
    const newDevice = isMobile ? "mobile" : "desktop";
  
    if (currentDevice !== newDevice) {
      htmlElement.setAttribute("data-device", newDevice);
    }
  }
  
  // Llamar a la función de detección al cargar la página y cuando cambie el tamaño de la ventana
  window.addEventListener('resize', detectDevice);
  
  // Llamar a la función de detección al cargar la página
  document.addEventListener('DOMContentLoaded', detectDevice);
  