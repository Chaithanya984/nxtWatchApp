import styled from 'styled-components'

export const SideNav = styled.div`
  background-color: ${props => (props.bgsideNav ? '#181818' : 'white')};
  width: 240px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  @media (max-width: 767px) {
    display: flex;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 210px;
  }
`

export const SideUl = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const SideLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Lipara = styled.p`
  padding-bottom: 7px;
  color: ${props => (props.dispColors ? 'white' : 'black')};
`

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    display: none;
  }
`
export const LogoCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`
export const FbImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
`
export const Contact = styled.p`
  font-family: 'roboto';
  font-size: 22px;
  font-weight: 'bold';
`
export const Enpara = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  margin-top: 22px;
`
