function getSeason() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "printemps";
  if (month >= 5 && month <= 7) return "été";
  if (month >= 8 && month <= 10) return "automne";
  return "hiver";
}

function navigate(select) {
  if (select.value) window.location.href = select.value;
}

document.addEventListener("DOMContentLoaded", () => {
  const season = getSeason();
  const seasonTitle = document.getElementById("seasonTitle");
  const activityButtons = document.getElementById("activityButtons");

  if (seasonTitle && activityButtons) {
    seasonTitle.textContent = "Activités pour " + season;

    const activities = {
      hiver: ["ski", "randonnée", "chasse aux oiseaux", "jardin"],
      automne: ["randonnée", "camping", "chasse aux oiseaux", "jardin"],
      été: ["randonnée", "camping", "chasse aux oiseaux", "jardin"],
      printemps: ["randonnée", "camping", "chasse aux oiseaux", "jardin", "ski"]
    };

    activities[season].forEach(act => {
      const btn = document.createElement("button");
      btn.textContent = act;
      btn.onclick = () => window.location.href = act + ".html";
      activityButtons.appendChild(btn);
    });
  }
});
