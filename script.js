// =============================
// BRILHINHOS AO CLICAR
// =============================

document.addEventListener("click", (event) => {

  const sparkle = document.createElement("span");

  sparkle.textContent = "✦";

  sparkle.style.position = "fixed";
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;

  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "9999";

  sparkle.style.color = "#e6b3ff";
  sparkle.style.fontSize = "20px";

  sparkle.style.transition = "all .8s ease";

  document.body.appendChild(sparkle);

  requestAnimationFrame(() => {

    sparkle.style.transform =
      "translateY(-35px) scale(1.5)";

    sparkle.style.opacity = "0";

  });

  setTimeout(() => {
    sparkle.remove();
  }, 850);

});


// =============================
// CONTADOR DO NOSSO TEMPO
// =============================

// Começamos a conversar:
// 15/07/2026 às 19:08

const inicio =
  new Date("2026-07-15T19:08:00-03:00");


function atualizarTempo() {

  const agora = new Date();

  if (agora < inicio) return;


  let meses =
    (agora.getFullYear() - inicio.getFullYear()) * 12 +
    (agora.getMonth() - inicio.getMonth());


  let base = new Date(inicio);

  base.setMonth(
    inicio.getMonth() + meses
  );


  if (base > agora) {

    meses--;

    base = new Date(inicio);

    base.setMonth(
      inicio.getMonth() + meses
    );

  }


  const restante = agora - base;


  const dias =
    Math.floor(restante / 86400000);


  const horas =
    Math.floor(
      (restante % 86400000) / 3600000
    );


  const minutos =
    Math.floor(
      (restante % 3600000) / 60000
    );


  const segundos =
    Math.floor(
      (restante % 60000) / 1000
    );


  document.getElementById("meses").textContent =
    meses;

  document.getElementById("dias").textContent =
    dias;

  document.getElementById("horas").textContent =
    horas;

  document.getElementById("minutos").textContent =
    minutos;

  document.getElementById("segundos").textContent =
    segundos;
}


// Atualiza imediatamente
atualizarTempo();

// Atualiza a cada segundo
setInterval(atualizarTempo, 1000);


// =============================
// MEDIDOR DO MEU AMOR
// =============================

const loveNumber =
  document.getElementById("loveNumber");

const meterFill =
  document.getElementById("meterFill");

const meterHeart =
  document.querySelector(".meter-heart");

const loveMessage =
  document.getElementById("loveMessage");

const infinityLove =
  document.getElementById("infinityLove");


const mensagens = [

  "Ainda estou tentando medir...",

  "Meu coração já está ficando pequeno para tanto amor. 💜",

  "Isso definitivamente passou do normal.",

  "Yasmim, você está quebrando o medidor. 💙",

  "100%? Isso é pouco demais.",

  "O medidor não foi feito para isso...",

  "Erro: amor demais detectado. ∞"

];


let amor = 0;

let mensagemAtual = -1;


function animarAmor() {

  if (amor < 100) {

    amor += 0.035;


    const porcentagem =
      Math.min(amor, 100);


    loveNumber.textContent =
      `${porcentagem.toFixed(0)}%`;


    meterFill.style.width =
      `${porcentagem}%`;


    meterHeart.style.left =
      `${porcentagem}%`;


    const indice =
      Math.min(
        mensagens.length - 1,
        Math.floor(amor / 15)
      );


    if (indice !== mensagemAtual) {

      mensagemAtual = indice;

      loveMessage.textContent =
        mensagens[indice];

    }


    requestAnimationFrame(animarAmor);

  }

  else {

    loveNumber.textContent = "∞";

    meterFill.style.width = "100%";

    meterHeart.style.left = "100%";


    loveMessage.textContent =
      "100% não foi suficiente. O amor ultrapassou todos os limites. ∞";


    infinityLove.style.display =
      "block";

  }

}


// Começa depois de 900ms
setTimeout(animarAmor, 900);
// =================================
// GALERIA SECRETA DA YASMIM
// =================================

function abrirFoto(caminho) {

  const modal =
    document.getElementById("photoModal");

  const imagem =
    document.getElementById("modalImage");

  imagem.src = caminho;

  modal.classList.add("show");

  document.body.style.overflow = "hidden";

}


// FECHAR

function fecharFoto(event) {

  if (event) {

    event.stopPropagation();

  }

  const modal =
    document.getElementById("photoModal");

  modal.classList.remove("show");

  document.body.style.overflow = "";

}


// ESC PARA FECHAR

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      fecharFoto();

    }

  }
);
// =================================
// ELOGIOS PARA A YASMIM
// =================================

const elogios = [

    "Você é simplesmente a menina mais linda que eu já vi. 🥹💜",

    "Seu sorriso consegue deixar qualquer momento muito mais bonito. ❤️",

    "Seus olhos são uma das coisas que eu mais amo admirar em você. 👀💜",

    "Você fica linda até quando acha que não está. E talvez nem perceba o quanto. 🥹",

    "Eu poderia olhar para você por horas e ainda assim sentir que foi pouco. 💜",

    "Seu cabelo, seu sorriso, seu olhar... tudo em você consegue me deixar apaixonado novamente. ❤️‍🩹",

    "Você tem uma beleza que nenhuma foto consegue mostrar completamente. ✨",

    "Até quando você faz uma carinha séria consegue ser linda. KKKKKK 😭💜",

    "Eu sinceramente não sei como tive tanta sorte de encontrar uma menina como você. 🥹",

    "Você não é só linda por fora. Seu jeito e seu coração fazem você ser ainda mais especial para mim. 💜",

    "Se eu pudesse escolher uma pessoa para admirar todos os dias, escolheria você sem pensar duas vezes. ❤️",

    "E mesmo depois de todas essas frases, ainda não consegui explicar o quanto você é linda para mim. ∞💜"

];

let elogioAtual = 0;

function trocarElogio() {

    const texto =
        document.getElementById("complimentText");

    elogioAtual++;

    if (elogioAtual >= elogios.length) {
        elogioAtual = 0;
    }

    texto.style.opacity = "0";

    setTimeout(() => {

        texto.textContent =
            elogios[elogioAtual];

        texto.style.opacity = "1";

    }, 200);

}