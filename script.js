const btnSurpresa = document.getElementById("btnSurpresa");
const telaInicial = document.getElementById("tela-inicial");
const conteudo = document.getElementById("conteudo");
const btnMusica = document.getElementById("btnMusica");
const musica = document.getElementById("musica");

btnSurpresa.addEventListener("click", () => {
  telaInicial.style.display = "none";
  conteudo.classList.remove("hidden");
});

btnMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = "Pausar Música ⏸";
  } else {
    musica.pause();
    btnMusica.textContent = "Tocar Música 🎶";
  }
});

function atualizarTempoNamoro() {
    const dataInicio = new Date(2022, 9, 18, 0, 0, 0); 
    const agora = new Date();
  
    
    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
  
    if (dias < 0) {
      meses--;
      const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += ultimoDiaMesAnterior;
    }
  
    if (meses < 0) {
      anos--;
      meses += 12;
    }
  
    
    const diffMs = agora - dataInicio;
    const totalSegundos = Math.floor(diffMs / 1000);
  
    const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
  
    const texto = `Compartilhando momentos há ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💖`;
    document.getElementById("tempoNamoro").textContent = texto;
  }
  
  setInterval(atualizarTempoNamoro, 1000);
  