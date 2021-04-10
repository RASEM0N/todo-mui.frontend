import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import useFetch from './hooks/useFetch'

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
        <div>
            <Grid container>
                <Grid md={3} sm={6} xs={12} item>
                    <Paper>1</Paper>
                </Grid>
                <Grid md={3} sm={6} xs={12} item>
                    <Paper>2</Paper>
                </Grid>
                <Grid md={3} sm={6} xs={12} item>
                    <Paper>3</Paper>
                </Grid>
                <Grid md={3} sm={6} xs={12} item>
                    <Paper>4</Paper>
                </Grid>
            </Grid>

            {!loading &&
                response &&
                response.map((item) => <p key={item.id}>{item.title}</p>)}
        </div>
    )
}
