import React from 'react'
import { Note } from './Notes'
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
    makeStyles,
} from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'

// Cards:           https://material-ui.com/ru/components/cards/

interface NoteExtra {
    handleDelete: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: number
    ) => void
}
type NoteProps = Note & NoteExtra

const useStyles = makeStyles({
    test: {
        border: ({ category }: { category: string }) => {
            switch (category) {
                case 'money':
                    return '1px solid #FF3333'
                case 'todos':
                    return '1px solid #33CC66'
                case 'reminders': {
                    return '1px solid #3366FF'
                }
                case 'work':
                    return '1px solid #9933CC'
                default:
                    return undefined
            }
        },
        margin: 20,
    },
})

const NoteCard: React.FC<NoteProps> = ({
    title,
    details,
    category,
    id,
    handleDelete,
}) => {
    const classes = useStyles({ category })

    return (
        <div>
            <Card elevation={3} className={classes.test}>
                <CardHeader
                    action={
                        <IconButton onClick={(e) => handleDelete(e, id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={title}
                    subheader={category}
                />
                <CardContent>
                    <Typography variant={'body2'} color={'textSecondary'}>
                        {details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
