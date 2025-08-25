window.onload = function() {
  detectSeason();
};

function detectSeason() {
  const month = new Date().getMonth();
  let season = "";

  if (month >= 2 && month <= 4) {
    season = "printemps";
  } else if (month >= 5 && month <= 7) {
    season = "été";
  } else if (month >= 8 && month <= 10) {
    season = "automne";
  } else {
    season = "hiver";
  }

  document.getElementById("season").value = season;
}

async function findBirds() {
  const season = document.getElementById("season").value;
  const activity = document.getElementById("activity").value;

  const response = await fetch("birds.json");
  const data = await response.json();

  const filtered = data.filter(bird =>
    bird.season.includes(season) && bird.activity.includes(activity)
  );

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h2>Oiseaux à observer :</h2>";

  if (filtered.length === 0) {
    resultsDiv.innerHTML += "<p>Aucun oiseau trouvé pour cette combinaison.</p>";
  } else {
    const list = document.createElement("ul");
    filtered.forEach(bird => {
      const item = document.createElement("li");
      item.textContent = bird.name;
      list.appendChild(item);
    });
    resultsDiv.appendChild(list);
  }
}
