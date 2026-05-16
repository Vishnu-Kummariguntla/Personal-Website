export function sectionId(item) {
  const sectionIds = {
    About: "about",
    "Cool Things I've Done": "cool-things",
    Debate: "debate",
    Hobbies: "hobbies",
  };

  return sectionIds[item] ?? item.toLowerCase().replaceAll(" ", "-");
}

export function pathForNavItem(item) {
  return `/${sectionId(item)}`;
}
