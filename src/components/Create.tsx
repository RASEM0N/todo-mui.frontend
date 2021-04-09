import React from 'react'
import { Button, Typography } from '@material-ui/core'

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
            <Button
                type={'submit'}
                color={'secondary'}
                variant={'contained'}
                onClick={() => console.log('You click med')}
            >
                Submit
            </Button>
        </div>
    )
}
