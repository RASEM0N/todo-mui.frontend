import React from 'react'
import { Button, ButtonGroup, Typography } from '@material-ui/core'

export const Create: React.FC = () => {
    return (
        <div>
            <Typography
                variant={'h6'}
                gutterBottom
                color={'textSecondary'}
                component={'h2'}
            >
                Create a New Note
            </Typography>
            <Button type={'submit'} color={'default'}>
                Submit
            </Button>
            <Button type={'submit'} color={'secondary'} variant={'outlined'}>
                Submit
            </Button>
            <ButtonGroup color={'secondary'} variant={'contained'}>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}
