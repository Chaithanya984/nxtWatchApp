import styled from 'styled-components'

export const BackVideoItemTrend = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingCont = styled.div`
  height: 20vh;
  width: 100%;
  background-color: #101001;
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  padding-left: 48px;
  font-family: 'Roboto';
`

export const TrendingCircle = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 90px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

export const VideoLIcardSingle = styled.li`
  width: 100%;
  margin-bottom: 18px;
`

export const VideoCardsingle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const ThumbDivsingle = styled.div`
  margin: 0px;
  margin-right: 18px;
`

export const VideoThumbsingle = styled.img`
  width: 400px;
  @media (max-width: 576px) {
    width: 100%;
  }
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

export const ParaLI = styled.li`
  list-style-type: none;
  margin-right: 24px;
`

export const UlPerticularVideoBoxTrend = styled.ul`
  padding: 30px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: '#0f0f0f';
`
