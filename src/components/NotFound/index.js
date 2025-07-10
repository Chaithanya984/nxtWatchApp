import {Component} from 'react'

import NxtwatchContext from '../../context/NxtwatchContext'

import SideNavBar from '../SideNavBar'

import Header from '../Header'

import {
  MainHomes,
  SideTodisp,
  SideDiv,
  NovideoLi,
  NovideoCont,
  NoImage,
} from '../Home/styledComponent'

import {UlPerticularVideoBoxTrend, BackVideoItemTrend} from './styledComponent'

class NotFound extends Component {
  ProcessThedatas = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite} = value
        const getNxt = (
          <NovideoLi>
            <NovideoCont>
              <NoImage
                src={
                  isdarkOrWhite
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <div>
                <h1>Page Not Found</h1>
                <p>we are sorry, the page you requested could not be found.</p>
              </div>
            </NovideoCont>
          </NovideoLi>
        )
        return getNxt
      }}
    </NxtwatchContext.Consumer>
  )

  checkSwitchVideo = () => this.ProcessThedatas()

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isdarkOrWhite} = value
          return (
            <>
              <Header />
              <BackVideoItemTrend
                data-testid="notfound"
                outline={isdarkOrWhite}
              >
                <MainHomes>
                  <SideTodisp>
                    <SideNavBar />
                  </SideTodisp>
                  <SideDiv>
                    <UlPerticularVideoBoxTrend>
                      {this.checkSwitchVideo()}
                    </UlPerticularVideoBoxTrend>
                  </SideDiv>
                </MainHomes>
              </BackVideoItemTrend>
            </>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default NotFound
