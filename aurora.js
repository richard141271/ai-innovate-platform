function oppdaterAuroraStatus() {
  const kunst = JSON.parse(localStorage.getItem("kunstGalleri") || "[]");
  const bruker = JSON.parse(localStorage.getItem("registrertBruker") || "{}");
  const antall = localStorage.getItem("rekruttertAntall") || 3;
  const provisjon = antall * 50;

  document.getElementById("status-kunst").innerText = kunst.length;
  document.getElementById("status-provisjon").innerText = provisjon;
  document.getElementById("status-medlemmer").innerText = 1 + parseInt(antall);
}

window.onload = oppdaterAuroraStatus;