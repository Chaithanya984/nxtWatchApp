import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import NxtwatchContext from '../../context/NxtwatchContext'

import SideNavBar from '../SideNavBar'

import Header from '../Header'

import {
  MainHomes,
  SideTodisp,
  SideDiv,
  LoaderLi,
  NovideoLi,
  NovideoCont,
  NoImage,
  ButtonDIVS,
  ButtonRetry,
  CardDetails,
  VideoProfile,
  ParaBox,
  ParaCards,
  ParaCard,
  BoxView,
  ParaLI,
  DotLists,
} from '../Home/styledComponent'

import {
  TrendingCont,
  TrendingCircle,
  VideoLIcardSingle,
  VideoCardsingle,
  VideoThumbsingle,
  ThumbDivsingle,
  UlPerticularVideoBoxTrend,
  BackVideoItemTrend,
} from './styledComponent'

const statusTrending = {
  isSuccess: 'SUCCESS',
  isFailure: 'FAILURE',
  isLoading: 'LOADING',
}

class Trending extends Component {
  state = {presentStatus: statusTrending.isLoading, trendArray: []}

  componentDidMount() {
    this.getApis()
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

  getApis = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const urls = `https://apis.ccbp.in/videos/trending`
    const response = await fetch(urls, options)
    const datas = await response.json()

    console.log(datas)

    if (response.ok === true) {
      const MakeNew = datas.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        publishedAt: this.getDates(each.published_at),
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
      }))

      this.setState({
        trendArray: MakeNew,
        presentStatus: statusTrending.isSuccess,
      })
    } else {
      this.setState({presentStatus: statusTrending.isFailure})
    }
  }

  callAgains = () => {
    this.getApis()
  }

  ProcessThedatas = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite, savedVideo} = value
        console.log(savedVideo)
        const {trendArray} = this.state

        const getNxt = trendArray.map(each => (
          <Link key={each.id} to={`/videos/${each.id}`}>
            <VideoLIcardSingle key={each.id}>
              <VideoCardsingle>
                <ThumbDivsingle>
                  <VideoThumbsingle
                    src={each.thumbnailUrl}
                    alt="video thumbnail"
                  />
                </ThumbDivsingle>
                <CardDetails>
                  <VideoProfile src={each.profileImageUrl} alt="channel logo" />
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
                      <DotLists paraDotCol={isdarkOrWhite}>
                        <ParaCard paraColor={isdarkOrWhite}>
                          {each.publishedAt}
                        </ParaCard>
                      </DotLists>
                    </BoxView>
                  </ParaBox>
                </CardDetails>
              </VideoCardsingle>
            </VideoLIcardSingle>
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
                  <ButtonRetry type="button" onClick={this.callAgains}>
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
    const {presentStatus} = this.state
    switch (presentStatus) {
      case statusTrending.isLoading:
        return this.getLoading()
      case statusTrending.isSuccess:
        return this.ProcessThedatas()
      default:
        return this.getFailure()
    }
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isdarkOrWhite} = value
          return (
            <>
              <Header />
              <BackVideoItemTrend
                data-testid="trending"
                outline={isdarkOrWhite}
              >
                <MainHomes>
                  <SideTodisp>
                    <SideNavBar />
                  </SideTodisp>
                  <SideDiv>
                    <TrendingCont>
                      <TrendingCircle>
                        <HiFire size={35} color="red" />
                      </TrendingCircle>
                      <h1>Trending</h1>
                    </TrendingCont>
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

export default Trending
