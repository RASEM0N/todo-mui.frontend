import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './components/routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

// Default Theme:       https://material-ui.com/ru/customization/default-theme/
// ThemeProvider:       https://material-ui.com/ru/styles/api/#themeprovider
// createMuiTheme:      https://material-ui.com/ru/customization/theming/#createmuitheme-options-args-theme

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: purple,
    },
    typography: {
        fontFamily: 'Montserrat',
    },
})

const App: React.FC = () => {
    return (
        // провайдер, как и с Context-ами
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
