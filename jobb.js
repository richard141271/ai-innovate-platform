function startRekruttering() {
  document.getElementById("jobbStatus").innerText = "Oppdrag aktivert! Du er i gang med rekruttering.";
}

function behandleSoknad() {
  const stilling = document.getElementById("stilling").value;
  const soknadstekst = document.getElementById("soknadstekst").value;
  const resultat = `
    Hei, takk for din jobbsøknad om stillingen "${stilling}".<br><br>
    Den søkte stillingen er dessverre ikke ledig nå, MEN du har muligheter til å bli engasjert som rekrutterer.<br><br>
    Dersom du gjør en god jobb for oss, har du allerede en fot innenfor neste gang vi lyser ut nye stillinger.<br><br>
    Etter 6 mnd som rekrutterer vil du automatisk bli forfremmet og få fortrinnsrett til ledige stillinger i ditt område.<br><br>
    Du kan også starte egen bedrift – helt gratis. Les mer <a href="#">her</a>.
  `;
  document.getElementById("soknadResultat").innerHTML = resultat;
  return false;
}