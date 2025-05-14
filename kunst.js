function lagreKunst() {
  const fil = document.getElementById("filOpplasting").files[0];
  const beskrivelse = document.getElementById("beskrivelse").value.trim();
  const status = document.getElementById("status");

  if (!fil) {
    status.innerText = "Velg et bilde.";
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const kunstverk = {
      bilde: reader.result,
      tekst: beskrivelse
    };

    let galleri = JSON.parse(localStorage.getItem("kunstGalleri") || "[]");
    galleri.push(kunstverk);
    localStorage.setItem("kunstGalleri", JSON.stringify(galleri));
    status.innerText = "Kunst lagret!";
    visGalleri();
  };
  reader.readAsDataURL(fil);
}

function visGalleri() {
  const galleri = JSON.parse(localStorage.getItem("kunstGalleri") || "[]");
  const container = document.getElementById("kunstGalleri");
  container.innerHTML = "";
  galleri.forEach(kunst => {
    const img = document.createElement("img");
    img.src = kunst.bilde;
    const p = document.createElement("p");
    p.innerText = kunst.tekst;
    container.appendChild(img);
    container.appendChild(p);
  });
}

window.onload = visGalleri;