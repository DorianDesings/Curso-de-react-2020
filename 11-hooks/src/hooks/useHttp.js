import { useState, useEffect } from 'react'

export const useHttp = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
            setIsLoading(false)
        }

        getData()
    }, [url]);

    return [data, isLoading]
}