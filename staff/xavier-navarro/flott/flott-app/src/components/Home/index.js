import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logic, { user } from '../../logic'
import MyContext from '../ProviderContext'
// import Feedback from '../Feedback'

export default withRouter(function ({ history }) {
    const  [error, setError]  = useState()
    async function handleRetrieveSpots(){
        const results = retrieveSpots()
    }
    return <section className="spots__container spots">
                <ul className="spots__results results">
                    {results.map(result => <li className="results__item card" key={result.id}><Spot result={result} /></li>)}
                </ul>

                <button className="btn-add">
                    <i className="fas fa-plus"></i>
                </button>
                {/* {error && <Feedback message={error} />} */}
            </section>
})