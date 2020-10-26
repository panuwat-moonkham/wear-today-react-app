import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useScroll from '../../utils/useScroll'
import logoImage from '../../assets/logo.png'
import BackgroungBlock from '../BackgroundBlock'

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10000;
  background-color: ${props => (props.isScroll ? '#333' : 'transparent')};
  color: ${props => (props.isScroll ? '#fff' : '#fff')};
  transition: background-color 0.5s;
`
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1rem;
`

const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  transition: 0.3s;
`

const Action = styled.li`
  padding: 0 1rem;
`
// const Login = styled.div``

const Logo = styled.div`
  width: 6%;
`

// const Main = styled.div``

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 110px;
  z-index: 1;
  border-radius: 5px;

  a {
    color: black;
    padding: 14px 0;
    padding-left: 10px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
    border-radius: 5px;
  }
`

const Dropbtn = styled.div`
  color: white;
  border: none;
`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`

function NavBar () {
  const isScroll = useScroll({ scrollRange: 20 })

  // function openNav () {
  //   document.getElementById('mySidebar').style.width = '250px'
  //   document.getElementById('main').style.marginLeft = '250px'
  // }

  // function closeNav () {
  //   document.getElementById('mySidebar').style.width = '0'
  //   document.getElementById('main').style.marginLeft = '0'
  // }
  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        {/* <Sidebar id='mySidebar'>
          <Link className='closebtn' onClick={closeNav}>
            &times;
          </Link>
          <Link to='#'>About</Link>
          <Link to='#'>Services</Link>
          <Link to='#'>Clients</Link>
          <Link to='#'>Contact</Link>
          <SiteCover />
        </Sidebar>
        <Main id='main'>
          <Openbtn onClick={openNav}>&#9776;</Openbtn>
        </Main> */}
        <Logo>
          <Link to='/'>
            <BackgroungBlock src={logoImage} height='8' />
          </Link>
        </Logo>

        <ActionContainer>
          <Action>
            <Link to='/'>HOME</Link>
          </Action>
          <Action>
            <Link to='/post'>POST</Link>
          </Action>
          <Action>
            <Link to='/read'>READ</Link>
          </Action>
          <Action>
            <Dropdown>
              <Link>
                <Dropbtn>SERVICE</Dropbtn>
              </Link>
              <DropdownContent>
                <Link to='/help'>Help</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About us</Link>
              </DropdownContent>
            </Dropdown>
          </Action>
          <Action>
            <Link to='/login'>LOGIN</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
