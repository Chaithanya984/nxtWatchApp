import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiSun} from 'react-icons/fi'

import {BsMoon} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import SideNavBar from '../SideNavBar'

import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NavBar,
  UlNav,
  DarkImgs,
  ProfileImgs,
  MoonLight,
  ButtonProfile,
  ButtonLog,
  LInav,
  PopsCont,
  PopupMain,
  ButtonsDivs,
  ButtonConfirm,
  ButtonCancel,
  ButtonBurger,
  MenuBars,
  ButtonHam,
  CloseHam,
} from './styledComponent'

const Header = props => {
  const Remove = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {changebackground, isdarkOrWhite} = value
        console.log(isdarkOrWhite)
        const clickTochangeBack = () => {
          changebackground()
        }
        return (
          <NavBar outline={isdarkOrWhite}>
            <Link to="/">
              <div>
                <DarkImgs
                  src={
                    isdarkOrWhite
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </div>
            </Link>

            <UlNav>
              <LInav>
                {
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <div>
                    <MoonLight
                      data-testid="theme"
                      onClick={clickTochangeBack}
                      type="button"
                    >
                      {isdarkOrWhite ? (
                        <FiSun size={25} color="white" />
                      ) : (
                        <BsMoon size={25} />
                      )}
                    </MoonLight>
                  </div>
                }
              </LInav>
              <LInav>
                {
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <>
                    <ButtonProfile type="button">
                      <ProfileImgs
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </ButtonProfile>

                    <Popup
                      modal
                      trigger={
                        <ButtonBurger type="button">
                          <GiHamburgerMenu
                            size={25}
                            color={isdarkOrWhite ? 'white' : 'black'}
                          />
                        </ButtonBurger>
                      }
                    >
                      {close => (
                        <MenuBars bgMenu={isdarkOrWhite}>
                          <CloseHam>
                            <ButtonHam
                              data-testid="close"
                              onClick={() => close()}
                            >
                              <IoMdClose
                                size={25}
                                color={isdarkOrWhite ? 'white' : 'black'}
                              />
                            </ButtonHam>
                          </CloseHam>

                          <SideNavBar />
                        </MenuBars>
                      )}
                    </Popup>
                  </>
                }
              </LInav>
              <LInav>
                <Popup
                  modal
                  trigger={
                    <ButtonLog outlines={isdarkOrWhite} type="button">
                      Logout
                    </ButtonLog>
                  }
                >
                  {close => (
                    <PopupMain>
                      <PopsCont>
                        <p>Are you sure, you want to logout?</p>
                        <ButtonsDivs>
                          <ButtonCancel type="button" onClick={() => close()}>
                            Cancel
                          </ButtonCancel>
                          <ButtonConfirm onClick={Remove} type="button">
                            Confirm
                          </ButtonConfirm>
                        </ButtonsDivs>
                      </PopsCont>
                    </PopupMain>
                  )}
                </Popup>
              </LInav>
            </UlNav>
          </NavBar>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default withRouter(Header)
