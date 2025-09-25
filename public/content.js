function replaceGmailLogo() {
  const logoImg = document.querySelector("img.gb_Xc");

  if (logoImg) {
    // Replace with text
    const span = document.createElement("span");
    span.textContent = "Hiver-Gmail";
    span.style.fontSize = "20px";
    span.style.fontWeight = "bold";
    span.style.color = "#1a73e8";
    span.style.marginLeft = "10px";

    logoImg.replaceWith(span);
    console.log("Gmail logo replaced with Hiver-Gmail text");
    return true;
  }
  return false;
}

const interval = setInterval(() => {
  if (replaceGmailLogo()) {
    clearInterval(interval);
  }
}, 500);
