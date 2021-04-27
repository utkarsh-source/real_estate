import React, {useEffect,  useRef} from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { FaTimesCircle } from 'react-icons/fa'
import { StyledLink } from '../components/Header'

const style = {
    margin: '1rem 0px'
}

const DropdownWrapper = styled.div`
position: fixed;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(255, 115, 0, 0.95);
top: 0px;
left: 0px;
z-index: 999;
transition: 0.5s;
top: ${({ toggle }) => toggle ? '0' : '-100%'};
`
const Cancel = styled(FaTimesCircle)`
position: absolute;
top: 2rem;
right: 2rem;
font-size: 4rem;
transition: 0.5s;
cursor: pointer;
&:active{
    transform: scale(1.5);
}`

function Dropdown({ toggle, setToggle }) {
    useEffect(() => {
        if (toggle) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
    }, [toggle])
    return (
        <DropdownWrapper onClick={()=>setToggle(!toggle)} toggle={toggle}>
            <Cancel />
            <StyledLink onClick={()=>setToggle(!toggle)} smooth='true' style={style} to='home'>Home</StyledLink>
            <StyledLink onClick={()=>setToggle(!toggle)} offset={-70} style={style} smooth='true' to='about'>About Us</StyledLink>
            <StyledLink onClick={()=>setToggle(!toggle)} offset={-100} style={style} smooth='true' to='catagories'>Catagories</StyledLink>
            <StyledLink onClick={()=>setToggle(!toggle)} smooth='true' style={style} to='properties'>Properties</StyledLink>
            <StyledLink onClick={()=>setToggle(!toggle)} smooth='true' style={style} to='testimonial'>Testimonials</StyledLink>
            <StyledLink onClick={()=>setToggle(!toggle)} smooth='true' style={style} to='agents'>Agents</StyledLink>
            <Button onClick={()=>setToggle(!toggle)} as={StyledLink} smooth="true" style={style} to='contact'>Contact us</Button>
       </DropdownWrapper>
    )
}

export default Dropdown
