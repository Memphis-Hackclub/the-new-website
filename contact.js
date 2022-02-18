(async () => {
  let contacts = await fetch("/contactinfo.json");
  contacts = await contacts.json();
  const emails = document.querySelectorAll(".email");
  emails.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let name = e.target.getAttribute("data-name");
      window.open(`mailto:${contacts[name].email}`)
    })
  });
  const phones = document.querySelectorAll(".phone");
  phones.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let name = e.target.getAttribute("data-name");
      alert(`${name}'s phone number: ${contacts[name].phone}`)
    })
  })
})();