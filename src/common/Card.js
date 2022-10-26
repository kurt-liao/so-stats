const { getAnimations } = require('../common/styles')
const getIcon = require('../common/icons')

class Card {
  constructor(
    { width = 385, height = 170, title = '' },
    {
      bgColor,
      titleColor,
      textColor,
      badgeTextColor,
      hideBorder,
      hideTitle,
      hideLogo,
      hideBadges,
    },
  ) {
    this.width = width
    this.height = height
    this.title = title
    this.css = ''

    this.bgColor = bgColor
    this.titleColor = titleColor
    this.textColor = textColor
    this.badgeTextColor = badgeTextColor
    this.hideBorder = hideBorder
    this.hideTitle = hideTitle
    this.hideLogo = hideLogo
    this.hideBadges = hideBadges
  }

  setStyle(css) {
    this.css = css
  }

  isLongTitle() {
    return this.title && this.title.length > 36
  }

  calcLongTitleWidth() {
    return 65 + this.title.length * 10
  }

  getHeight() {
    return this.hideTitle ? 120 : 170
  }

  getWidth() {
    return !this.hideTitle && this.isLongTitle()
      ? this.calcLongTitleWidth()
      : this.hideTitle && this.hideBadges
        ? 300
        : 385
  }

  render(body) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${this.getWidth()}" height="${this.getHeight()}" viewBox="${`0 0 ${this.getWidth()} ${this.getHeight()}`}">
        <style>
          ${this.css}
          ${getAnimations()}
        </style>
        <rect xmlns="http://www.w3.org/2000/svg" data-testid="card-bg" fill="${
          this.bgColor
        }" x="0.5" height="99%" rx="10" width="${this.getWidth()}" stroke-width="3" stroke-opacity="${
      this.hideBorder ? 0 : 1
    }" />
        <!-- Title -->
        ${
          !this.hideTitle
            ? `<g transform="translate(25, 42)">
                ${
                  !this.hideLogo
                    ? `<svg x="-6" y="-26"> ${getIcon('so')}</svg>`
                    : ''
                }
                <text class="title" x="${this.hideLogo ? '' : 40}" y="0">${
                this.title
              }</text>
              </g>`
            : ''
        }
        ${body}
      </svg>`
  }
}

module.exports = Card
