import React, { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'

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
            {!loading &&
                response &&
                response.map((item) => <p key={item.id}>{item.title}</p>)}
        </div>
    )
}
