import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { Title, sharedstyle } from './Catogories' 
import {FaMapMarkerAlt} from 'react-icons/fa'
import Home_1 from '../images/Home_1.jpg'
import Home_2 from '../images/Home_2.jpg'
import Home_3 from '../images/Home_3.jpg'
import Home_4 from '../images/Home_4.jpg'
import bathtub from '../images/bathtub.png'
import bed from '../images/bed.png'
import measuring from '../images/measuring.png' 
import person from '../images/person.jpg'
import {stagger} from './customLogic/animate'

const PropertiesCont = styled.section`
${sharedstyle};
margin-top: 10rem;
background-color: #f5f5f5;
padding: 8rem 0px; 
`;

const Div = styled.div`
width: 95%;
display: flex;
align-items: center;
height: max-content;
margin-top: 8rem;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 2rem;
@media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 8rem;
}
`;

const HomeBox = styled.div`
    position: relative;
    height: max-content;
    background-color: white;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.2), -0px -0px 10px rgb(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    &:hover .BoxImg{
        transform: translateY(0) scale(1);
    }`
const ImgBox = styled.div`
    width: 100%;
    background-size: cover;
    height: 20rem;
    background-image: url(${props => props.img});
    transition: 0.3s;
    transform: translateY(-20%) scale(0.8);
    `;
const InfoBox = styled.div`
width: 100%;
height: 20rem;
padding: 2rem;
font-size: 1.3rem;
transition: 0.3s;
`
const InfoCont = styled.div`
 width: 100%;
height: max-content;
display: flex;
align-items: center;
justify-content: space-between;
`;


const PersonBox = styled.div`
display: flex;
align-items: center;`
const PersonImg = styled.img`
width: 4rem;
height: 4rem;
border-radius: 50%;
margin-right: 1rem;
object-fit: cover;
`
const Name = styled.div`
font-size: 1.5rem;
color: rgba(128, 128, 128);

`
const Posted = styled.div`
font-size: 1.5rem;
color: rgba(128, 128, 128);
`;

const PropertyName = styled.div`
font-size: 2rem;
color: black;
margin: 2rem 0px;
text-align: left;`;

const Location = styled.div`
display: flex;
align-items: center;
`;
const Pointer = styled(FaMapMarkerAlt)`
font-size: 1.5rem;
margin-right: 0.7rem;
color: green;`

const SaleBox = styled.div`
color: white;
margin-left: 0.7rem;
padding: 0.5rem;
background-color: ${({ rent }) => rent ? 'red' : 'green'};
`;

const ProDetails = styled.div`
display: flex;
align-items: center;
`;

const ImgDetails = styled.div`
display: flex;
align-items: center;
color: #919191;
margin-right:1rem;
margin-top: 2rem;
&  img{
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
}
`


function Properties() {
    const target = useRef("")
    useEffect(() => {
        const propImg = target.current.querySelector('._properties_details').children
        stagger(propImg, [500, 0], 0.3)
    }, [])
    return (
        <PropertiesCont id="properties"  ref={target}>
            <Title className="_property"><span className='e'>F</span>eatured <span>P</span>roperties</Title>
            <Div className="_properties_details">
                <HomeBox>
                    <ImgBox className='BoxImg' img={Home_1}></ImgBox>
                    <InfoBox className='BoxInfo'>
                        <InfoCont>
                            <PersonBox>
                                <PersonImg src={person} alt="person" />
                                <Name>Utkarsh</Name>
                            </PersonBox>
                            <Posted>2 weeks ago</Posted>
                        </InfoCont>
                        <PropertyName>Sunny Loft Property</PropertyName>
                        <Location><Pointer /> New York <SaleBox>Sale</SaleBox></Location>
                        <ProDetails>
                            <ImgDetails>
                                <img src={bed} alt="Bed" /> <span>3</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={bathtub} alt="bathtub" /> <span>2</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={measuring} alt="measuring"/> <span>1876 sqft</span>
                            </ImgDetails>
                        </ProDetails>
                    </InfoBox>
                </HomeBox>
                <HomeBox>
                   <ImgBox className='BoxImg' img={Home_2}></ImgBox>
                    <InfoBox className='BoxInfo'>
                        <InfoCont>
                            <PersonBox>
                                <PersonImg src={person} alt="person" />
                                <Name>Utkarsh</Name>
                            </PersonBox>
                            <Posted>2 weeks ago</Posted>
                        </InfoCont>
                        <PropertyName>Sunny Loft Property</PropertyName>
                        <Location><Pointer /> New York <SaleBox>Sale</SaleBox></Location>
                        <ProDetails>
                            <ImgDetails>
                                <img src={bed} alt="Bed" /> <span>3</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={bathtub} alt="bathtub" /> <span>2</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={measuring} alt="measuring"/> <span>1876 sqft</span>
                            </ImgDetails>
                        </ProDetails>
                    </InfoBox>
                </HomeBox>
                <HomeBox>
                    <ImgBox className='BoxImg' img={Home_3}></ImgBox>
                    <InfoBox className='BoxInfo'>
                        <InfoCont>
                            <PersonBox>
                                <PersonImg src={person} alt="person" />
                                <Name>Utkarsh</Name>
                            </PersonBox>
                            <Posted>2 weeks ago</Posted>
                        </InfoCont>
                        <PropertyName>Sunny Loft Property</PropertyName>
                        <Location><Pointer /> New York <SaleBox>Sale</SaleBox></Location>
                        <ProDetails>
                            <ImgDetails>
                                <img src={bed} alt="Bed" /> <span>3</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={bathtub} alt="bathtub" /> <span>2</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={measuring} alt="measuring"/> <span>1876 sqft</span>
                            </ImgDetails>
                        </ProDetails>
                    </InfoBox>
                </HomeBox>
                <HomeBox>
                    <ImgBox className='BoxImg' img={Home_4}></ImgBox>
                    <InfoBox className='BoxInfo'>
                        <InfoCont>
                            <PersonBox>
                                <PersonImg src={person} alt="person" />
                                <Name>Utkarsh</Name>
                            </PersonBox>
                            <Posted>2 weeks ago</Posted>
                        </InfoCont>
                        <PropertyName>Sunny Loft Property</PropertyName>
                        <Location><Pointer /> New York <SaleBox>Sale</SaleBox></Location>
                        <ProDetails>
                            <ImgDetails>
                                <img src={bed} alt="Bed" /> <span>3</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={bathtub} alt="bathtub" /> <span>2</span>
                            </ImgDetails>
                            <ImgDetails>
                                <img src={measuring} alt="measuring"/> <span>1876 sqft</span>
                            </ImgDetails>
                        </ProDetails>
                    </InfoBox>
                </HomeBox>
            </Div>
        </PropertiesCont>
    )
}

export default Properties
