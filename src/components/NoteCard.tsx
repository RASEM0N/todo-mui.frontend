import React from 'react'
import { Note } from './Notes'
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
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

const NoteCard: React.FC<NoteProps> = ({
    title,
    details,
    category,
    id,
    handleDelete,
}) => {
    return (
        <div>
            <Card elevation={1}>
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
