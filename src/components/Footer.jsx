import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { FaBall, Fastyle} from './Agents'
import { FaFacebook, FaTwitter, FaInstagram, FaAngleRight, FaMapMarkedAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'
import {staggerUp} from './customLogic/animate'
const FooterWrapper = styled.section`
width: 100%;
height: max-content;
background-color: #00012c;
padding: 10rem 2rem;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 2rem;
@media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
}
& > div{
    width: 25rem;
    height: max-content;
    &> h2{
        color: white;
        font-size: 2.5rem;
    }
    &>span{
        color: white;
        font-size: 1.5rem;
    }
    &>p{
        color: rgb(255, 255, 255, 0.8);
        font-size: 1.6rem;
        margin : 2rem 0px;
    }
    &>div{
        margin : 2rem 0px;
        display: flex;
    }
}`

const List = styled.ul`
font-size: 2rem;
font-weight: bold;
color: white;
& li{
    list-style: none;
    color: rgb(255, 255, 255, 0.8);
    font-size: 1.5rem;
    margin: 2rem 0px;
    display: flex;
    align-items: center;
    transition: 0.3s;
    color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        color: #24b600 !important;
    }
}
`
const Angle = styled(FaAngleRight)`
font-size: 2rem;
color: inherit;
margin-right: 0.5rem;
`
const style = {
    color: 'green',
    fontSize: '1.6rem',
    marginRight: '1.5rem'
}

const Copyright = styled.div`
 background-color: #c24700;
 color: white;
 font-size: 1.6rem;
 padding: 3rem;
 display: flex;
 align-items: center;
 text-align: justify;
 justify-content: center;
`

function Footer() {
    const target = useRef(null);
    useEffect(() => {
        staggerUp(target.current)
    },[])
    return (
        <>
            <FooterWrapper id="contact" ref={target}>
            <div>
                <h2>ELIXIR</h2>
                <span>REAL ESTATE AGENCY</span>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div>
                    <FaBall><FaFacebook style={Fastyle}/></FaBall>
                    <FaBall><FaTwitter style={Fastyle}/></FaBall>
                    <FaBall><FaInstagram style={Fastyle}/></FaBall>
                </div>
            </div>
                <List>Offers
                    <li><Angle/> Properties</li>
                    <li><Angle/> Agents</li>
                    <li><Angle/> Locations</li>
                    <li><Angle/> Clients Support</li>
                </List>
                <List>Company
                    <li><Angle/> Home</li>
                    <li><Angle/> About</li>
                    <li><Angle/> Blog</li>
                    <li><Angle/> Contact Us</li>
                </List>
                <List>Quick Links
                    <li><Angle/> Terms & condition</li>
                    <li><Angle/> User's Guide</li>
                    <li><Angle/> Support Guide</li>
                    <li><Angle/> Press Info</li>
                </List>
                <List>Have a Question ? 
                    <li><div><FaMapMarkedAlt style={style} /></div>
                        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                    </li>
                    <li><FaPaperPlane style={style}/> +2 392 3929 210</li>
                    <li><FaPhoneAlt style={style}/> info@yourdomain.com</li>
            </List>
            </FooterWrapper>
            <Copyright>Copyright ©2021 All rights reserved | This template is made by Utkarsh
             </Copyright>
            </>
            )
            }

            export default Footer
