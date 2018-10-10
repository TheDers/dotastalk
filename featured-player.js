module.exports = {buildFeaturedHtml};

function buildFeaturedHtml(data) {
  var html = `<div id="featured-player">
   <div class="name-row">
     <h3 class="name">${data.name}</h3>
   </div>
   <div class ="card-img">
       <div class="card-bg"></div>
       <img src="${data.avatar}" alt="" class="card-avatar">
   </div>
   <div class="info-row">
     <h4 class="role">Offlane Support</h4>
     <h4 class="rank"></h4>
     <img src="${data.rank_icon}" alt="">
   </div>
   <div class="body-row">
     <div class="description">
       <div class="recent-hero">
         <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/8/8d/Io_icon.png" alt="" class="hero">
         <div class="hero-win-loss">
           <div class="hero-wl-inner">7-3</div>
         </div>
       </div>
       <div class="recent-hero">
         <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/7/72/Oracle_icon.png" alt="" class="hero">
         <div class="hero-win-loss">
           <div class="hero-wl-inner">5-2</div>
         </div>
       </div>
       <div class="recent-hero">
         <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/4/4e/Pangolier_icon.png" alt="" class="hero">
         <div class="hero-win-loss">
           <div class="hero-wl-inner">4-0</div>
         </div>
       </div>
     </div>
   </div>
   <div class="wl-row">
     <div class="win-loss">
       <div class="wins">${data.wl.win}/</div>
       <div class="losses">${data.wl.lose}</div>
     </div>
   </div>
  </div>`;

  return html;
}