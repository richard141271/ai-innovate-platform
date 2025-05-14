function oppdaterRekruttering() {
  const bruker = JSON.parse(localStorage.getItem("registrertBruker")) || {};
  const epost = encodeURIComponent(bruker.epost || "din@epost.no");
  const vervelenke = `https://aiinnovate.no/?ref=${epost}`;
  document.getElementById("vervLenke").value = vervelenke;

  // Dummy-tall for demo
  const antall = localStorage.getItem("rekruttertAntall") || 3;
  const provisjon = antall * 50;
  const rang = antall >= 20 ? "Mentor" : antall >= 10 ? "Teamleder" : "Medlem";

  document.getElementById("antall").innerText = antall;
  document.getElementById("provisjon").innerText = provisjon;
  document.getElementById("rang").innerText = rang;
}

function kopierLenke() {
  const input = document.getElementById("vervLenke");
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Lenke kopiert!");
}

window.onload = oppdaterRekruttering;