import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import { Container, Paper, Grid } from '@material-ui/core'

// Grid:            https://material-ui.com/ru/components/grid/#grid

export interface Note {
    title: string
    details: string
    category: string
    id: number
}
export type DataNotes = Array<Note>

export const Notes: React.FC = () => {
    const { doFetch, loading, response } = useFetch<DataNotes>('/notes')

    useEffect(() => {
        doFetch()
    }, [doFetch])

    return (
        <Container>
            <Grid container>
                {!loading &&
                    response &&
                    response.map((item) => (
                        <Grid key={item.id} xs={12} md={6} lg={4}>
                            <Paper>{item.title}</Paper>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    )
}
