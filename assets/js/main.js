const yearNode = document.querySelector("[data-current-year]");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar-collapse.show");
    const toggler = document.querySelector(".navbar-toggler");

    if (navbar && toggler) {
      toggler.click();
    }
  });
});

const programDetails = {
  parvulo: {
    name: "Párvulo",
    age: "2 años",
    description: "En el grado de Párvulo acompañamos a los niños en sus primeros pasos de exploración y descubrimiento. A través del juego, la estimulación sensorial y actividades lúdicas, fortalecemos la adaptación, el lenguaje, la motricidad fina y gruesa, la autonomía en hábitos básicos y la socialización, respetando siempre el ritmo de aprendizaje de cada niño.",
    highlights: ["Adaptación amorosa", "Estimulación sensorial", "Motricidad fina y gruesa", "Hábitos básicos"],
    images: [
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80"
    ]
  },
  prekinder: {
    name: "Prekínder",
    age: "3 años",
    description: "En Prekínder potenciamos la curiosidad natural de los niños mediante experiencias significativas y divertidas. Trabajamos el desarrollo del lenguaje, la motricidad, la identificación de colores, formas y números, el seguimiento de instrucciones y la expresión de emociones, fomentando la independencia y el aprendizaje a través del juego y la exploración.",
    highlights: ["Lenguaje y expresión", "Colores, formas y números", "Seguimiento de instrucciones", "Independencia"],
    images: [
      "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
    ]
  },
  kinder: {
    name: "Kinder",
    age: "4 años",
    description: "En el grado de Kinder fortalecemos habilidades cognitivas, comunicativas y sociales mediante actividades dinámicas y talleres Montessori. Los niños desarrollan el pensamiento lógico, el reconocimiento de letras y números, la creatividad, la resolución de situaciones cotidianas y el trabajo en equipo, preparándose de manera integral para nuevos retos de aprendizaje.",
    highlights: ["Pensamiento lógico", "Letras y números", "Creatividad", "Trabajo en equipo"],
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&w=900&q=80"
    ]
  },
  transicion: {
    name: "Transición",
    age: "5 años",
    description: "En Transición preparamos a los niños para el ingreso a la etapa escolar fortaleciendo competencias académicas, emocionales y sociales. Trabajamos la lectoescritura inicial, el pensamiento matemático, la autonomía, la responsabilidad y la confianza en sí mismos, siempre desde una metodología lúdica y significativa que les permita aprender de manera feliz y segura.",
    highlights: ["Lectoescritura inicial", "Pensamiento matemático", "Responsabilidad", "Confianza escolar"],
    images: [
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=900&q=80"
    ]
  }
};

const programModal = document.getElementById("programModal");

if (programModal) {
  programModal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    const programKey = trigger?.getAttribute("data-program");
    const program = programDetails[programKey] || programDetails.parvulo;
    const whatsappText = encodeURIComponent(`Hola, quiero recibir información sobre el programa ${program.name} (${program.age}).`);

    document.getElementById("programModalTitle").textContent = program.name;
    document.getElementById("programModalAge").textContent = program.age;
    document.getElementById("programModalDescription").textContent = program.description;
    document.getElementById("programModalWhatsapp").href = `https://wa.me/573014308739?text=${whatsappText}`;

    document.getElementById("programModalHighlights").innerHTML = program.highlights
      .map((item) => `<span><i class="bi bi-check2-circle" aria-hidden="true"></i>${item}</span>`)
      .join("");

    document.getElementById("programModalGallery").innerHTML = program.images
      .map((src, index) => `<img src="${src}" alt="Galería del programa ${program.name} ${index + 1}">`)
      .join("");
  });
}
