import React from 'react'
import {
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'

// Drawer:              https://material-ui.com/ru/components/drawers/#drawer
// Lists:               https://material-ui.com/ru/components/lists/#lists

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

            <div className={classes.page}>{children}</div>
        </div>
    )
}

export default Layout
