function visSide(id) {
  document.querySelectorAll('.side').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function loggInn() {
  const navn = document.getElementById("navn").value.trim();
  const epost = document.getElementById("epost").value.trim();
  if (!navn) return alert("Skriv inn navnet ditt.");
  localStorage.setItem("bruker", JSON.stringify({ navn, epost }));
  visProfil();
  visSide("profil");
}

function visProfil() {
  const bruker = JSON.parse(localStorage.getItem("bruker"));
  if (!bruker) return;
  document.getElementById("profilinfo").innerText =
    `Navn: ${bruker.navn}\nE-post: ${bruker.epost || 'Ikke oppgitt'}`;
  const link = window.location.origin + "?ref=" + encodeURIComponent(bruker.navn.toLowerCase().replace(/\s+/g, "-"));
  document.getElementById("reflink").innerText = link;
}

window.onload = () => {
  const bruker = JSON.parse(localStorage.getItem("bruker"));
  if (bruker) {
    visProfil();
    visSide("profil");
  } else {
    visSide("innlogging");
  }
};