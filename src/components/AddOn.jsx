import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import img from '../images/img.jpg'

const Cont = styled.section`
position: relative;
width: 100%;
height: max-content;
padding: 5rem;
margin: 5rem 0px;
background-color: rgb(39, 167, 0, 0.9);
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
& > div >span{
    font-size: 3rem;
    color: white;
}
& > div{
    margin-right: 2rem;
    margin-bottom: 2rem;
}
& > div >p{
    font-size: 1.5rem;
    color: rgb(255, 255, 255, 0.8);
}
& >img{
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -999;
}
`

function AddOn() {
    return (
        <Cont >
            <img src={img} alt="img" />
            <div>
                <span>We help you find your dream house</span>
                <p>Find Best Place for Living</p>
            </div>
            
            <Button style={{ padding: '2rem 4.5rem'}}>Get in Touch</Button>
        </Cont>
    )
}

export default AddOn
