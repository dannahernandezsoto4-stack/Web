document.addEventListener("DOMContentLoaded", () => {
  const elementosARevelar = document.querySelectorAll(".revelar, .personaje-card, .parrafo-animado");

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("activo");
        } else {
          entrada.target.classList.remove("activo");
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  document.querySelectorAll(".personaje-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.15}s`;
  });

  elementosARevelar.forEach((elemento) => {
    observador.observe(elemento);
  });

  const btnModo = document.getElementById("btn-modo");
  const heroH2 = document.querySelector("#hero h2");

  btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-dia");
    
    if (document.body.classList.contains("modo-dia")) {
      btnModo.innerHTML = " MODO NOCHE";
      heroH2.innerHTML = "Eres un ciudadano ejemplar. Trabaja y prospera.";
    } else {
      btnModo.innerHTML = " MODO DÍA";
      heroH2.innerHTML = "La ciudad es tuya de día. Sobrevive de noche.";
    }
  });
});