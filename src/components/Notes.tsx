import React, { useCallback, useEffect, useRef, useState } from 'react'
import useFetch from './hooks/useFetch'
import { Container, Grid, makeStyles } from '@material-ui/core'
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

const useStyles = makeStyles({
    note: {
        maxWidth: 850,
    },
})

export const Notes = React.memo(() => {
    const classes = useStyles()

    const contRef = useRef(window)
    const [cols, setCols] = useState<number>(3)

    const deleteF = useFetch('/notes')
    const getF = useFetch<DataNotes>('/notes')

    const getFetch = getF.doFetch
    const loading = deleteF.loading

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

    const handleResize = useCallback(() => {
        const width = contRef.current.innerWidth

        if (width > 1590) {
            if (cols !== 3) setCols(3)
            return
        }
        if (width > 1200) {
            if (cols !== 2) setCols(2)
            return
        }
        setCols(1)
        return
    }, [contRef])

    // первоначальный размер экрана
    useEffect(() => {
        const width = window.innerWidth
        const colums: number = width > 1590 ? 3 : width > 1570 ? 2 : 1
        setCols(colums)
    }, [])

    // запрос за notes
    useEffect(() => {
        if (!loading) getFetch()
    }, [getFetch, loading])

    // изменение экрана
    useEffect(() => {
        if (!getF.response) return

        contRef.current.addEventListener('resize', handleResize)

        return contRef.current.addEventListener('resize', handleResize)
    })

    return (
        <Container>
            <Masonry
                breakpointCols={cols}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {!getF.loading &&
                    getF.response &&
                    getF.response.map((item) => (
                        <Grid key={item.id} className={classes.note}>
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
})
