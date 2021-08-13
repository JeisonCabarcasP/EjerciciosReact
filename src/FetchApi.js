import { useEffect, useState } from 'react'

export default function FechtApi(year) {
    console.log(year)
    const API = "https://jsonmock.hackerrank.com/api/movies?Year="
    const URL = `${API}${year}`
    const [api, setApi] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then((resp) => resp.json())
            .then((data) => {
                setApi(data)

                if (data.data.map((titulo) =>
                    titulo.Title).length === 0) {
                    console.log("no se encontro informacion")
                } else {
                    console.log(data.data.map((titulo) =>
                        titulo.Title))
                }
            })
    }, []);
    return api;
}
