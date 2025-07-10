import {Component} from 'react'

import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'

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

class SavedVideos extends Component {
  ProcessThedatas = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {isdarkOrWhite, savedVideo} = value
        console.log(savedVideo, 'saves')

        const getNxt =
          savedVideo.length === 0 ? (
            <NovideoLi>
              <NovideoCont>
                <NoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <div>
                  <h1>No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </div>
              </NovideoCont>
            </NovideoLi>
          ) : (
            savedVideo.map(each => (
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
                  </VideoCardsingle>
                </VideoLIcardSingle>
              </Link>
            ))
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
          const {isdarkOrWhite, savedVideo} = value
          return (
            <>
              <Header />
              <BackVideoItemTrend
                data-testid="savedVideos"
                outline={isdarkOrWhite}
              >
                <MainHomes>
                  <SideTodisp>
                    <SideNavBar />
                  </SideTodisp>
                  <SideDiv>
                    {savedVideo.length !== 0 && (
                      <TrendingCont>
                        <TrendingCircle>
                          <HiFire size={35} color="red" />
                        </TrendingCircle>
                        <h1>Saved Videos</h1>
                      </TrendingCont>
                    )}
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

export default SavedVideos
