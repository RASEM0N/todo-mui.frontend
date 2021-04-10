import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

function useFetch<T>(someUrl: string) {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(null!)
    const [id, setId] = useState<number | undefined>(undefined)
    const [error, setError] = useState<any>(null)
    const [options, setOptins] = useState<object>({})

    const doFetch = useCallback((options = {}, id?: number) => {
        setOptins(options)
        if (id) setId(id)
        setLoading(true)
    }, [])

    useEffect(() => {
        if (!loading) return

        axios(`http://localhost:8000${someUrl}${id ? `/${id}` : ''}`, options)
            .then((response) => {
                setResponse(response.data)
                setLoading(false)
            })
            .catch((error) => {
                if (error.response?.data) setError(error.response.data)
                else setError({ errors: ['Server error'] })
            })
    }, [loading, someUrl, options, id])

    return { response, error, loading, doFetch }
}

export default useFetch
