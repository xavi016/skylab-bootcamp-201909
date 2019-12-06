import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logic, { user } from '../../logic'
import MyContext from '../ProviderContext'
// import Feedback from '../Feedback'

export default withRouter(function ({ history }) {
    const  [error, setError]  = useState()

    return <div className="spots__action-bar">
                <div className="filter">
                    <button className="btn-filter">
                        <i className="fas fa-sliders-h"></i>
                    </button>
                </div>
                <form action="" method="get" className="search">
                    <input type="search" name="search-spot" className="input-search" placeholder="Search spot"/>
                    <button className="btn-search">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
})