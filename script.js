function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

// 🌸 Generar corazones flotantes
function createFloatingHearts() {
    const heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart-floating");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        heart.style.fontSize = `${15 + Math.random() * 20}px`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}

document.addEventListener("DOMContentLoaded", createFloatingHearts);
