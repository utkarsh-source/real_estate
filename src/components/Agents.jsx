import React, {useEffect, useRef} from 'react' 
import styled from 'styled-components' 
import { Title } from './Catogories'
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa'
import Agent_1 from '../images/Agent_1.jpg'
import Agent_2 from '../images/Agent_2.jpg'
import Agent_3 from '../images/Agent_3.jpg'
import Agent_4 from '../images/Agent_4.jpg'
import { tilt } from './customLogic/Tilt'
import {staggerUp, stagger} from './customLogic/animate'

const AgentWrapper = styled.section`
position: relative;
width: 100%;
height: max-content;
padding: 5rem 0px;
& > #info{
    margin-top: 8rem;
    margin-left: 6rem;
    width: max-content;
    @media screen and (max-width: 768px){
        margin-top: 4rem;
        margin-left: 2rem;
    }
}
& > #info>  p{
    color: #03ad03;
    font-size: 1.5rem;
}
`

const Bg = styled.div`
position: absolute;
top: 0px;
left: 0px;
width: 70vw;
height: 100%;
bottom: 0px;
background-color: #00012c;
z-index: -999;
`;

const AgentCardDiv = styled.div`
width: 100%;
height: max-content;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 3rem;
margin-top: 6rem;
padding: 0px 1rem;
place-items: center;
@media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
}
`;
const AgentCard = styled.div`
position: relative;
height: max-content;
cursor: pointer;
transform-style: preserve-3d;
transform: perspective(1000px);
`
const AgentImg = styled.img`
object-fit: cover;
width: 100%;
height: 25rem;
border-top-left-radius: 0.5rem;
border-top-right-radius: 0.5rem;
`;

const AgentInfo = styled.div`
width: 100%;
height: max-content;
background-color: #64a100;
color: white;
padding: 3rem 2rem;
border-bottom-left-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
&> p{
    color: inherit;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    transform: translateZ(30px);
}
&> div{
    color: inherit;
    display: flex;
}`;


export const FaBall = styled.div`
border-radius: 50%;
width: 3.5rem;
height: 3.5rem;
display: grid;
place-items: center;
background-color: #28c700;
margin-right: 1rem;
cursor: pointer;
transition: background 0.3s;
transform: translateZ(70px);
&:hover{
    background-color: #00043d;
}
;`


const AgentName = styled.span`
display: inline-block;
color: white;
font-size: 2rem;
margin-bottom: 1rem;
transform: translateZ(50px);
`
export const Fastyle = {
    fontSize: '1.5rem',
    color: 'white',
}

const setting = {
    maxTilt: 30,
    perspective: 700,
    scale: 1,
    speed: 500,
    easing: "cubic-bezier(.12,1.09,0,.75)",
}

function Agents() {
    const target = useRef(null);
    useEffect(() => {
        const cardBox = target.current.querySelector('.agent_box')
        const title = target.current.querySelector("#info")
        tilt(target.current.querySelectorAll('.tilt'), setting);
        staggerUp(cardBox)
        stagger(title, [-500, 0])
    }, [])
    return (
        <AgentWrapper id='agents' ref={target}>
            <Bg/>
            <div id='info'>
                <p>MEET OUR AGENTS</p>
                <Title style={{ color: 'white' }}><span className="e">O</span>ur <span>A</span>gents</Title>
            </div>
            <AgentCardDiv className="agent_box">
                <AgentCard className="tilt">
                    <AgentImg src={Agent_1} alt='Agent_1'/>
                    <AgentInfo>
                        <p>
                            Listing 10 Properties
                        </p>
                        <AgentName>Mike Bochs</AgentName>
                        <div>
                            <FaBall>
                                <FaFacebook style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaTwitter style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaGoogle style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaInstagram style={Fastyle}/>
                            </FaBall>
                        </div>
                    </AgentInfo>
                </AgentCard>
                <AgentCard className="tilt">
                    <AgentImg src={Agent_2} alt='Agent_1'/>
                    <AgentInfo>
                        <p>
                            Listing 10 Properties
                        </p>
                        <AgentName>Mike Bochs</AgentName>
                        <div>
                            <FaBall>
                                <FaFacebook style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaTwitter style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaGoogle style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaInstagram style={Fastyle}/>
                            </FaBall>
                        </div>
                    </AgentInfo>
                </AgentCard>
                <AgentCard className="tilt">
                    <AgentImg src={Agent_3} alt='Agent_1'/>
                    <AgentInfo>
                        <p>
                            Listing 10 Properties
                        </p>
                        <AgentName>Mike Bochs</AgentName>
                        <div>
                            <FaBall>
                                <FaFacebook style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaTwitter style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaGoogle style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaInstagram style={Fastyle}/>
                            </FaBall>
                        </div>
                    </AgentInfo>
                </AgentCard>
                <AgentCard className="tilt">
                    <AgentImg src={Agent_4} alt='Agent_4'/>
                    <AgentInfo>
                        <p>
                            Listing 10 Properties
                        </p>
                        <AgentName>Mike Bochs</AgentName>
                        <div>
                            <FaBall>
                                <FaFacebook style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaTwitter style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaGoogle style={Fastyle}/>
                            </FaBall>
                            <FaBall>
                                <FaInstagram style={Fastyle}/>
                            </FaBall>
                        </div>
                    </AgentInfo>
                </AgentCard>
            </AgentCardDiv>
       </AgentWrapper> 
    )
}

export default Agents
