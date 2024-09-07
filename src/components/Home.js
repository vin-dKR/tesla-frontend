import React from 'react'
import styled from 'styled-components'
import Section from './Section'



function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            discription="Schedule a Demo Drive"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
        <Section 
            title="Model Y"
            discription="Schedule a Demo Drive"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
        <Section 
            title="Model 3"
            discription="Schedule a Demo Drive"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model X"
            discription="Schedule a Demo Drive"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Panel Panels"
            discription="Lowest Cost Solar Panels in America"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Solar Roof"
            discription="Produce Clean Energy
            From Your Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Accessories"
            discription=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`