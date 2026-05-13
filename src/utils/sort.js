export function getProjectSortYear(project) {
  const years = project.date.match(/\d{4}/g)?.map(Number) ?? [0];
  return Math.max(...years);
}

export function getDebateYear(event) {
  return Number(event.year.match(/\d{4}/)?.[0] ?? 0);
}

export function groupDebateTournaments(tournaments, highlightsByYear) {
  const debateYearOrder = [
    "Freshman year",
    "Middle school",
    "Sophomore year",
    "Junior year",
    "Senior year",
  ];

  return debateYearOrder
    .map((schoolYear) => ({
      schoolYear,
      highlights: highlightsByYear[schoolYear] ?? [],
      tournaments: tournaments
        .filter((event) => event.schoolYear === schoolYear)
        .sort((a, b) => getDebateYear(a) - getDebateYear(b)),
    }))
    .filter((group) => group.highlights.length > 0 || group.tournaments.length > 0);
}
