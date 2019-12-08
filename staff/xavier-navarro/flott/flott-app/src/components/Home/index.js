import React, { useState, useEffect, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logic, { spots } from '../../logic'
import SpotsList from '../SpotsList'
import MyContext from '../ProviderContext'
// import Feedback from '../Feedback'

export default withRouter(function ({ history }) {
    const  [error, setError]  = useState()
    const  [spots, setSpot]  = useState()
    const { user } = useContext(MyContext)

    useEffect(() => {
        (async () => {
            const listSpots = await handleRetrieveSpots()
           setSpot(listSpots)
        })()
    }, [setSpot])
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