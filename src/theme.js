const breakpoints = ['1024px', '1280px', '1536px'];

const defaultTheme = {
  breakpoints,
  fontSizes: ['12px', '14px', '16px', '18px', '26px', '42px'],
  colors: {
    primary: '#958CEF',
    primaryActive: '#695CE9',
    bodyBg: '#F4F5F9',
    bodyColor: '#7c7b85',
    contentBg: '#FFF',
    contentButtonBg: '#f9fafe',
    contentBorder: '#eff1fa',
    cardHeading: '#424757',
    buttonText: '#6868a5',
    inputText: '#9595c0',
    infoText: '#757595',
    inputLabel: '#b1b3d9',
    toolbarBg: '#272635',
    toolbarButtonText: '#babac2',
    toolbarButtonBg: '#3a384a',
    toolbarCardBg: '#323041',
    toolbarInputText: '#8a8a95',
    warningBg: '#fffaed',
    yellow: '#FFCF07',
    red: '#F0416C',
    green: '#29CC7D',
    colorBgRed: '#FFEBF6',
    colorBgGreen: '#E6FFF3',
    colorBgYellow: '#FFF8EB',
    blue: '#397BE5',
    success: '#31d9a0',
    successBorder: '#abf9e0',
    inputIcon: '#C5CEE3',
    topbarIcon: '#9799CB',
    starEmpty: '#DADBF4',
    star: '#F8D338',
  },
  space: [0, 8, 16, 20, 28, 48],
  fonts: {
    body: 'Metropolis, sans-serif',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.16,
    heading: 1.22,
    cardContent: 1.625,
  },
  radii: {
    small: 10,
    default: 20,
    big: 30,
    circle: '50%',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: `0 0 30px`,
    header: '0 10px 30px rgba(151,153,203,0.23)',
  },
  variants: {
    profileImage: {},
    popper: {
      borderRadius: 'small',
      p: 22,
      zIndex: 99,
    },
    card: {
      borderRadius: 'default',
      backgroundColor: 'contentBg',
      padding: 4,
    },
  },
  text: {
    formError: {
      color: 'red',
      fontSize: 1,
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
  },
};

export default defaultTheme;