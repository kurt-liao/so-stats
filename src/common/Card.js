class Card {
  constructor({ width = 100, height = 100, colors = {}, title = "" }) {
    this.width = width;
    this.height = height;
    this.title = title;
    this.colors = colors;
    this.hideBorder = 0;
    this.hideTitle = 0;
    this.a11yTitle = "";
    this.a11yDesc = "";
  }

  // renderTitle() {
  //   const titleText = `
  //     <text
  //       x="0"
  //       y="0"
  //       class="header"
  //       data-testid="header"
  //     >${this.title}</text>
  //   `;

  //   return
  // }

  setHideBorder(value) {
    this.hideBorder = value;
  }

  setHideTitle(value) {
    this.hideTitle = value;
  }

  setCSS(value) {
    this.css = value;
  }

  render(body) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="450" height="165" viewBox="0 0 450 165">
        <style>
          .title {
            font-size: 18px;
            font-weight: 600;
            fill: #e7f216;
            font-family: 'Segoe UI', Ubuntu, Sans-Serif;
          }
          .stat {
            font-size: 14px;
            font-weight: 600;
            fill: #fff;
            font-family: 'Segoe UI', Ubuntu, Sans-Serif;
          }
        </style>

        <rect xmlns="http://www.w3.org/2000/svg" data-testid="card-bg" fill="#000" x="0.5" height="99%" rx="10" stroke="#000" width="449" stroke-opacity="0" />
        <!-- Title -->
        <g transform="translate(25, 35)">
          <text class="title" x="0" y="0">${this.title}</text>
        </g>
        ${body}
      </svg>`;
  }
}

module.exports = Card;
