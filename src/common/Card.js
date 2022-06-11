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
  }

  setStyle(css) {
    this.css = css;
  }

  render(body) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="450" height="165" viewBox="0 0 450 165">
        <style>
          ${this.css}
          ${getAnimations()}
        </style>
        <rect xmlns="http://www.w3.org/2000/svg" data-testid="card-bg" fill="${
          this.bgColor
        }" x="0.5" height="99%" rx="10" stroke="${
      this.borderColor
    }" width="449" stroke-width="3" stroke-opacity="${
      this.hideBorder ? 0 : 1
    }" />
        <!-- Title -->
        ${
          !this.hideTitle
            ? `<g transform="translate(25, 35)">
                <text class="title" x="0" y="0">${this.title}</text>
              </g>`
            : ""
        }
        ${body}
      </svg>`;
  }
}

module.exports = Card;
