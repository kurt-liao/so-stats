const Card = require('../common/Card')
const { getRandomTheme, numFormatter } = require('../common/utils')
const { getStyle } = require('../common/styles')
const { useTheme } = require('../common/theme')
const { default: I18n } = require('../common/i18n')
const { statCardLocales } = require('../translation')

const renderStatsCard = (
  stats = {},
  { random = false, theme = '', hide = [], locale },
) => {
  const hideBorder = hide.includes('border')
  const hideBadges = hide.includes('badges')
  const hideTitle = hide.includes('title')
  const hideLogo = hide.includes('logo')

  const options = {
    hideBorder,
    hideBadges,
    hideTitle,
    hideLogo,
  }

  const { bgColor, titleColor, textColor, badgeTextColor } = useTheme(theme)

  options.bgColor = bgColor
  options.titleColor = titleColor
  options.textColor = textColor
  options.badgeTextColor = badgeTextColor

  // If set random, overwrite the theme colors.
  if (random) {
    const { bgColor, titleColor, textColor, badgeTextColor } = getRandomTheme()

    options.bgColor = bgColor
    options.titleColor = titleColor
    options.textColor = textColor
    options.badgeTextColor = badgeTextColor
  }

  const { name, badges = {}, reputation, questionCount, answerCount } = stats

  const i18n = new I18n({
    locale,
    translations: statCardLocales({ name }),
  })

  const renderBadges = (badges) => {
    badges.gold = numFormatter(badges?.gold, 1)
    badges.silver = numFormatter(badges?.silver, 1)
    badges.bronze = numFormatter(badges?.bronze, 1)

    return `
        <svg height="24" width="150" x="50%" y="-5">
          <rect width="150" height="24" stroke="hsl(45,100%,47%)" fill="hsl(48,100%,91%)" rx="6">    
          </rect>
          <text class="badge-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.gold || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(45,100%,47%)" />
        </svg>
        <svg height="24" width="150" x="50%" y="25">
          <rect width="150" height="24" stroke="hsl(210, 3%, 61%)" fill="hsl(0, 0%, 91%)" rx="6">    
          </rect>
          <text class="badge-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.silver || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(210, 3%, 61%)" />
        </svg>
        <svg height="24" width="150" x="50%" y="55">
          <rect width="150" height="24" stroke="hsl(28, 31%, 52%)" fill="rgb(243, 234, 226)" rx="6">
          </rect>
          <text class="badge-text" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${
            badges.bronze || 0
          }</text>
          <circle cx="10" cy="12" r="4" fill="hsl(28, 31%, 52%)" />
        </svg>`
  }

  const renderStats = (reputation, questionCount, answerCount) => {
    reputation = numFormatter(reputation, 1)
    questionCount = numFormatter(questionCount, 1)
    answerCount = numFormatter(answerCount, 1)

    return `
      <svg x="0" y="0">
        <g transform="translate(0, 0)">
          <text x="0" y="10" class="stat">${i18n.t('statcard.reputation')} : </text>
          <text x="100" y="10" class="stat-value">${reputation || 0}</text>
        </g>
        <g transform="translate(0, 30)">
          <text x="-0" y="10" class="stat">${i18n.t('statcard.question')} : </text>
          <text x="100" y="10" class="stat-value">${questionCount || 0}</text>
        </g>
        <g transform="translate(0, 60)">
          <text x="0" y="10" class="stat">${i18n.t('statcard.answer')} : </text>
          <text x="100" y="10" class="stat-value">${answerCount || 0}</text>
        </g>
      </svg>`
  }

  const css = getStyle(options)

  const card = new Card(
    {
      title: i18n.t('statcard.title'),
    },
    options,
  )

  card.setStyle(css)

  return card.render(
    `<g transform="translate(25, ${hideTitle ? 30 : 70})">
      ${renderStats(reputation, questionCount, answerCount)}
      ${hideBadges ? null : renderBadges(badges)}
     </g>
    `,
  )
}

module.exports = renderStatsCard
