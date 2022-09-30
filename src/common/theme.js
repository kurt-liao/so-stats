const defaultTheme = {
  bgColor: "#000",
  titleColor: "#E7F216",
  textColor: "#FFF",
  badgeTextColor: "#000",
  borderColor: "#FFF",
};

const greeneryTheme = {
  bgColor: "#66C23B",
  titleColor: "#2B5C33",
  textColor: "#FB418C",
  badgeTextColor: "#F7300B",
  borderColor: "#FFF",
};

const forestTheme = {
  bgColor: "#179689",
  titleColor: "#E7A1DE",
  textColor: "#87E3C9",
  badgeTextColor: "#87E3C9",
  borderColor: "#FFF",
};

const humanSkinTheme = {
  bgColor: "#E8D4C2",
  titleColor: "#CEC411",
  textColor: "#37B9EF",
  badgeTextColor: "#8D72D6",
  borderColor: "#FFF",
};

const useTheme = (theme) => {
  switch (theme) {
    case "human-skin":
      return humanSkinTheme;
    case "greenery":
      return greeneryTheme;
    case "forest":
      return forestTheme;
    default:
      return defaultTheme;
  }
};

export { useTheme };
