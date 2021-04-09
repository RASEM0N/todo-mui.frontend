import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Create } from './Create'
import { Notes } from './Notes'

export const Routes: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Notes />
            </Route>
            <Route path="/create">
                <Create />
            </Route>
        </Switch>
    )
}
