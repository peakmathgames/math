const games = [
  {title: "Bad Time Simulator", image: "thumbnails/badtimesim.jpg", file: "games/badtimesim.html"},
  {title: "Baldi's Basics", image: "thumbnails/baldisbasics.jpg", file: "games/baldisbasics.html"},
  {title: "Basketball Stars", image: "thumbnails/basketballstars.jpg", file: "games/basketballstars.html"},
  {title: "Brotato", image: "thumbnails/brotato.jpg", file: "games/brotato.html"},
  {title: "Chess", image: "thumbnails/chess.jpg", file: "games/chess.html"},
  {title: "Cookie Clicker", image: "thumbnails/cookieclicker.jpg", file: "games/cookieclicker.html"},
  {title: "Drift Boss", image: "thumbnails/driftboss.jpg", file: "games/driftboss.html"},
  {title: "Eaglercraft", image: "thumbnails/eaglercraft.jpg", file: "games/eaglercraft.html"},
  {title: "Escape Road", image: "thumbnails/escaperoad.jpg", file: "games/escaperoad.html"},
  {title: "Five Nights at Freddy's", image: "thumbnails/fnaf.jpg", file: "games/fnaf.html"},
  {title: "Retro Bowl", image: "thumbnails/retrobowl.jpg", file: "games/retrobowl.html"},
  {title: "Rocket League", image: "thumbnails/rocketleague.jpg", file: "games/rocketleague.html"},
  {title: "Slope Rider 3D", image: "thumbnails/sloperider3d.jpg", file: "games/sloperider3d.html"},
  {title: "Smash Karts", image: "thumbnails/smashkarts.jpg", file: "games/smashkarts.html"},
  {title: "Tomb of the Mask", image: "thumbnails/tombofthemask.jpg", file: "games/tombofthemask.html"},
  {title: "Tunnel Rush", image: "thumbnails/tunnelrush.jpg", file: "games/tunnelrush.html"}
];

const grid = document.getElementById("row");

games.forEach(game => {
  const card = document.createElement("button");
  card.className = "card col d-flex p-0 m-1 text-light";
  card.style = "flex: 0 0 12.5%; max-width: 12.5%;";
  card.innerHTML = `
  <img src="${game.image}" class="card-img-top img-fluid">
  <div class="card-body p-3 bg-dark">
    <h3 class="card-text" style="font-family: monospace">${game.title}</h3>
  </div>
  `
  card.onclick = function() {
    const win = window.open();
    let iframe = win.document.createElement("iframe");
    iframe.src = game.file;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    win.document.body.style.margin = '0';
    win.document.body.style.padding = '0';
    win.document.body.style.overflow = 'hidden';
    win.document.body.appendChild(iframe);
  };
  grid.appendChild(card);
})
