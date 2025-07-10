import {Component} from 'react'

import {Redirect, Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'

import Header from '../Header'

import NxtwatchContext from '../../context/NxtwatchContext'

import SideNavBar from '../SideNavBar'

import {
  Backhome,
  MainHomes,
  SideDiv,
  BannerBack,
  ClosedBut,
  BannerImg,
  VideoBack,
  InputSearchBox,
  InputSearch,
  VideoCard,
  VideoThumb,
  VideoProfile,
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
  GetBut,
  SearchBut,
  LoaderLi,
  DotLists,
  BannerAll,
  NovideoLi,
  NoImage,
  NovideoCont,
  ButtonRetry,
  ButtonDIVS,
} from './styledComponent'

const statusCheck = {
  isLoad: 'LOADING',
  isSuccess: 'SUCCESS',
  isFail: 'FAILURE',
}

class Home extends Component {
  state = {
    todisp: true,
    searchValue: '',
    checkingStatus: statusCheck.isLoad,
    newArray: [],
    searchInput: '',
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
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const urls = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const response = await fetch(urls, options)

    if (response.ok === true) {
      const datas = await response.json()
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
        newArray: MakeNew,
        checkingStatus: statusCheck.isSuccess,
      })
    } else {
      this.setState({checkingStatus: statusCheck.isFail})
    }
  }

  callAgain = () => {
    this.getApi()
  }

  retrying = () => {
    this.setState({searchInput: ''}, this.getApi)
  }

  changeValues = event => {
    this.setState({searchInput: event.target.value})
  }

  changeDisp = () => {
    this.setState({todisp: false})
  }

  searchTogetUl = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getApi)
  }

  callSearchEnter = event => {
    const {searchInput} = this.state
    if (event.key === 'Enter') {
      this.setState({searchValue: searchInput}, this.getApi)
    }
  }

  ProcessThedata = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite} = value

        const {newArray} = this.state

        const getNxt =
          newArray.length === 0 ? (
            <NovideoLi>
              <NovideoCont>
                <NoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <div>
                  <h1>No Search results found</h1>
                  <p>Try different key words or remove search filter</p>
                  <ButtonDIVS>
                    <ButtonRetry type="button" onClick={this.retrying}>
                      Retry
                    </ButtonRetry>
                  </ButtonDIVS>
                </div>
              </NovideoCont>
            </NovideoLi>
          ) : (
            newArray.map(each => (
              <Link key={each.id} to={`/videos/${each.id}`}>
                <VideoLIcar key={each.id}>
                  <VideoCard>
                    <ThumbDiv>
                      <VideoThumb
                        src={each.thumbnailUrl}
                        alt="video thumbnail"
                      />
                    </ThumbDiv>
                    <CardDetails>
                      <VideoProfile
                        src={each.profileImageUrl}
                        alt="channel logo"
                      />
                      <ParaBox>
                        <ParaCards paraColor={isdarkOrWhite}>
                          {each.title}
                        </ParaCards>
                        <ParaCard paraColor={isdarkOrWhite}>
                          {each.name}
                        </ParaCard>
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
                  </VideoCard>
                </VideoLIcar>
              </Link>
            ))
          )
        return getNxt
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

                <ButtonRetry type="button" onClick={this.retrying}>
                  Retry
                </ButtonRetry>
              </div>
            </NovideoCont>
          </NovideoLi>
        )
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

  checkSwitch = () => {
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
    const {todisp, searchInput} = this.state
    const readJwt = Cookies.get('jwt_token')

    if (readJwt === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isdarkOrWhite} = value

          return (
            <Backhome data-testid="home" outline={isdarkOrWhite}>
              <Header />
              <MainHomes>
                <SideTodisp>
                  <SideNavBar />
                </SideTodisp>

                <SideDiv>
                  {todisp && (
                    <BannerBack data-testid="banner">
                      <BannerAll>
                        <BannerImg
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <p>
                          Buy Nxt Watch Premium prepaid plans with <br /> UPI
                        </p>
                        <GetBut>GET IT NOW</GetBut>
                      </BannerAll>

                      <ClosedBut
                        data-testid="close"
                        onClick={this.changeDisp}
                        type="button"
                      >
                        <AiOutlineClose size={25} />
                      </ClosedBut>
                    </BannerBack>
                  )}
                  <VideoBack>
                    <InputSearchBox>
                      <InputSearch
                        onChange={this.changeValues}
                        onKeyDown={this.callSearchEnter}
                        type="search"
                        value={searchInput}
                        placeholder="Search"
                      />
                      {
                        // eslint-disable-next-line jsx-a11y/control-has-associated-label
                        <div>
                          <SearchBut
                            data-testid="searchButton"
                            onClick={this.searchTogetUl}
                            type="button"
                          >
                            <AiOutlineSearch size={18} />
                          </SearchBut>
                        </div>
                      }
                    </InputSearchBox>
                    <UlVideoBox>{this.checkSwitch()}</UlVideoBox>
                  </VideoBack>
                </SideDiv>
              </MainHomes>
            </Backhome>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Home
