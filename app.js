let somTecla = document.getElementById('sons');
let teclaNoH1 = document.getElementById('teclaNoH1');
let teclaPraCima = document.getElementById('teclaPraCima');
let sequenciaNotas =  ['z', 'z', 'x', 'z', 'v', 'c','z', 'z', 'x', 'z', 'b', 'v','z', 'z', 'x', 'z', 'v', 'c','z', 'x', 'c', 'b', 'n', 'm'];

function tocarSom(tecla) {
    somTecla.src = `./sons/${tecla}.mp3`;
    somTecla.play();
    teclaNoH1.textContent = tecla;
}

function tocarSequenciaAutomatica() {
    let tempo = 0;
    sequenciaNotas.forEach((tecla) => {
        setTimeout(() => {
            tocarSom(tecla);
        }, tempo);
        tempo += 500;
    });
}

document.addEventListener("keydown", function(event) {
    let tecla = event.key;
    
    if (tecla === "Enter") {
        tocarSequenciaAutomatica();
    } else {
        tocarSom(tecla);
        
        if (tecla === "ArrowUp") {
            teclaNoH1.classList.add("Pracima");
        } 
        if (tecla == 'ArrowDown'){
            teclaNoH1.classList.add("Prabaixo");
        } else if(tecla == 'ArrowUp'){
            teclaNoH1.classList.remove("Prabaixo");
            teclaNoH1.classList.add("Pracima");
        } 
        if (tecla == "'"){
            teclaNoH1.classList.remove("Prabaixo");
            teclaNoH1.classList.remove("Pracima");
        } else if (
            tecla !== "b" &&
            tecla !== "c" &&
            tecla !== "m" &&
            tecla !== "n" &&
            tecla !== "v" &&
            tecla !== "x" &&
            tecla !== "z" &&
            tecla !== "enter" &&
            tecla !== "ArrowUp" &&
            tecla !== "ArrowDown"
        ) {
            teclaNoH1.textContent = '';
        } else {
            teclaNoH1.textContent = tecla;
        }
    }
});
