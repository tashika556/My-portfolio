//type writer

const originalText = document.getElementById("typewriterContent").innerText;
let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    document.getElementById("typewriterContent").innerHTML = originalText.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();