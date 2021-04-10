import React, { useEffect } from 'react'
import useFetch from './hooks/useFetch'
import { Container, Grid } from '@material-ui/core'
import NoteCard from './NoteCard'

// Grid:            https://material-ui.com/ru/components/grid/#grid

export interface Note {
    title: string
    details: string
    category: string
    id: number
}
export type DataNotes = Array<Note>

export const Notes: React.FC = () => {
    const deleteF = useFetch('/notes')
    const getF = useFetch<DataNotes>('/notes')

    const getFetch = getF.doFetch
    const loading = deleteF.loading

    useEffect(() => {
        if (!loading) getFetch()
    }, [getFetch, loading])

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: number
    ) => {
        deleteF.doFetch(
            {
                method: 'DELETE',
            },
            id
        )
    }

    return (
        <Container>
            <Grid container spacing={3}>
                {!getF.loading &&
                    getF.response &&
                    getF.response.map((item) => (
                        <Grid key={item.id} xs={12} md={6} lg={4}>
                            <NoteCard
                                title={item.title}
                                details={item.details}
                                category={item.category}
                                id={item.id}
                                handleDelete={handleDelete}
                            />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    )
}
