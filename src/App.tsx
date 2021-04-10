import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './components/routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'
import Layout from './components/Layout'

// Default Theme:       https://material-ui.com/ru/customization/default-theme/
// ThemeProvider:       https://material-ui.com/ru/styles/api/#themeprovider
// createMuiTheme:      https://material-ui.com/ru/customization/theming/#createmuitheme-options-args-theme

// также можно добавить и свои,
// а не просто переопределить
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: amber,
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
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
