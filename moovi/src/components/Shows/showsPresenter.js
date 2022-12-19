import React from "react";
import ShowsView from "./showsView";
import { optionsTrendingMovie } from "../../services/apiConfig";
import mockdata from './mockdata.json'

// Actually New Arrivals...
function Shows(){
    const option = optionsTrendingMovie
    const [data, setData] = React.useState([])
    const [error, setError] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true)
    
    React.useEffect(() => {
        const fetchData = async () => {
            const op = {
                method: option.method,
                headers: {
                    'X-RapidAPI-Key': option.apiKey,
                    'X-RapidAPI-Host': option.apiHost
                }
            }
            try {
                const response = await fetch(option.url, op)
                const json = await response.json()
                setData(json)
            } catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return <ShowsView data={mockdata} />
    //return (!isLoading)&&(data?<div>{data.message}</div>:<ShowsView data={data}/>)
}

export default Shows