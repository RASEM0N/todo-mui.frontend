import React from 'react'
import { Typography } from '@material-ui/core'

// https://material-ui.com/ru/components/typography/#typography

export const Create: React.FC = () => {
    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                Create a new note
            </Typography>
            <Typography color="secondary" noWrap>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur debitis delectus dolorem est, iure iusto molestias
                qui velit voluptates voluptatibus?
            </Typography>
        </div>
    )
}
