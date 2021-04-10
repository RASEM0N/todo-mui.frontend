import React from 'react'
import { Note } from './Notes'
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
    makeStyles,
    Avatar,
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
        boxShadow: 'none',
        '&:hover': {
            boxShadow: ({ category }: { category: string }) => {
                const giveMeShadod = (color: string) =>
                    `0px 0px 12px 0px ${color}, 0px 3px 4px 0px ${color}`

                switch (category) {
                    case 'money':
                        return giveMeShadod('#FF3333')
                    case 'todos':
                        return giveMeShadod('#33CC66')
                    case 'reminders': {
                        return giveMeShadod('#3366FF')
                    }
                    case 'work':
                        return giveMeShadod('#9933CC')
                    default:
                        return undefined
                }
            },
        },
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
                    avatar={
                        <Avatar
                            src={
                                'https://data.whicdn.com/images/290802929/original.jpg'
                            }
                        />
                    }
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
