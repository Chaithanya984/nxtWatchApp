import styled from 'styled-components'

export const Backhome = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.outline ? ' #181818' : '#f9f9f9')};
`

export const MainHomes = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: row;
`
export const SideDiv = styled.div`
  width: 100%;

  @media (max-width: 991px) {
    width: 100%;
  }
`

export const BannerBack = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  padding: 20px;
  height: 40vh;
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    padding: 20px;
  }
`
export const BannerAll = styled.div`
  display: ${props => props.dispAll};
  flex-direction: column;
`

export const ClosedBut = styled.button`
  height: 40px;
  width: 120px;
  align-self: flex-start;
  background-color: transparent;
  border-width: 0px;
`
export const GetBut = styled.button`
  height: 40px;
  width: 120px;
  align-self: flex-start;
  background-color: transparent;
  border-width: 2px;
  border-style: solid;
  font-family: 'Roboto';
  font-weight: bold;
`
export const BannerImg = styled.img`
  height: 40px;
`

export const VideoBack = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 12px;
`
export const InputSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
`
export const InputSearch = styled.input`
  height: 35px;
  width: 35%;
  padding: 12px;
  outline: none;
  font-family: 'Roboto';
  @media (max-width: 767px) {
    width: 70%;
  }
`

export const VideoCard = styled.div`
  height: 300px;
  width: 260px;

  @media (max-width: 575px) {
    height: 400px;
    width: 100%;
    box-sizing: border-box;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    height: 300px;
    width: 260px;
  }
`
export const VideoThumb = styled.img`
  width: 100%;
`
export const VideoProfile = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 3px;

  align-self: flex-start;
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 6px;

  padding-bottom: 6px;
`

export const ParaCards = styled.p`
  margin: 0px;
  color: ${props => (props.paraColor ? 'white' : 'black')};
`
export const ParaCard = styled.p`
  margin: 5px;
  margin-left: 0px;
  color: ${props => (props.paraColor ? 'white' : 'black')};
`
export const ParaBox = styled.div`
  margin-left: 12px;
`
export const BoxView = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  list-style: disc;
`

export const UlVideoBox = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const SideTodisp = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ParaLI = styled.li`
  list-style-type: none;
  margin-right: 24px;
`

export const VideoLIcar = styled.li`
  margin: 8px;
`
export const ThumbDiv = styled.div`
  margin: 0px;
`
export const SearchBut = styled.button`
  height: 35px;
  width: 80px;
`

export const LoaderLi = styled.li`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const DotLists = styled.li`
  color: ${props => (props.paraDotCol ? 'white' : 'black')} !important;
`

export const NovideoLi = styled.li`
  width: 100%;
  padding: 25px;
  list-style-type: none;
`
export const NovideoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoImage = styled.img`
  width: 50%;
`
export const ButtonRetry = styled.button`
  height: 40px;
  width: 120px;
  background-color: #3b82f6;
  color: white;
  border-width: 0px;
`
export const ButtonDIVS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
