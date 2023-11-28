function esperarISaludar(nombre, callback) {
    setTimeout(function(){
      callback(nombre);
    }, 2000); 
  }
  
  // Ejemplo de uso:
 
  esperarISaludar("Victor", function(nombreSaludado){
    console.log("hola " + nombreSaludado)
  });
