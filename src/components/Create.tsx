import React from 'react'
import { Button, Typography } from '@material-ui/core'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'

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
            {/*icons*/}
            <br />
            <AcUnitOutlinedIcon />
            <AcUnitOutlinedIcon color={'secondary'} fontSize={'large'} />
            <AcUnitOutlinedIcon color={'secondary'} fontSize={'small'} />
            <AcUnitOutlinedIcon color={'action'} fontSize={'small'} />
            <AcUnitOutlinedIcon color={'error'} fontSize={'small'} />
            <AcUnitOutlinedIcon color={'disabled'} fontSize={'small'} />
        </div>
    )
}
