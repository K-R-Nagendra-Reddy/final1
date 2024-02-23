import NextContext from '../../context/NextContext'

import {
  TopNavBar,
  TopRightNavContainer,
  SideNavbar,
  SideTopContainer,
  SideBottomContainer,
  LogoutButton,
  LinkItem,
  MenuIconBox,
  ContactText,
  BottomNavDescription,
} from './style'
import {val} from 'cheerio/lib/api/attributes'

const Header = () => (
  <NextContext.Consumer>
    {value => {
      const {isLightTheme} = value
      return (
        <>
          <TopNavBar>
            {isLightTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            )}
            <TopRightNavContainer></TopRightNavContainer>
          </TopNavBar>
        </>
      )
    }}
  </NextContext.Consumer>
)
