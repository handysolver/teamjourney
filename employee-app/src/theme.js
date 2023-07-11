// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: '"Open Sans", sans-serif',
},
colors: {
    brand: {
        bg: '#9747FF',
        text: '#fff',
        card: '#0A99FF',
    },
},
sizes: {
    xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
        bg: '#9747FF'
    },
}
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme