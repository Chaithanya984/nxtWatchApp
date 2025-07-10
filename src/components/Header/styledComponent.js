import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  min-height: 4vh;
  background-color: ${props => (props.outline ? 'black' : 'white')};
  padding: 8px;
  padding-left: 4vw;
  padding-right: 4vw;
`

export const UlNav = styled.nav`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  justify-content: space-between;
`

export const DarkImgs = styled.img`
  height: 30px;
`

export const ProfileImgs = styled.img`
  height: 32px;
`

export const MoonLight = styled.button`
  border-width: 0px;
  background-color: transparent;
`
export const ButtonProfile = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`

export const ButtonLog = styled.button`
  background-color: transparent;
  border-width: 1px;
  border-color: ${props => (props.outlines ? 'white' : '#3b82f6')};
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.outlines ? 'white' : '#3b82f6')};
  height: 30px;
  width: 75px;
  border-radius: 4px;
`

export const ButtonCancel = styled.button`
  background-color: transparent;
  border-width: 1px;
  border-color: #3b82f6;
  font-family: 'Roboto';
  font-weight: bold;
  color: #3b82f6;
  height: 30px;
  width: 80px;
  border-radius: 4px;
  margin-right: 15px;
`
export const ButtonConfirm = styled.button`
  background-color: transparent;
  border-width: 1px;
  border-color: #3b82f6;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
  height: 30px;
  width: 80px;
  border-radius: 4px;
`

export const LInav = styled.li`
  margin-right: 12px;
`
export const PopsCont = styled.div`
  background-color: #212121;
  min-height: 140px;
  width: 320px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  align-items: center;
  border-radius: 8px;

  color: white;
`

export const PopupMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0f0f0f;
  opacity: 0.8;
  min-width: 100vw;
`

export const ButtonsDivs = styled.div`
  display: flex;
  flex-direction: row;
`
export const ButtonBurger = styled.button`
  background-color: transparent;
  display: none;
  border-width: 0px;
  @media (max-width: 767px) {
    display: flex;
  }
`

export const MenuBars = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.bgMenu ? '#181818' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
`
export const ButtonHam = styled.button`
  height: 40px;
  width: 200px;
  align-self: flex-end;
  background-color: transparent;
  border-width: 0px;
`

export const CloseHam = styled.div`
  width: 100%;

  min-height: 20vh;

  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
