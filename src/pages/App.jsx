import React, { useEffect } from 'react'
import { getSkipsByLocation } from '../apis/skips'
import { useDispatch } from 'react-redux'
import Base from './Base'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSkipsByLocation({ postcode: "NR32", area: "Lowestoft" }))
    }, [])

    return (
        <Base>
            <div>App</div>
        </Base>
    )
}

export default App