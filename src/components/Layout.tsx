import React from 'react'
import { makeStyles, Drawer, Typography } from '@material-ui/core'

// Drawer:              https://material-ui.com/ru/components/drawers/#drawer

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
    },
    drawer: {
        width: 240,
    },
    drawerPaper: {
        width: 240,
    },
    root: {
        display: 'flex',
    },
})

interface LayoutProps {
    children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/*app bar*/}

            {/*side bar*/}
            <Drawer
                className={classes.drawer}
                variant={'permanent'}
                anchor={'left'}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div>
                    <Typography variant={'h5'}>Notes</Typography>
                </div>
            </Drawer>

            <div className={classes.page}>{children}</div>
        </div>
    )
}

export default Layout
