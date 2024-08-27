/*function encryptorText() {
    alert('Click from button encryptor text');
}*/

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
var feedbackElement = document.getElementById("feedbackElement");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    //console.table(matrizCodigo);

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        } 
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    feedbackElement.innerText = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    //console.table(matrizCodigo);

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        } 
    }
    return stringDesencriptada
}

/* 
* Copying text from a function with the clipboard method 
* https://desarrolloweb.com/articulos/copiar-en-portapapeles-con-javascript.html
*/
function clipboardCopy(){
    // Gets the text from the textarea.
    const texto = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(texto).then(function () {
        feedbackElement = document.getElementById("feedbackElement")
        //Display a success message to the user on the page.
        feedbackElement.textContent = 'Text copied to clipboard';
        mensaje.value = "";
        mensaje.style.backgroundImage = 'url("./img/Muneco.png")';
    }).catch(function (err) {
        //Display a error message to the user on the page.
        feedbackElement.textContent = 'Error when copying to clipboard: ' + err;
    });
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn-copiar").addEventListener("click", clipboardCopy);
});