import React from 'react'
import AppFrame from './AppFrame'
import {BrowserRouter as Router} from 'react-router-dom'
export default {
    title: 'AppFrema Render',
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam dicta debitis id consequatur voluptas incidunt aut reprehenderit rem blanditiis laborum recusandae quaerat et, neque dolor cumque. Cum, deleniti facere.
        </AppFrame>
    </Router>
) 