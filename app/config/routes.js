const React = require('react')
const Main = require('../components/Main')
const Home = require('../components/Home')
const Profile = require('../components/Profile')
const Router = require('react-router')
const Route = Router.Route
const IndexRoute = Router.IndexRoute

module.exports = (
    <Route path='/' component={Main}>
        <Route path='profile/:username' component={Profile} />
        <IndexRoute component={Home} />
    </Route>
)
