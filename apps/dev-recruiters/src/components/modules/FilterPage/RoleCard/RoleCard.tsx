import React from 'react'
import { AboutContainer, ButtonsContainer, CardContainer, CardContent, Category, Content, TimeContainer, Title } from './styledRoleCard'
import Link from 'next/link'

const RoleCard = () => {
  return (
    <CardContainer>
      <CardContent>
          <Title>Product Lead</Title>
          <Content style={{ fontSize: "1rem" }}>
              Product platform
          </Content>
          <TimeContainer>
              <Category>Time Commitment</Category>
              <Content>5 hrs per week</Content>
          </TimeContainer>
          <AboutContainer>
              <Category>About the role</Category>
              <Content>Join a new Project or Product that aligns with your area of interest!</Content>
          </AboutContainer>
          <ButtonsContainer>
            <Link href={`join/detail`} passHref>
              More Details
            </Link>
        </ButtonsContainer>
        </CardContent>
    </CardContainer>
  )
}

export default RoleCard