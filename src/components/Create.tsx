import React from 'react'
import { Typography } from '@material-ui/core'

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
        </div>
    )
}
