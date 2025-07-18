import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'


const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGH = '50px'
const COLUMN_FOOTER_HEIGH = '56px'


// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGH,
    columFooterHeight: COLUMN_FOOTER_HEIGH
  },
  colorSchemes: {
    light: {
      // palette: {
      //   primary: teal,
      //   secondary: deepOrange
      // }
    },
    dark: {
      // palette: {
      //   primary: cyan,
      //   secondary :orange
      // }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides:{
        body:{
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius : '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth : '0.5px',
          '&:hove' : { borderWidth : '0.5px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: '0.875rem' }
      }
    },
    MuiMuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset':{ borderWidth: '0.5px !important' },
          '&:hover fieldset':{ borderWidth: '1px !important' },
          '&.Mui-focused fieldset':{ borderWidth: '1px !important' }
        }
      }
    }
  }
  // ...other properties
})

export default theme