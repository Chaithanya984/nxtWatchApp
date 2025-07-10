import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Cookies from 'js-cookie'

import Header from '../Header'

import {
  MainHomes,
  SideDiv,
  VideoCard,
  VideoThumb,
  CardDetails,
  ParaCard,
  ParaBox,
  BoxView,
  UlVideoBox,
  ParaCards,
  SideTodisp,
  ParaLI,
  VideoLIcar,
  ThumbDiv,
  LoaderLi,
  NovideoLi,
  NoImage,
  NovideoCont,
  ButtonRetry,
  ButtonDIVS,
  BackVideoItemTrend,
  TrendingCont,
  TrendingCircle,
} from './styledComponent'
import NxtwatchContext from '../../context/NxtwatchContext'
import SideNavBar from '../SideNavBar'

const statusCheck = {
  isLoad: 'LOADING',
  isSuccess: 'SUCCESS',
  isFail: 'FAILURE',
}

class Gaming extends Component {
  state = {
    checkingStatus: statusCheck.isLoad,
    gameArray: [],
  }

  componentDidMount() {
    this.getApi()
  }

  getDates = publishdate => {
    const addDate = new Date(publishdate)
    const dat = formatDistanceToNow(addDate)
    const splitDatevalue = dat.split(' ')
    const oneValue = splitDatevalue[1]
    const twoValue = splitDatevalue[2]

    const difference = `${oneValue} ${twoValue} ago`

    return difference
  }

  getApi = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const urls = `https://apis.ccbp.in/videos/gaming`
    const response = await fetch(urls, options)
    const datas = await response.json()
    console.log(datas)
    if (response.ok === true) {
      const MakeNew = datas.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        gameArray: MakeNew,
        checkingStatus: statusCheck.isSuccess,
      })
    } else {
      this.setState({checkingStatus: statusCheck.isFail})
    }
  }

  callAgain = () => {
    this.getApi()
  }

  ProcessThedata = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite, savedVideo} = value
        console.log(savedVideo, 'saves')
        const {gameArray} = this.state

        const getNxt = gameArray.map(each => (
          <Link key={each.id} to={`/videos/${each.id}`}>
            <VideoLIcar key={each.id}>
              <VideoCard>
                <ThumbDiv>
                  <VideoThumb src={each.thumbnailUrl} alt="video thumbnail" />
                </ThumbDiv>
                <CardDetails>
                  <ParaBox>
                    <ParaCards paraColor={isdarkOrWhite}>
                      {each.title}
                    </ParaCards>
                    <ParaCard paraColor={isdarkOrWhite}>{each.name}</ParaCard>
                    <BoxView>
                      <ParaLI>
                        <ParaCard paraColor={isdarkOrWhite}>
                          {each.viewCount} views
                        </ParaCard>
                      </ParaLI>
                    </BoxView>
                  </ParaBox>
                </CardDetails>
              </VideoCard>
            </VideoLIcar>
          </Link>
        ))
        return getNxt
      }}
    </NxtwatchContext.Consumer>
  )

  getLoading = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite} = value
        return (
          <LoaderLi>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isdarkOrWhite ? 'white' : 'black'}
                height="50"
                width="50"
              />
            </div>
          </LoaderLi>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  getFailure = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite} = value
        return (
          <NovideoLi>
            <NovideoCont>
              <NoImage
                src={
                  isdarkOrWhite
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <div>
                <h1>Oops! Something Went Wrong</h1>
                <p>
                  We are having some trouble to complete your request. Please
                  try again.
                </p>
                <ButtonDIVS>
                  <ButtonRetry type="button" onClick={this.callAgain}>
                    Retry
                  </ButtonRetry>
                </ButtonDIVS>
              </div>
            </NovideoCont>
          </NovideoLi>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  checkSwitchVideo = () => {
    const {checkingStatus} = this.state
    switch (checkingStatus) {
      case statusCheck.isLoad:
        return this.getLoading()
      case statusCheck.isSuccess:
        return this.ProcessThedata()
      default:
        return this.getFailure()
    }
  }

  render() {
    const readJwt = Cookies.get('jwt_token')

    if (readJwt === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isdarkOrWhite} = value

          return (
            <>
              <Header />
              <BackVideoItemTrend data-testid="gaming" outline={isdarkOrWhite}>
                <MainHomes>
                  <SideTodisp>
                    <SideNavBar />
                  </SideTodisp>
                  <SideDiv>
                    <TrendingCont>
                      <TrendingCircle>
                        <HiFire size={35} color="red" />
                      </TrendingCircle>
                      <h1>Gaming</h1>
                    </TrendingCont>
                    <UlVideoBox>{this.checkSwitchVideo()}</UlVideoBox>
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

export default Gaming
