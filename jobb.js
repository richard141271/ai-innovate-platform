function startOppdrag() {
  document.getElementById("jobbstatus").innerText = "Oppdrag aktivert! Du er i gang med rekruttering.";
  localStorage.setItem("jobbAktiv", "true");
}