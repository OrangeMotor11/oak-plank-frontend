module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      baseWhite: '#FBF8F4',
      baseWhiteDarker: '#ede1cf',
      baseBlack: '#10171D',
      baseBlackHalfOpacity: '#10171e80',
      primary: '#F28744',
      primaryBrighter: '#f9c5a4',
      secondary: '#532F17',
      secondaryBrighter: '#a45d2d',
      accentInfo: '#8FDDDF',
      accentInfoBrighter: '#b7e9eb',
      accentSuccess: '#7BB35C',
      accentSuccessBrighter: '#b3d3a1',
      accentWarning: '#FFC53A',
      accentWarningBrighter: '#ffe29e',
      accentDanger: '#CF1020',
      accentDangerBrighter: '#f25461',
    },
    extend: {},
  },
  plugins: [],
}
