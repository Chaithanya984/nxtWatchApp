import {AiFillHome} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import {HiFire} from 'react-icons/hi'

import {Link} from 'react-router-dom'

import {
  SideNav,
  SideLi,
  SideUl,
  Lipara,
  ContactBox,
  FbImg,
  LogoCont,
  Contact,
  Enpara,
} from './styledComponent'
import NxtwatchContext from '../../context/NxtwatchContext'

import './index.css'

const SideNavBar = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isdarkOrWhite, ChangeRoles, ActiveRole} = value

      const callingHome = () => {
        console.log('Home')
        ChangeRoles('HOME')
      }
      const callingTrending = () => {
        ChangeRoles('TRENDING')
      }
      const callingGaming = () => {
        ChangeRoles('GAMING')
      }
      const callingSaved = () => {
        ChangeRoles('SAVED')
      }

      const callAdarkss = sideName => {
        const checkcolors =
          ActiveRole === sideName
            ? {backgroundColor: 'purple'}
            : {backgroundColor: '#181818'}

        return checkcolors
      }

      const callAWhitess = sideName => {
        const checkcolors =
          ActiveRole === sideName
            ? {backgroundColor: 'red'}
            : {backgroundColor: 'white'}

        return checkcolors
      }

      return (
        <SideNav bgsideNav={isdarkOrWhite}>
          <SideUl>
            <Link className="Links" to="/" onClick={callingHome}>
              <SideLi
                style={
                  isdarkOrWhite ? callAdarkss('HOME') : callAWhitess('HOME')
                }
              >
                <AiFillHome
                  size={25}
                  color={isdarkOrWhite ? 'white' : 'black'}
                  style={{marginRight: '20px'}}
                />
                <Lipara dispColors={isdarkOrWhite}>Home</Lipara>
              </SideLi>
            </Link>
            <Link className="Links" to="/trending" onClick={callingTrending}>
              <SideLi
                style={
                  isdarkOrWhite
                    ? callAdarkss('TRENDING')
                    : callAWhitess('TRENDING')
                }
              >
                <HiFire
                  size={25}
                  color={isdarkOrWhite ? 'white' : 'black'}
                  style={{marginRight: '20px'}}
                />
                <Lipara dispColors={isdarkOrWhite}>Trending</Lipara>
              </SideLi>
            </Link>
            <Link className="Links" to="/gaming" onClick={callingGaming}>
              <SideLi
                style={
                  isdarkOrWhite ? callAdarkss('GAMING') : callAWhitess('GAMING')
                }
              >
                <SiYoutubegaming
                  size={25}
                  color={isdarkOrWhite ? 'white' : 'black'}
                  style={{marginRight: '20px'}}
                />
                <Lipara dispColors={isdarkOrWhite}>Gaming</Lipara>
              </SideLi>
            </Link>
            <Link className="Links" to="/saved-videos" onClick={callingSaved}>
              <SideLi
                style={
                  isdarkOrWhite ? callAdarkss('SAVED') : callAWhitess('SAVED')
                }
              >
                <CgPlayListAdd
                  size={25}
                  color={isdarkOrWhite ? 'white' : 'black'}
                  style={{marginRight: '20px'}}
                />
                <Lipara dispColors={isdarkOrWhite}>Saved videos</Lipara>
              </SideLi>
            </Link>
          </SideUl>
          <ContactBox>
            <Contact>CONTACT US</Contact>
            <LogoCont>
              <FbImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <FbImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <FbImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoCont>
            <Enpara>
              Enjoy! Now to see your channels and recommendations!
            </Enpara>
          </ContactBox>
        </SideNav>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default SideNavBar
