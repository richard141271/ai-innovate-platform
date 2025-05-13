function lagreKunst() {
  const bildeInput = document.getElementById("kunstBilde");
  const tittel = document.getElementById("kunstTittel").value.trim();
  const beskrivelse = document.getElementById("kunstBeskrivelse").value.trim();

  if (!bildeInput.files.length || !tittel || !beskrivelse) {
    alert("Fyll ut alle felt og last opp et bilde.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const bildeURL = e.target.result;
    const kunstverk = { bildeURL, tittel, beskrivelse, dato: new Date().toLocaleString() };
    const lagret = JSON.parse(localStorage.getItem("kunstverk")) || [];
    lagret.push(kunstverk);
    localStorage.setItem("kunstverk", JSON.stringify(lagret));
    visKunstverk();
    document.getElementById("kunstTittel").value = "";
    document.getElementById("kunstBeskrivelse").value = "";
    bildeInput.value = "";
  };
  reader.readAsDataURL(bildeInput.files[0]);
}

function visKunstverk() {
  const container = document.getElementById("kunstGalleri");
  container.innerHTML = "";
  const verk = JSON.parse(localStorage.getItem("kunstverk")) || [];

  if (verk.length === 0) {
    container.innerHTML = "<p>Ingen kunstverk lastet opp ennå.</p>";
    return;
  }

  verk.reverse().forEach(item => {
    const div = document.createElement("div");
    div.className = "kort";
    div.innerHTML = `
      <h3>${item.tittel}</h3>
      <p><em>${item.dato}</em></p>
      <img src="${item.bildeURL}" alt="Kunstverk" />
      <p>${item.beskrivelse}</p>
    `;
    container.appendChild(div);
  });
}

window.onload = visKunstverk;