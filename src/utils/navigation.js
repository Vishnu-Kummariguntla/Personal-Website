export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function sectionId(item) {
  const sectionIds = {
    About: "about",
    "Cool Things I've Done": "cool-things",
    Debate: "debate",
    Hobbies: "hobbies",
  };

  return sectionIds[item] ?? item.toLowerCase().replaceAll(" ", "-");
}
