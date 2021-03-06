const { fpGraph } = require('./fp-graphs.js');
module.exports = {buildFeaturedHtml};

function buildFeaturedHtml(data) {
  let laneGraph = fpGraph(data.playerStats.counts, data.id);
  let graphHTML = "";
  let graphRoles = `<div class="graph-roles">Supp: ${data.playerStats.counts.support}<br>Core: ${data.playerStats.counts.core}<br>Mid: ${data.playerStats.counts.mid}</div>`;
  if (laneGraph){
    graphHTML = `<div class="graphs">${graphRoles}<img class="graph-minimap" src="./assets/images/minimap_simple.png"></img><img src="${laneGraph}" class="lane-graph"></img></div>`;
  }
  console.log(graphHTML);
  let heroSection = `<div class="recent-hero">
     <img src="${data.playerStats.heroes[0].url}" alt="" class="hero">
     <div class="hero-win-loss">
       <div class="hero-wl-inner">${data.playerStats.heroes[0].wins}-${data.playerStats.heroes[0].losses}</div>
     </div>
    </div>`;
  if (data.playerStats.heroes.length >= 2) {
    heroSection+=`<div class="recent-hero">
       <img src="${data.playerStats.heroes[1].url}" alt="" class="hero">
       <div class="hero-win-loss">
         <div class="hero-wl-inner">${data.playerStats.heroes[1].wins}-${data.playerStats.heroes[1].losses}</div>
       </div>
     </div>`
  }
  if (data.playerStats.heroes.length >= 3) {
    heroSection+= `<div class="recent-hero">
      <img src="${data.playerStats.heroes[2].url}" alt="" class="hero">
      <div class="hero-win-loss">
        <div class="hero-wl-inner">${data.playerStats.heroes[2].wins}-${data.playerStats.heroes[2].losses}</div>
      </div>
    </div>`
  }
  var html = `<div class="featured-player" style="background: url('./assets/images/${data.playerStats.cardBg}')">
   <div class="name-row">
     <h3 class="name">${data.name}</h3>
   </div>
   <div class ="card-img">
       <div class="card-bg"><img src="${data.avatar}" alt="" class="card-bg-inner"></div>
       <img src="${data.avatar}" alt="" class="card-avatar">
   </div>
   <div class="info-row">
     <h4 class="role">${data.playerStats.ptype}</h4>
     <h4 class="rank"></h4>
     <img src="${data.rank_icon}" alt="">
   </div>
   <div class="body-row">
     <div class="description">
      ${heroSection}
      ${graphHTML}
     </div>
   </div>
   <div class="wl-row">
     <div class="win-loss">
       <div class="wins">${data.playerStats.wins}/</div>
       <div class="losses">${data.playerStats.losses}</div>
     </div>
   </div>
  </div>`;

  return html;
}
