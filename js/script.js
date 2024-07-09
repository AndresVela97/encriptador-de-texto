let nota = document.getElementById("nota");
let icono = document.createElement("i");


function encriptar() {
  let texto = document.getElementById("inputText").value;

  // Validar el texto antes de proceder
  if (!validarTexto(texto)) {
    alert(
      "El texto no puede contener caracteres especiales ni contener en mayúsculas."
    );
    return;
  }

  let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);

  // Agregar el icono al principio del texto
  icono.classList.add("fas", "fa-exclamation-circle");
  nota.innerHTML = ""; // Limpiar contenido actual si es necesario
  nota.appendChild(icono); // Agregar el icono
  nota.insertAdjacentHTML("beforeend", " Apenas letras minusculas y sin acentos"); // Agregar texto después del icono

}

function desencriptar() {
  let texto = document.getElementById("inputText").value;

  // Validar el texto antes de proceder
  if (!validarTexto(texto)) {
    alert(
      "El texto no puede contener caracteres especiales ni contener letras en mayúsculas."
    );
    return;
  }

  let textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  mostrarResultado(textoDesencriptado);
  // Agregar el icono al principio del texto
  icono.classList.add("fas", "fa-exclamation-circle");
  nota.innerHTML = ""; // Limpiar contenido actual si es necesario
  nota.appendChild(icono); // Agregar el icono
  nota.insertAdjacentHTML("beforeend", " Apenas letras minusculas y sin acentos"); // Agregar texto después del icono

}

function mostrarResultado(textoResultado) {
  let outputText = document.getElementById("outputText");
  let copiarBtn = document.getElementById("copiar");
  let placeholderImage = document.getElementById("placeholder_image");

  outputText.value = textoResultado;

  // Ocultar imagen y párrafos
  placeholderImage.style.display = "none";

  // Mostrar el área de texto y botón de copiar
  outputText.style.display = "block";
  copiarBtn.style.display = "block";
  // Asegurar que el textarea tiene la clase correcta
  outputText.classList.add("placeholder-textarea");
}
function validarTexto(texto) {
  // Verificar si hay caracteres especiales
  var caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/;

  // Verificar si hay letras mayúsculas
  var tieneMayusculas = /[A-Z]/.test(texto);

  // El texto es válido si no contiene caracteres especiales ni letras mayúsculas
  return !(caracteresEspeciales.test(texto) || tieneMayusculas);
}

function copiarAlPortapapeles() {
  var campoTexto = document.getElementById("outputText");
  campoTexto.select();

  try {
    var exito = document.execCommand("copy");
    var mensaje = exito
      ? "Texto copiado al portapapeles"
      : "No se pudo copiar el texto";
    console.log(mensaje);

    if (exito) {
      mostrarPlaceholder(); // Mostrar el placeholder después de copiar
    }
  } catch (err) {
    console.error("Error al intentar copiar el texto: ", err);
  }
}
