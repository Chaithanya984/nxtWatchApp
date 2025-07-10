import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import NxtwatchContext from '../../context/NxtwatchContext'

import {
  MainHomes,
  SideTodisp,
  SideDiv,
  LoaderLi,
  BoxView,
  ParaLI,
  ParaCard,
  DotLists,
} from '../Home/styledComponent'

import {
  UlPerticularVideoBox,
  VideoPlayingCards,
  YoutubeContainer,
  UrlCards,
  ThirdIconsCont,
  BothtextAndIcons,
  TitleHead,
  ParaName,
  ChannelDetails,
  VideoProfiles,
  ParaSub,
  ParaDesc,
  BackVideoItem,
  ButtonSocials,
} from './styledComponent'

import Header from '../Header'
import SideNavBar from '../SideNavBar'

const statusChecking = {
  isLoaded: 'LOADING',
  isFailures: 'FAILURE',
  isSuccess: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    likeColor: false,
    dislikeColor: false,
    newArrays: {},

    presentStatus: statusChecking.isLoaded,
  }

  componentDidMount() {
    this.callApiWithId()
  }

  changeLikeOptions = () => {
    this.setState(prevState => ({
      likeColor: !prevState.likeColor,
      dislikeColor: false,
    }))
  }

  changeDisLikeOptions = () => {
    this.setState(prevState => ({
      likeColor: false,
      dislikeColor: !prevState.dislikeColor,
    }))
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

  callApiWithId = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const newUrls = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(newUrls, options)
    const newRespon = await response.json()

    if (response.ok === true) {
      const formNewObj = {
        id: newRespon.video_details.id,
        name: newRespon.video_details.channel.name,
        profileImageUrl: newRespon.video_details.channel.profile_image_url,
        subscriberCount: newRespon.video_details.channel.subscriber_count,
        videoUrl: newRespon.video_details.video_url,
        thumbnailUrl: newRespon.video_details.thumbnail_url,
        viewCount: newRespon.video_details.view_count,
        publishedAt: this.getDates(newRespon.video_details.published_at),
        description: newRespon.video_details.description,
        title: newRespon.video_details.title,
      }
      this.setState({
        presentStatus: statusChecking.isSuccess,
        newArrays: formNewObj,
      })
    } else {
      this.setState({presentStatus: statusChecking.isFailures})
    }
  }

  callAgain = () => {
    this.callApiWithId()
  }

  changeLikeOptions = () => {
    this.setState(prevState => ({
      likeColor: !prevState.likeColor,
      dislikeColor: false,
    }))
  }

  changeDisLikeOptions = () => {
    this.setState(prevState => ({
      likeColor: false,
      dislikeColor: !prevState.dislikeColor,
    }))
  }

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
          <li>
            <div>
              <img
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
                <button type="button" onClick={this.callAgain}>
                  Retry
                </button>
              </div>
            </div>
          </li>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  ProcessingThedata = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite, AddVideos, savedVideo, Removes} = value
        const {newArrays, likeColor, dislikeColor} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          profileImageUrl,
          name,
          description,
          subscriberCount,
          id,
        } = newArrays
        const stores = savedVideo.filter(each => each.id === id)

        const saveVid = stores.length !== 0

        const saveVideos = () => {
          AddVideos(newArrays)
        }

        const removeVideos = () => {
          Removes(newArrays)
        }

        return (
          <VideoPlayingCards>
            <YoutubeContainer>
              <UrlCards>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  height="100%"
                  width="100%"
                />
              </UrlCards>
              <TitleHead paraColor={isdarkOrWhite}>{title}</TitleHead>
              <BothtextAndIcons>
                <BoxView>
                  <ParaLI>
                    <ParaCard paraColor={isdarkOrWhite}>
                      {viewCount} views
                    </ParaCard>
                  </ParaLI>
                  <DotLists paraDotCol={isdarkOrWhite}>
                    <ParaCard paraColor={isdarkOrWhite}>{publishedAt}</ParaCard>
                  </DotLists>
                </BoxView>
                <ThirdIconsCont>
                  <div>
                    <ButtonSocials
                      sendActive={likeColor}
                      onClick={this.changeLikeOptions}
                    >
                      <AiOutlineLike
                        size={15}
                        color={likeColor ? '#2563eb' : '#64748b'}
                        style={{marginRight: 4}}
                      />
                      Like
                    </ButtonSocials>
                  </div>
                  <div>
                    <ButtonSocials
                      sendActive={dislikeColor}
                      onClick={this.changeDisLikeOptions}
                    >
                      <AiOutlineDislike
                        color={dislikeColor ? '#2563eb' : '#64748b'}
                        size={15}
                        style={{marginRight: 4}}
                      />
                      Dislike
                    </ButtonSocials>
                  </div>
                  <div>
                    {saveVid ? (
                      <ButtonSocials
                        onClick={removeVideos}
                        sendActive={saveVid}
                      >
                        <BiListPlus
                          size={20}
                          color={saveVid ? '#2563eb' : '#64748b'}
                          style={{marginTop: 0, marginRight: 4}}
                        />
                        Saved
                      </ButtonSocials>
                    ) : (
                      <ButtonSocials onClick={saveVideos} sendActive={saveVid}>
                        <BiListPlus
                          size={20}
                          color={saveVid ? '#2563eb' : '#64748b'}
                          style={{marginTop: 0, marginRight: 4}}
                        />
                        Save
                      </ButtonSocials>
                    )}
                  </div>
                </ThirdIconsCont>
              </BothtextAndIcons>
              <hr />
              <ChannelDetails>
                <VideoProfiles src={profileImageUrl} alt="channel logo" />
                <div>
                  <ParaName paraColor={isdarkOrWhite}>{name}</ParaName>
                  <ParaSub paraColor={isdarkOrWhite}>
                    {subscriberCount} Subscribers
                  </ParaSub>
                  <ParaDesc paraColor={isdarkOrWhite}>{description}</ParaDesc>
                </div>
              </ChannelDetails>
            </YoutubeContainer>
          </VideoPlayingCards>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  checkSwitchVideo = () => {
    const {presentStatus} = this.state
    switch (presentStatus) {
      case statusChecking.isLoaded:
        return this.getLoading()
      case statusChecking.isSuccess:
        return this.ProcessingThedata()
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
              <BackVideoItem
                data-testid="videoItemDetails"
                outline={isdarkOrWhite}
              >
                <MainHomes>
                  <SideTodisp>
                    <SideNavBar />
                  </SideTodisp>
                  <SideDiv>
                    <UlPerticularVideoBox>
                      {this.checkSwitchVideo()}
                    </UlPerticularVideoBox>
                  </SideDiv>
                </MainHomes>
              </BackVideoItem>
            </>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
