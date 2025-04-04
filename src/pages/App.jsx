import React, { useEffect } from 'react'
import { getSkipsByLocation } from '../apis/skips'
import { useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSkipsByLocation())
    }, [])

    return (
        <div>App</div>
    )
}

export default App