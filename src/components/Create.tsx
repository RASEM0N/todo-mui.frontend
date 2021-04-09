import React from 'react'
import { Button, Container, Typography, makeStyles } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

// Typography:          https://material-ui.com/ru/components/typography/#typography
// Button:              https://material-ui.com/ru/components/buttons/#button
// makeStyles [hook]:   https://material-ui.com/ru/styles/api/#makestyles-styles-options-hook

const useStyles = makeStyles({})

export const Create: React.FC = () => {
    const classes = useStyles()

    return (
        <Container>
            <Typography
                variant={'h6'}
                gutterBottom
                color={'textSecondary'}
                component={'h2'}
            >
                Create a New Note
            </Typography>
            <Button
                type={'submit'}
                color={'primary'}
                variant={'contained'}
                onClick={() => console.log('You click med')}
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
        </Container>
    )
}
