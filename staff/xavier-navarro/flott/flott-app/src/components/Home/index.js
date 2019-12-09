import React, { useState, useEffect, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logic, { spots } from '../../logic'
import SpotsList from '../SpotsList'
import MyContext from '../ProviderContext'
// import Feedback from '../Feedback'

export default withRouter(function ({ history }) {
    const  [error, setError]  = useState()
    
    const { user, spots, setSpots, refresh, setRefresh } = useContext(MyContext)

    useEffect(() => {
        (async () => {
            debugger
            const listSpots = await handleRetrieveSpots()
            setSpots(listSpots)
        })()
    }, [setSpots, refresh, setRefresh])
    async function handleRetrieveSpots(){
        const results = await logic.spots.listSpots()
        return results
    }
    return <section className="spots__container spots">

                <SpotsList spots={spots}/>
                { user && <button className="btn-add">
                    <i className="fas fa-plus"></i>
                </button>}
                {/* {error && <Feedback message={error} />} */}
            </section>
})