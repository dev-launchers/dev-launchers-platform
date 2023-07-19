const theme = {
  colors: {
    NEUTRAL_1: "#1c1c1c", // dark
    ACCENT_1: "#ff7f0e", // orange
    ACCENT_2: "#ffab00", // yellow
    ACCENT_3: "#3a7ca5", // dark-blue
    ACCENT_4: "#81c3d7", // loght-blue
    ACCENT_5: "#ffc30f", // orange-yellow
    ACCENT_6: "#C5B1A0", // beige
    NEUTRAL_2: "#f0edee", // light
    
    NEUTRAL_3:"#59687B",
    NEUTRAL_4:"#C4C4C4",
    NEUTRAL_5:"#89969F",
    NEUTRAL_6:"#C3C0C0",
    // Dev Recruiters theme colors
    White: '#FFFFFF',
    Black: '#000000',
    BlackT60: 'rgba(0,0,0,0.6)',
    BlackT38: 'rgba(0,0,0,0.38)',

    BLUE_700: '#173242',

    AntiFlashWhite: '#F1F4F5',
    AntiFlashWhiteT40: 'rgba(241,244,245,0.4)',

    SilverSand: '#C4C4C4',
    SilverSandT20: 'rgba(196,196,196,0.2)',

    LightGray: '#D3D4D6',
    LightGrayT90: 'rgba(211, 212, 214, 0.9)',

    Cultured: '#F8F8F8',
    CulturedT87: 'rgba(248, 248, 248, 0.87)',

    Red: '#FF0000',
    RedT31: 'rgba(255,0,0,0.31)',

    AppleT48: 'rgba(102, 176, 75, 0.48)',

    OuterSpace: '#454D58',
    DarkElectricBlue: '#59687B',
    Crayola: '#30363E',
    Gray: '#7E8288',
    CoolGrey: '#89969F',
    Argent: '#C3C0C0',
    BlackCoral: '#5B6068',
    Platinum: '#E5E5E5',
    SonicSilver: '#6F747C',
    BrightGray: '#EDEDED',
    DavysGrey: '#4F5154',
  },
  fonts: {
    headline: 'Abel',
    normal: 'Nunito Sans',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
} as const;
type Theme = typeof theme;
export type { Theme };
export default theme;
