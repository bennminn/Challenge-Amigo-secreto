let listaAmigoSecreto = [];

function agregarAmigo() {
    let inputNombre = document.querySelector("#nombre");
    // Quitar espacios
    let nombreAmigo = inputNombre.value.trim();
    
    // Validación: No puede estar vacío
    if (nombreAmigo === "") {
        alert("Ingrese un nombre, por favor");
        return;
    }
    
    // Validación: No puede ser un número
    if (/\d/.test(nombreAmigo)) {
        alert("El nombre no puede contener números");
        return;
    }
    
    // Agregar nombre a la lista
    listaAmigoSecreto.push(nombreAmigo);
    listaNombres();
    limpiarCampo();
}

function limpiarCampo() {
    document.querySelector("#nombre").value = "";
}

// Listar nombres
function listaNombres() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigoSecreto.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Mostrar resultado
function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }
    if (listaAmigoSecreto.length === 1) {
        alert("Agregue al menos dos nombres para realizar el sorteo.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaAmigoSecreto.length);
    let nombreSorteado = listaAmigoSecreto[indiceSorteado];
    document.getElementById("resultado").textContent = `El amigo secreto es: ${nombreSorteado}`;
}

