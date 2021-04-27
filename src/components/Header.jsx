import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import './Header.css'
import { FaBars } from 'react-icons/fa'
import Button from './Button'
import {Link} from 'react-scroll'


export const StyledLink = styled(Link)`
    font-size: 1.6rem;
    color: white;
    cursor: pointer;
`;
const Bar = styled(FaBars)`
display: none;
border: none;
font-size: 2.5rem;
color: white;
transition: 0.5s;
&:active{
    transform: scale(1.5);
}
@media screen and (max-width: 768px){
    display: inline-block;
}`;

const Nav = styled.nav`
    & > ul{
        transform-style: preserve-3d;
        transform: perspective(1000px);
        display: flex;
        align-items: center;
        & > li{
            margin: 0px 2rem;
            font-size: 1.7rem;
            color: white;
            list-style: none;
            
        }
    }
        @media screen and (max-width: 768px) {
        &{
        display: none;
        }
    }`

const Logo = styled.h2`
    font-size: 1.7rem;
  font-style: italic;
  font-weight: bold;
  color: white;
`

function Header({ toggle, setToggle}) {
    const header = useRef()
    useEffect(() => {
        window.onscroll = () => { header.current.classList.toggle('animate', window.scrollY > 0)} 
    }, [])
    return (
        <header ref={header}>
            <Logo>ELIXR</Logo>
            <Nav>
                <ul>
                    <li>
                        <StyledLink smooth='true' to='home'>Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink offset={-70} smooth='true' to='about'>About Us</StyledLink>
                    </li>
                    <li>
                        <StyledLink offset={-100} smooth='true' to='catagories'>Catagories</StyledLink>
                    </li>
                    <li>
                        <StyledLink smooth='true' to='properties'>Properties</StyledLink>
                    </li>
                    <li>
                        <StyledLink smooth='true' to='testimonial'>Testimonials</StyledLink>
                    </li>
                    <li>

                        <StyledLink smooth='true' to='agents'>Agents</StyledLink>
                    </li>
                </ul>
            </Nav>
            <Button as={Link} smooth='true' to="contact" primary='true'>Contact Us</Button>
            <Bar onClick={() => setToggle(!toggle)} />
        </header>
    )
}

export default Header
