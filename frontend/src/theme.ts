export interface Theme {
  fontFamily: {
    title: string
    main: string
  }
  fontWeight: {
    normal: number
    semibold: number
  }
  padding: {
    tiny: number
    small: number 
    medium: number
    large: number
  }
}

const theme: Theme = {
  fontFamily: {
    title: 'Vollkorn SC',
    main: '',
  },
  fontWeight: {
    normal: 400,
    semibold: 600,
  },
  padding: {
    tiny: 4,
    small: 8,
    medium: 12,
    large: 16,
  },
}

export default theme
