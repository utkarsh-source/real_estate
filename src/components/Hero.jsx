import styled from 'styled-components'
import React, { useState, useRef, useEffect} from 'react'
import Button from './Button'
import {FaArrowRight, FaArrowCircleRight, FaArrowCircleLeft, FaSearch, FaMapMarkerAlt, FaSortDown ,FaChevronDown} from 'react-icons/fa'
import slides from './SliderData'
import gsap, {snap}from 'gsap'

const HeroWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    `;
const HeroSlider = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    background-color:rgb(0, 0, 0, 0.4);
    overflow: hidden;
    /* transition: margin-left 1s;
    transition-timing-function: cubic-bezier(.17,.42,.07,.96); */
    `;


const HeroImg = styled.img`
    position : absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1000;
    user-select: none;
    `;
const DetailsCont = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    height: max-content;
    text-align: center;
    & h1{
        color: white;
        font-size: 7rem;
        margin: 1.5rem 0px
    }
    & p{
        color: white;
        font-size: 1.5rem;
        margin: 1.5rem 0px;
    }
    `;

const Arrow = styled(FaArrowRight)`
font-size: 1.5rem;
margin: 0px 0.5rem;
transform-origin: left;
transition: 0.3s;
`

const RightArrow = styled(FaArrowCircleRight)`
    position: absolute;
    font-size: 3rem;
    right: 3rem;
    top: 50%;
    color: white;
    z-index: 10;
    transition: 0.5s;
    &:hover{
        cursor: pointer;
    }
    &:active{
        color: #fd8700;
        transform: scale(2)
    }
    `;
const LeftArrow = styled(FaArrowCircleLeft)`
    position: absolute;
    font-size: 3rem;
    left: 3rem;
    top: 50%;
    color: white;
    z-index: 10;
    transition: 0.5s;
    &:hover{
        cursor: pointer;
    }
    &:active{
        color: #fd8700;
        transform: scale(2)
    }
    `;

const InfoBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
bottom: -15%;
width: 80%;
height: 15rem;
display: flex;
flex-direction: column;
z-index: 3;
`;
const BuyDetailsbtn = styled.div`
position: relative;
width: 100%;
height: max-content;
display: flex;
justify-content: center;
`;

const Btn = styled.button`
border: none;
background-color: ${({primary})=>primary? '#f17500': '#4daa00'};
padding: 1.5rem 3rem;
color: white;
font-size: 1.5rem;
text-transform: uppercase;
height: max-content;
`

const InfoCont = styled.div`
    position: relative;
    width: 100%;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: white;
    box-shadow: 0px 1px 10px rgb(0, 0, 0, 0.2);
    
    @media screen and (max-width: 768px){
        &{
            grid-template-columns: repeat(1, 1fr);
        }
    }
    `;

const InfoBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding: 1rem;
    @media screen and (max-width: 768px){
        &{
            height: 9rem;
        }
    }
    `;
const Keyword = styled.h2`
color: #000000;
text-transform: uppercase;
font-size: 1.4rem;
margin-bottom: 1rem;
font-weight: 400;
`;
const FillerBox = styled.div`
position: relative;
width: max-content;
height: max-content;
display: flex;
align-items: center;
font-size: 1.5rem;
color: #c5c5c5;
padding: 0.5rem 0px;
z-index: 2;
cursor: pointer;
&:hover .dropper{
         max-height: 15rem;
         padding: 1rem 0px;
         width: 15rem;
    }
`; 

const Filler = styled.div`
    margin: 0px 0.5rem;
    `;
const Input = styled.input`
background-color: transparent;
border: none;
padding-left: 0.5rem;
margin: 0px 0.5rem;
width: 10rem;
&::placeholder{
    color: #c5c5c5;
}
&:focus{
     outline:none;
}`

const Dropper = styled.ul`
  position: absolute;
  overflow: hidden;
  top: 100%;
  transition: 0.3s all;
  width: 0px;
  max-height: 0px;
  transition-delay: 0.15s;
  background-color: #f3f3f3;
  border-radius: 0.2rem;
  z-index: 2;
    & > li{
    list-style: none;
    padding: 0.5rem 0.5rem;
    font-size: 1.7rem;
    color: black;
    &:hover{
        background-color: #b8cc00;
    }
    &.selected{
        background-color: #b8cc00;
    }
    }
`;




function Hero() {
    const [prop, setProp] = useState("Residential")
    const [count, setCount] = useState(0);
    const [elemWidth, setWidth] = useState(0)
    const prevBtn = useRef('')
    const nextBtn = useRef('')
    const dropper = useRef(null)
    const elems = useRef([]);
    const length = slides.length;
    const handleClick = (e) => {
        const target = e.target.closest("[datatype]")
        if(!target) return
        if (target.tagName !== 'LI') return
        setProp(target.getAttribute('datatype'))
        Array.from(target.parentElement.children).forEach(li=>li.classList.remove('selected'))
        target.classList.add('selected')
    }
    const wrapRange = gsap.utils.wrap(0, length);
    const handlePrev = () => {
        setCount(prevVal => prevVal - 1)
    }
    const handleNext= () => {
        setCount(prevVal => prevVal + 1)
    }
    useEffect(() => {
        setWidth(elems.current[0].offsetWidth)
    }, [])
    useEffect(() => {
        gsap.to(elems.current[0], {marginLeft : -(wrapRange(count)*elemWidth)})
    }, [count])
    return (
        <>
        <HeroWrapper id='home'>
                <LeftArrow ref={prevBtn} onClick={handlePrev}/>
                <RightArrow ref={nextBtn} onClick={handleNext}/>
                {slides.map((slide, index) => 
                <HeroSlider ref={n => elems?.current.push(n)} key={index}>
                        <HeroImg  className='c_img' src={slide.img} alt={`house_${index}`} />
                        <DetailsCont className='c_details'>
                            <h1>{slide.h1}</h1>
                            <p>{slide.p}</p>
                            <Button style={{ padding: '1rem 2rem', color: 'black', backgroundColor: 'white' }}>{slide.btn}<Arrow className="arw" /></Button>
                        </DetailsCont>
                </HeroSlider>
            )}
            </HeroWrapper>
            <InfoBox >
                <BuyDetailsbtn>
                    <Btn primary={true}>Buy</Btn>
                    <Btn>Rent</Btn>
                </BuyDetailsbtn>
                <InfoCont ref={dropper} onClick={handleClick}>
                    
                    <InfoBtn>
                        <Keyword>Enter Keyword</Keyword>
                        <FillerBox><FaSearch/><Input type='text' placeholder={'Enter Keyword'}/></FillerBox>
                    </InfoBtn>
                    <InfoBtn style={{ borderLeft: '0.5px solid gray' }}>
                        <Keyword>property type</Keyword>
                        <FillerBox>
                            <FaChevronDown />
                            <Filler>
                                {prop}
                            </Filler>
                            <Dropper className="dropper">
                                    <li datatype="Residential" >Residential</li>
                                    <li datatype="Commercial">Commercial</li>
                                    <li datatype="Land">Land</li>
                                    <li datatype="Industrial">Industrial</li>
                            </Dropper>
                        </FillerBox>
                    </InfoBtn>
                    <InfoBtn style={{ borderLeft: '0.5px solid gray' }}>
                        <Keyword>Location</Keyword>
                        <FillerBox> <FaMapMarkerAlt /><Input type="text" placeholder={'Search location'}/></FillerBox>
                    </InfoBtn>
                    <InfoBtn style={{ borderLeft: '0.5px solid gray' }}>
                        <Keyword>Price LIMIT</Keyword>
                        <FillerBox><FaChevronDown/> <Filler>$75,000,00</Filler></FillerBox>
                    </InfoBtn>
                    <InfoBtn as={'button'} style={
                        { border: 'none', backgroundColor: '#4daa00', color: 'white', fontSize: '1.7rem'}}>
                        SEARCH
                    </InfoBtn>
                </InfoCont>
            </InfoBox>
         </>
    )
}

export default Hero
