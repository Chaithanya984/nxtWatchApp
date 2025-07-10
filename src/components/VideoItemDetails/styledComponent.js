import styled from 'styled-components'

export const BackVideoItem = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
`

export const UlPerticularVideoBox = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: '#0f0f0f';
`
export const VideoPlayingCards = styled.li`
  list-style-type: none;
  width: 100%;

  min-height: 100vh;
  padding: 30px;
  @media (max-width: 576px) {
    padding: 0px;
  }
`

export const YoutubeContainer = styled.div`
  width: 100%;
`

export const UrlCards = styled.div`
  width: 100%;

  height: 70vh;
  @media (max-width: 500px) {
    height: 30vh;
  }
  @media (min-width: 500px) and (max-width: 576px) {
    height: 40vh;
  }
`

export const ThirdIconsCont = styled.div`
  display: flex;
  flex-direction: row;
`

export const BothtextAndIcons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`
export const TitleHead = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.paraColor ? 'white' : 'black')};
`
export const VideoProfiles = styled.img`
  height: 50px;
  width: 50px;

  margin-right: 15px;
  align-self: flex-start;
`
export const ParaName = styled.p`
  margin: 0px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.paraColor ? 'white' : 'black')};
`
export const ParaSub = styled.p`
  margin: 5px;
  margin-left: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.paraColor ? 'white' : 'black')};
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 6px;

  padding-bottom: 6px;
  margin-top: 20px;
`
export const ParaDesc = styled.p`
  font-family: 'Roboto';

  color: ${props => (props.paraColor ? 'white' : 'black')};
`
export const ButtonSocials = styled.button`
  height: 25px;
  color: ${props => (props.sendActive ? '#2563eb' : '#64748b')};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 12px;
  background-color: transparent;
  border-width: 0px;
`
