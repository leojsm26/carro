// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    const licensePlate = document.getElementById("licensePlate").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
  
    // Crear una fila en la tabla con la información ingresada
    const table = document.getElementById("vehicleTable");
    const newRow = table.insertRow();
  
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
  
    cell1.textContent = licensePlate;
    cell2.textContent = brand;
    cell3.textContent = model;
    cell4.textContent = year;
  
    // Limpiar el formulario después de enviar los datos
    document.getElementById("vehicleForm").reset();
}  
  // Agregar un evento al formulario para llamar a la función handleSubmit cuando se envía
  const form = document.getElementById("vehicleForm");
  form.addEventListener("submit", handleSubmit);
  