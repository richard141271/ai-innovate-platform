function visSide(id) {
  document.querySelectorAll('.side').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function registrer() {
  const navn = document.getElementById("navn").value;
  const epost = document.getElementById("epost").value;
  if (!navn || !epost) {
    alert("Fyll ut navn og e-post.");
    return;
  }
  localStorage.setItem("profil", JSON.stringify({ navn, epost }));
  document.getElementById("profilinfo").innerText = `Velkommen, ${navn}! Din e-post er ${epost}.`;
  visSide("profil");
}
window.onload = () => {
  const data = localStorage.getItem("profil");
  if (data) {
    const p = JSON.parse(data);
    document.getElementById("profilinfo").innerText = `Velkommen tilbake, ${p.navn}!`;
  }
  visSide("registrering");
};