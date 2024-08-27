const texto1 = document.querySelector(".textarea1");
const texto2 = document.getElementById("textarea2");
const texto3 = document.getElementById("mensaje3");
const texto4 = document.getElementById("mensaje4");


function btnEncriptar() 
{
    texto2.value = encriptar(texto1.value);
    texto1.value = "";
    texto3.innerHTML= "";
    texto4.innerHTML= "";
    texto2.style.backgroundImage = "none";
}


function encriptar(stringEncriptado)
{
let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
//console.table(matrizCodigo);

stringEncriptado  = stringEncriptado.toLowerCase();

for (let i = 0; i < matrizCodigo.length;i++)
{
    if(stringEncriptado.includes(matrizCodigo[i][0]))
        {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
}

return stringEncriptado;
}

function btnDesencriptar() 
{
    texto2.value = desencriptar(texto1.value);
    texto1.value = "";
    texto2.style.backgroundImage = "none";
    texto3.innerHTML= "";
    texto4.innerHTML= "";
}

function desencriptar(stringDesencriptado)
{
let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
//console.table(matrizCodigo);

stringDesencriptado  = stringDesencriptado.toLowerCase();

for (let i = 0; i < matrizCodigo.length;i++)
{
    if(stringDesencriptado.includes(matrizCodigo[i][0]))
        {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
}

return stringDesencriptado;
}

function btnCopiar()
{
    const texto = texto2.value;  
    navigator.clipboard.writeText(texto).then(() => {  
        alert("Texto copiado al portapapeles");  
    }).catch(err => {  
        console.error("Error al copiar el texto: ", err);  
    }); 

    texto2.value = "";
    texto2.style.backgroundImage = "url('./joven.png')";
    texto3.innerHTML= "Ningun mensaje fue encontrado";
    texto4.innerHTML= "Ingresa el texto que deseas encriptar o desencriptar";
}