const conselhos = [
    "Acredite em voce mesmo.",
    "O primeiro passo é o mais importante.",
    "Seja sua melhor versão!",
    "Supere seus limites.",
    "Tenha objetivos claros e lute por eles."
];
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

function gerarConselho() {
    //bug corrigido, removemos o + 1
    const indice = Math.floor(Math.random() * conselhos.length);
    conselhoTexto.textContent = conselhos[indice]; 
}
novoConselhoBtn.addEventListener('Click', gerarConselho);
