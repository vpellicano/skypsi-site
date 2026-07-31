"use strict";

const ATTRIBUTION_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid"
];

function decorateMackUrl(raw) {
  const destination = new URL(raw, window.location.href);
  const current = new URL(window.location.href);
  destination.searchParams.set("source", "skypsi.com");
  destination.searchParams.set("landing_page", window.location.pathname);
  ATTRIBUTION_KEYS.forEach((key) => {
    const value = current.searchParams.get(key);
    if (value && value.length <= 500) destination.searchParams.set(key, value);
  });
  return destination.toString();
}

document.querySelectorAll("[data-mack-url]").forEach((element) => {
  const attribute = element.tagName === "IFRAME" ? "src" : "href";
  const current = element.getAttribute(attribute);
  if (current) element.setAttribute(attribute, decorateMackUrl(current));
});

const dialog = document.querySelector("[data-mack-dialog]");
document.querySelectorAll("[data-open-mack]").forEach((button) => {
  if (!dialog || typeof dialog.showModal !== "function") {
    button.addEventListener("click", () => {
      window.location.assign(decorateMackUrl("https://mack.skypsi.com/mack"));
    });
    return;
  }
  button.addEventListener("click", () => dialog.showModal());
});

document.querySelectorAll("[data-close-mack]").forEach((button) => {
  button.addEventListener("click", () => dialog && dialog.close());
});

if (dialog) {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}
