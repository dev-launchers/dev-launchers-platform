import React from 'react'
import RoleCard from './RoleCard'
import BoxContainer from '../../common/BoxContainer';
import { FilterConatiner, ResultContainer, ResultTitle, RolesContainer } from './styledFilterPage'

const FilterPage = () => {
  return (
    <div>

      <ResultTitle>Search Result</ResultTitle>
      <ResultContainer>
        <FilterConatiner>
        </FilterConatiner>
        <RolesContainer>
          <RoleCard />
          <RoleCard />
          <RoleCard />
          <RoleCard/>
        </RolesContainer>

      </ResultContainer>
       
    </div>
   
  )
}

export default FilterPage