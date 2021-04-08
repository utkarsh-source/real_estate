import React, {useRef, useEffect} from 'react' 
import interior_1 from '../images/interior_1.jpg'
import interior_2 from '../images/interior_2.jpg'
import styled from 'styled-components'
import { Title } from '../components/Catogories'
import {stagger} from './customLogic/animate'

const AboutWrapper = styled.section`
width: 100%;
height: max-content;
display: flex;
align-items: center;
overflow-x: hidden;
& > img{
    width: 40rem;
    object-fit: cover;
    height: 100%;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
    @media screen and (max-width:768px){
        display: none;
    }
}`

const Details = styled.article`
flex-grow: 1;
padding: 2rem;
height: max-content;
& > span{
    color: #00b900;
    font-size: 1.6rem;
    margin: 1rem 0px;
}
& > p{
    font-size: 1.4rem;
    color: #868686;
    margin: 1rem 0px;
}
& > div{
    display: flex;
    margin: 2rem 0px;
    flex-wrap: wrap;
}
& > img{
    object-fit: cover;
    width: 100%;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
}
`
const SomeInfo = styled.div`
    margin-right: 3rem;
    
    &> div{
        margin-bottom: 1rem;
        font-size: 4rem;
        & > span{
            font-size: 3rem;
            color: #d16500;
        }
    }
    &> p{
        margin-top: 1rem;
        font-size: 1.5rem;
        color: #40af00;
    }
    @media screen and (max-width: 768px){
        margin: 2rem 0px;
    }
`
function About() {
    const target = useRef(null);
    const title = useRef(null);
    const infoDiv = useRef(null);
    const img_1 = useRef(null);
    const img_2 = useRef(null);
    useEffect(() => {
        stagger(title.current, [-500, 0])
        stagger(infoDiv.current, [500, 0], 0.08)
        stagger(img_1.current, [-500, 0])
        stagger(img_2.current, [500, 0])
    }, [])
    return (
        <AboutWrapper id='about' ref={target}>
            <img ref={img_1} className="img_1"  src={interior_2} alt="interior_2" />
            <Details>
                <span>About Us</span>
                <Title ref={title} className="_title" style={{margin: '1.5rem 0px'}}> <span className='e'>E</span>LXIR <span>A</span> Real <span className='e'>E</span>state Company</Title>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div ref={infoDiv} className="counter_div">
                    <SomeInfo>
                        <div >50</div>
                        <p>YEARS OF EXPERIENCE</p>
                    </SomeInfo>
                    <SomeInfo>
                        <div>210<span>K+</span></div>
                        <p>TOTAL PROPERTIES</p>
                    </SomeInfo>
                    <SomeInfo>
                        <div >450</div>
                        <p>QUALIFIED REALTORS</p>
                    </SomeInfo>
                    <SomeInfo>
                        <div >100</div>
                        <p>TOTAL BRANCHES</p>
                    </SomeInfo>
                </div>
                <img ref={img_2} className="img_2"  src={interior_1} alt={'interior_1'}/>
            </Details>
        </AboutWrapper>
    )
}

export default About
