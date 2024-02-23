import styled from 'styled-components'

export const TopNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`
export const TopRightNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 26px;
`
export const SideNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  width: 20vw;
`
export const SideTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
`
export const SideBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoutButton = styled.button`
  border: solid #ffffff 1px;
  border-radius: 5px;
  background-color: #000000;
  color: ${props => (props.theme === true ? '#0070c1' : '#ffffff')};
`
export const LinkItem = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 12px;
  font-family: 'Roboto';
`
export const MenuIcon = styled.div`
  height: 8px;
  width: 8px;
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
`
export const ContactText = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 16px;
  font-family: 'Roboto';
`
export const BottomNavDescription = styled.p`
  color: ${props => (props.theme === true ? '#000000' : '#ffffff')};
  font-size: 12px;
  font-family: 'Roboto';
`
