const { getAnimations } = require("../common/styles");

class Card {
  constructor(
    { width = 100, height = 100, title = "" },
    {
      bgColor,
      iconColor,
      titleColor,
      textColor,
      badgeTextColor,
      borderColor,
      hideBorder,
      hideTitle,
      hideLogo,
    },
  ) {
    this.width = width;
    this.height = height;
    this.title = title;
    this.css = "";

    this.bgColor = bgColor;
    this.iconColor = iconColor;
    this.titleColor = titleColor;
    this.textColor = textColor;
    this.badgeTextColor = badgeTextColor;
    this.borderColor = borderColor;
    this.hideBorder = hideBorder;
    this.hideTitle = hideTitle;
    this.hideLogo = hideLogo;
  }

  setStyle(css) {
    this.css = css;
  }

  isLongTitle() {
    return this.title && this.title.length > 36;
  }

  calcLongTitleWidth() {
    if (!this.title) return 450;
    return 75 + this.title.length * 10;
  }

  render(body) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${
        this.isLongTitle() ? this.calcLongTitleWidth() : 450
      }" height="172" viewBox="${
      this.isLongTitle()
        ? `0 0 ${this.calcLongTitleWidth()} 170`
        : "0 0 450 170"
    }">
        <style>
          ${this.css}
          ${getAnimations()}
        </style>
        <rect xmlns="http://www.w3.org/2000/svg" data-testid="card-bg" fill="${
          this.bgColor
        }" x="0.5" height="99%" rx="10" stroke="${this.borderColor}" width="${
      this.isLongTitle() ? this.calcLongTitleWidth() - 1 : 450
    }" stroke-width="3" stroke-opacity="${this.hideBorder ? 0 : 1}" />
        <!-- Title -->
        ${
          !this.hideTitle
            ? `<g transform="translate(25, 42)">
                ${
                  !this.hideLogo
                    ? `<image href="/logo.png" width="40" heigth="40" x="-6" y="-30"/>`
                    : ""
                }
                <text class="title" x="${this.hideLogo ? "" : 50}" y="0">${
                this.title
              }</text>
              </g>`
            : ""
        }
        ${body}
      </svg>`;
  }
}

module.exports = Card;
