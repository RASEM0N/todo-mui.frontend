import React, { useEffect, useRef } from 'react'
import useFetch from './hooks/useFetch'
import { Container, Grid } from '@material-ui/core'
import NoteCard from './NoteCard'
import Masonry from 'react-masonry-css'

// Grid:            https://material-ui.com/ru/components/grid/#grid
// Masonry:         https://github.com/paulcollett/react-masonry-css

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
        if (loading === null) getFetch()
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
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {!getF.loading &&
                    getF.response &&
                    getF.response.map((item) => (
                        <Grid key={item.id}>
                            <NoteCard
                                title={item.title}
                                details={item.details}
                                category={item.category}
                                id={item.id}
                                handleDelete={handleDelete}
                            />
                        </Grid>
                    ))}
            </Masonry>
        </Container>
    )
}
