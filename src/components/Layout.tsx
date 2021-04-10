import React from 'react'
import {
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    AppBar,
} from '@material-ui/core'
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import { format } from 'date-fns'

// Drawer:              https://material-ui.com/ru/components/drawers/#drawer
// Lists:               https://material-ui.com/ru/components/lists/#lists
// AppBar:              https://material-ui.com/components/app-bar/

const useStyles = makeStyles((theme) => ({
    page: {
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3),
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
    active: {
        background: '#f4f4f4',
    },
    title: {
        padding: theme.spacing(2),
    },
    appbar: {
        width: `calc(100% - 240px)`,
    },
    toolbar: theme.mixins.toolbar,
    tlbr: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}))

interface LayoutProps {
    children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItem = [
        {
            text: 'My notes',
            icon: <SubjectOutlined color={'action'} />,
            path: '/',
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutline color={'action'} />,
            path: '/create',
        },
    ]

    const handleClick = (path: string) => history.push(path)

    return (
        <div className={classes.root}>
            {/*app bar*/}
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.tlbr}>
                    <Typography variant={'h6'}>
                        Welcome to notes website {/*user*/}
                        Roman
                    </Typography>
                    <Typography variant={'body2'} color={'textSecondary'}>
                        {format(new Date(), 'dd-MM-yyyy ')}
                    </Typography>
                </Toolbar>
            </AppBar>

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
                    <Typography variant={'h5'} className={classes.title}>
                        Notes
                    </Typography>
                </div>

                {/*list / links*/}

                <List>
                    {menuItem.map((item) => {
                        return (
                            <ListItem
                                key={item.text}
                                button
                                onClick={() => handleClick(item.path)}
                                className={
                                    location.pathname === item.path
                                        ? classes.active
                                        : undefined
                                }
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar} />
                {children}
            </div>
        </div>
    )
}

export default Layout
