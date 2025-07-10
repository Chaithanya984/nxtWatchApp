import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import VideoItemDetails from './components/VideoItemDetails'

import NxtwatchContext from './context/NxtwatchContext'

import Trending from './components/Trending'

import SavedVideos from './components/SavedVideos'

import Gaming from './components/Gaming'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isdarkOrWhite: false, SavedsVideos: [], activeRole: 'HOME'}

  changesColor = () => {
    const {isdarkOrWhite} = this.state

    this.setState({isdarkOrWhite: !isdarkOrWhite})
  }

  AddToSave = nwlist => {
    this.setState(prevState => {
      const {id} = nwlist
      const filterOld = prevState.SavedsVideos.filter(each => each.id === id)
      if (filterOld.length === 0) {
        const oldList = [...prevState.SavedsVideos, nwlist]
        return {SavedsVideos: oldList}
      }
      const oldList = [...prevState.SavedsVideos]
      return {SavedsVideos: oldList}
    })
  }

  AddToRemove = nwlist => {
    const {SavedsVideos} = this.state
    const {id} = nwlist
    const filternew = SavedsVideos.filter(each => each.id !== id)
    this.setState({SavedsVideos: filternew})
  }

  ChangeRole = roles => {
    this.setState({activeRole: roles})
  }

  render() {
    const {isdarkOrWhite, SavedsVideos, activeRole} = this.state
    return (
      <NxtwatchContext.Provider
        value={{
          changebackground: this.changesColor,
          isdarkOrWhite,
          AddVideos: this.AddToSave,
          savedVideo: SavedsVideos,
          Removes: this.AddToRemove,
          ActiveRole: activeRole,
          ChangeRoles: this.ChangeRole,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
