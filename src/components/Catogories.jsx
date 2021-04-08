import React, { useEffect, useRef} from 'react'
import styled, {css} from 'styled-components/macro'
import architect from '../images/architect.png'
import apartment from '../images/apartment.png'
import factory from '../images/factory.png'
import house from '../images/house.png'
import properties from './catagoriesData'
import {stagger} from './customLogic/animate'


export const sharedstyle = () => css`
position: relative;
width: 100%;
height: max-content;
margin-top: 15rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`;


const CatWrapper = styled.section`
 ${sharedstyle};
 z-index: 1;
@media screen and (max-width: 768px){
    &{
        margin-top: 50rem;
    }
}
`


export const Title = styled.h1`
font-size: 5rem;
color: black;
& span{
    color : #86ce00;
    font-size: 5.5rem;
}
& span.e{
    color : #df7700;
    font-size: 5.5rem;
}
`

const CatCont = styled.div`
position: relative;
width: 80%;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 0.5rem;
grid-row-gap: 1rem;
height: 20rem;
margin-top: 8rem;
@media screen and (max-width: 768px){
    &{
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 20rem);
        height: max-content;
    }
}
`
const CatDiv = styled.div`
height: 100%;
background-color: #f5f5f5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
transition: 0.3s;
transition-property: filter, color, background-color;
&:hover{
    background-color: #7eac00;
    color: white;
}
&:hover .flaticon{
    filter: invert(100%);
}
`
const Text = styled.span`
font-weight: 600;
font-size: 2rem;
margin-top: 2rem;
`

const Flaticon = styled.img`
object-fit: cover;
width: 8rem;
height: 8rem;
transition: 0.3s;
`;

const PropertyCont = styled.div`
position: relative;
width: 80%;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, max-content);
grid-column-gap: 1.5rem;
grid-row-gap: 2rem;
margin-top: 8rem;
& >div{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
& >div >hr{
    width: 100%;
    border: none;
    height: 1px;
    background-color: rgba(128, 128, 128, 0.3);
    margin-top: 2rem;
}
@media screen and (max-width: 768px){
    &{
        grid-template-columns: repeat(1, 1fr);
    }
}
`


const Country = styled.div`
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
`
const Number_of_properties = styled.div`
padding: 0.5rem 1rem;
border-radius: 0.5rem;
font-size: 1.5rem;
background-color: #f5f5f5;
color: #74b300;
width: max-content;
transition: 0.5s;
cursor: pointer;
&:hover{
    background: #74b300;
    color: white;
}
`;


function Catogories() {
    const target = useRef(null);
    useEffect(() => {
        const propCont = target.current.querySelector('._catagory_box').children
        const flatIcons = target.current.querySelector('._cat_flaticons').children
        const title = target.current.querySelector('._cat_title')
        stagger(title, [-500, 0])
        stagger(flatIcons, [500, 0], 0.2)
        stagger(propCont, [-500, 0], 0.04)
    }, [])
    return (
        <CatWrapper  id="catagories" ref={target}>
            <Title className="_cat_title"> <span className='e'>E</span>xplore Our <span>C</span>atagories & Places</Title>
            <CatCont className="_cat_flaticons">
                <CatDiv>
                    <Flaticon className="flaticon" src={architect}/>
                    <Text>Land</Text>
                </CatDiv>
                <CatDiv>
                    <Flaticon className="flaticon" src={apartment}/>
                    <Text>Commercial</Text>
                </CatDiv>
                <CatDiv>
                    <Flaticon className="flaticon" src={factory}/>
                    <Text>Industrial</Text>

                </CatDiv>
                <CatDiv>
                    <Flaticon className="flaticon" src={house}/>
                    <Text>Residential</Text>
                </CatDiv>
            </CatCont>
            <PropertyCont className="_catagory_box">
                {properties.map((item, index) => {
                    return (
                    <div key={index}>
                        <Country>{item.country}</Country>
                        <Number_of_properties>{item.property}</Number_of_properties>
                        <hr/>
                    </div>
                    )
                })
                }
            </PropertyCont>
           
        </CatWrapper>
    )
}

export default Catogories
