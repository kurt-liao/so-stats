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

  // render(body) {
  //   return `
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       role="img"
  //       fill="none"
  //       width="${this.width}"
  //       height="${this.height}"
  //     >
  //       <title id="titleId">${this.a11yTitle}</title>
  //       <desc id="descId">${this.a11yDesc}</desc>
  //       <style>
  //         .header {
  //           font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
  //           fill: ${this.colors.titleColor};
  //           animation: fadeInAnimation 0.8s ease-in-out forwards;
  //         }
  //         @supports(-moz-appearance: auto) {
  //           /* Selector detects Firefox */
  //           .header { font-size: 15.5px; }
  //         }
  //         ${this.css}
  //       </style>

  //       <rect
  //         xmlns="http://www.w3.org/2000/svg"
  //         data-testid="card-bg"
  //         height="100%"
  //         rx="10"
  //         stroke="blue"
  //         width="100%"
  //         stroke-opacity="${this.hideBorder ? 0 : 1}"
  //         fill="${
  //           typeof this.colors.bgColor === "object"
  //             ? "url(#gradient)"
  //             : this.colors.bgColor
  //         }"
  //       >
  //       </rect>

  //       ${this.hideTitle ? "" : this.title}

  //       <g
  //         data-testid="main-card-body"
  //         transform="translate(0, ${
  //           this.hideTitle ? this.paddingX : this.paddingY + 20
  //         })"
  //       >
  //         ${body}
  //       </g>

  //     </svg>
  //   `;
  // }

  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="220" height="100">
	<rect xmlns="http://www.w3.org/2000/svg" data-testid="card-bg" height="100%" rx="10" stroke="blue" width="100%" fill="#fffefe" stroke-opacity="1"/>
  <rect transform="translate(15, 10)" width="80%" height="30%" stroke="hsl(28,31%,52%)" fill="rgb(243, 234, 226)" rx="6">    
  </rect>
  <text>TTT</text>
</svg>`;
  }
}

module.exports = Card;
