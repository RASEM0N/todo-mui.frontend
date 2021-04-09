import React from 'react'
import { Button, Container, Typography, makeStyles } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'blue',
        },
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20,
    },
})

export const Create: React.FC = () => {
    const classes = useStyles()

    return (
        <Container>
            <Typography
                className={classes.title}
                variant={'h6'}
                gutterBottom
                color={'textSecondary'}
                component={'h2'}
            >
                Create a New Note
            </Typography>
            <Button
                className={classes.btn}
                type={'submit'}
                color={'secondary'}
                variant={'contained'}
                onClick={() => console.log('You click med')}
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
        </Container>
    )
}
