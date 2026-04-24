const CONTACT_EMAIL = "kika.gamer.analyst@protonmail.com";

function buildContactMailto(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const subject = data.subject ? `Renseignement - ${data.subject}` : "Renseignement";
  const body = [
    "Bonjour Kika,",
    "",
    "Je vous contacte via le site pour une demande de renseignement.",
    "",
    `Nom / studio : ${data.name || "-"}`,
    `Email : ${data.email || "-"}`,
    "",
    "Message :",
    data.message || "-"
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("[data-contact-form]");
  if (!contactForm) {
    return;
  }

  const status = document.querySelector("[data-contact-status]");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (status) {
      status.textContent = "Votre messagerie va s'ouvrir avec le message deja prepare.";
    }

    window.location.href = buildContactMailto(contactForm);
  });
});
