function esperarISaludar(nombre, callback) {
    setTimeout(callback(nombre), 2000); 
  }
  
  // Ejemplo de uso:
  function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
  }
  
  esperarISaludar("Victor", saludar);
  