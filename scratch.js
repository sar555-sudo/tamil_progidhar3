const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="pooja-image (pooja-img-[^"]+)">(?:\s*)<\/div>/g;

const replacement = `<div class="pooja-carousel-wrapper">
            <div class="pooja-card-ornament top-left"><i class="fas fa-om" style="color: #facc15; text-shadow: 0 2px 4px rgba(0,0,0,0.5); font-size: 1.2rem;"></i></div>
            <div class="pooja-card-ornament top-right"><i class="fas fa-bell" style="color: #facc15; text-shadow: 0 2px 4px rgba(0,0,0,0.5); font-size: 1.2rem;"></i></div>
            <div class="pooja-carousel-track">
              <div class="pooja-carousel-slide active">
                <div class="pooja-image $1"></div>
              </div>
            </div>
            <button class="carousel-arrow carousel-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-arrow carousel-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
            <div class="carousel-dots">
              <span class="carousel-dot active"></span>
            </div>
          </div>`;

html = html.replace(regex, replacement);

const titleRegex = /<h3 class="pooja-title">([\s\S]*?)<\/h3>/g;
html = html.replace(titleRegex, `<h3 class="pooja-title">$1</h3>\n            <span class="title-separator"></span>`);

fs.writeFileSync('index.html', html);
