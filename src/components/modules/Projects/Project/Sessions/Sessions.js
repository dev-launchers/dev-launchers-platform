import React from 'react'
import { withTheme } from 'styled-components'
import Section from '../Section'
import PercentageBar from './components/PercentageBar'

import { Wrapper, FlexBoxTitleWrapper, FlexBoxVerticalWrapper, Descript, Title } from './StyledSessions'

// import { env } from "../../../../../utils/EnvironmentVariables";
const Sessions = () => (
  <>
    
    <Wrapper>
      <FlexBoxTitleWrapper>
        <Title>Sessions</Title>
        <Descript>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis eleifend nunc, non accumsan lorem. Nulla at rutrum odio, quis laoreet sem. Aliquam venenatis, ipsum eu consequat ultrices, dui dui posuere urna.
        </Descript>
      </FlexBoxTitleWrapper>
      <FlexBoxVerticalWrapper>
        <PercentageBar percentage='75' />
        <PercentageBar percentage='75' />
      </FlexBoxVerticalWrapper>
      <FlexBoxVerticalWrapper>
        <PercentageBar percentage='100' />
        <PercentageBar percentage='100' />
      </FlexBoxVerticalWrapper>
    </Wrapper>
  </>
)

export default withTheme(Sessions)
