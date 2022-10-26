const defaultTheme = {
  bgColor: '#000',
  titleColor: '#E7F216',
  textColor: '#FFF',
  badgeTextColor: '#000',
}

const greeneryTheme = {
  bgColor: '#66C23B',
  titleColor: '#2B5C33',
  textColor: '#FB418C',
  badgeTextColor: '#F7300B',
}

const forestTheme = {
  bgColor: '#179689',
  titleColor: '#E7A1DE',
  textColor: '#87E3C9',
  badgeTextColor: '#87E3C9',
}

const azureTheme = {
  bgColor: '#78C5DC',
  titleColor: '#D8F4EF',
  textColor: '#C5F7EB',
  badgeTextColor: '#F5B9AB',
}

const maltTheme = {
  bgColor: '#E8D4C2',
  titleColor: '#CEC411',
  textColor: '#37B9EF',
  badgeTextColor: '#8D72D6',
}

const witchTheme = {
  bgColor: '#426394',
  titleColor: '#8F037A',
  textColor: '#D075A8',
  badgeTextColor: '#ED1C29',
}

const useTheme = (theme) => {
  switch (theme) {
    case 'malt':
      return maltTheme
    case 'greenery':
      return greeneryTheme
    case 'forest':
      return forestTheme
    case 'azure':
      return azureTheme
    case 'witch':
      return witchTheme
    default:
      return defaultTheme
  }
}

export { useTheme }
