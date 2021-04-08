import React, {useCallback, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { Title } from './Catogories'
import { FaQuoteLeft, FaHandPointer} from 'react-icons/fa' 
import person from '../images/person.jpg'
import Carousel, {consts} from 'react-elastic-carousel';






const Quote = styled(FaQuoteLeft)`
color: white;
font-size: 1.8rem;`

const Wrapper = styled.section`
width: 100%;
height: max-content;
background-color: #f5f5f5;
text-align: center;
padding: 3rem 2rem;
&  ._sliderBox{
    width: max-content;
    height: max-content;
    padding: 3rem 2rem;
    }
& > p{
    color: #61ac00;
    font-weight: 600;
    font-size: 1.6rem;
}
& > span{
    font-size:4rem;
}`;
const TestimoialBox = styled.div`
position: relative;
height: max-content;
background-color: white;
padding: 3rem ;
text-align: justify;
border-radius: 0.7rem;
&> div{
    display: flex;
    align-items: center;
    & >img{
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        margin-right: 2rem;
        object-fit: cover;
    } 
}
& > p{
    font-size: 1.8rem;
    margin-bottom: 2rem;
}`;

const Name = styled.div`
font-size: 2rem;
margin-bottom: 1.5rem;
`;
const Profession = styled.span`
font-size: 1.5rem;
color: #32af00;
`;

const Ball = styled.div`
position: absolute;
top: -10%;
left: 2rem;
background-color: green;
padding: 1.5rem;
border-radius: 50%;
`;
const StyledCarousel = styled(Carousel)`
    & button.rec-dot_active{
        background-color: rgb(0, 128, 0, 0.7);
        box-shadow: 0px 0px 1px 2.5px rgba(0, 102, 0, 0.9);
    }
`

const LeftBtn = styled(FaHandPointer)`
    font-size: 3rem;
    transform: rotateZ(-90deg) rotateY(180deg);
    color: #006800;
    transition: transform 0.3s;
    &:active{
       transform: scale(1.2) rotateZ(-90deg) rotateY(180deg);
    color: #006800;;
    }
    `
const RightBtn = styled(FaHandPointer)`
    font-size: 3rem;
    color: #006800;
    transform: rotateZ(90deg);
    transition: transform 0.3s;
    &:active{
       transform: scale(1.2) rotateZ(90deg);
    }
`
const Button = styled.button`
    border: none;
    background-color: transparent;
    width: max-content;
    height: max-content;
    align-self: center;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`

function myArrow({ type, onClick, isEdge }) {
    return (
        <Button onClick={onClick}> 
            {type === consts.PREV ? <LeftBtn /> : <RightBtn />}
       </Button>
    )
}

function Testimonials() {
    const carouselRef = useRef("")
    const onNextStart = useCallback((currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(0);
        }
    });

const onPrevStart = useCallback((currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(6);
        }
    });
    const target = useRef(null);
    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1},
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
    return (
        <Wrapper id="testimonial" ref={target}>
            <p>TESTIMONIAL</p>
            <Title className="_client" style={{ margin: '3rem 0px' }}><span>C</span>lients <span className='e'>W</span>e Help</Title>
            <StyledCarousel
                breakPoints={breakPoints}
                itemsToShow={3}
                itemsToScroll={1}
                itemPadding={[40, 10]}
                renderArrow={myArrow}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                pagination={false}
                enableSwipe
            >
                    <TestimoialBox >
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div>
                                    <img src={person} alt="person" />
                                    <div style={ {textAlign: 'left'}}>
                                        <Name>Roger Scott</Name>
                                        <Profession>MARKETING MANAGER</Profession>
                                </div>
                        </div>
                        <Ball><Quote/></Ball>
                        </TestimoialBox>
                    <TestimoialBox >
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div>
                                    <img src={person} alt="person" />
                                    <div style={ {textAlign: 'left'}}>
                                        <Name>Roger Scott</Name>
                                        <Profession>MARKETING MANAGER</Profession>
                                </div>
                        </div>
                        <Ball><Quote/></Ball>
                        </TestimoialBox>
                    <TestimoialBox >
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div>
                                    <img src={person} alt="person" />
                                    <div style={ {textAlign: 'left'}}>
                                        <Name>Roger Scott</Name>
                                        <Profession>MARKETING MANAGER</Profession>
                                </div>
                        </div>
                        <Ball><Quote/></Ball>
                        </TestimoialBox>
                    <TestimoialBox >
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div>
                                    <img src={person} alt="person" />
                                    <div style={ {textAlign: 'left'}}>
                                        <Name>Roger Scott</Name>
                                        <Profession>MARKETING MANAGER</Profession>
                                </div>
                        </div>
                        <Ball><Quote/></Ball>
                        </TestimoialBox>
                    <TestimoialBox >
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div>
                                    <img src={person} alt="person" />
                                    <div style={ {textAlign: 'left'}}>
                                        <Name>Roger Scott</Name>
                                        <Profession>MARKETING MANAGER</Profession>
                                </div>
                        </div>
                        <Ball><Quote/></Ball>
                        </TestimoialBox>
                    <TestimoialBox >
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div>
                                    <img src={person} alt="person" />
                                    <div style={ {textAlign: 'left'}}>
                                        <Name>Roger Scott</Name>
                                        <Profession>MARKETING MANAGER</Profession>
                                </div>
                        </div>
                        <Ball><Quote/></Ball>
                        </TestimoialBox>
            </StyledCarousel>
        </Wrapper>
    )
}

export default Testimonials
