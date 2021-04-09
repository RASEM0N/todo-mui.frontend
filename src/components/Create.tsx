import React from 'react'
import { Button, Container, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export const Create: React.FC = () => {
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
                color={'secondary'}
                variant={'contained'}
                onClick={() => console.log('You click med')}
                startIcon={<SendIcon />}
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
        </Container>
    )
}
