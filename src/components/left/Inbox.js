import React from 'react'

//icons
import { HomeOutlinedIcon } from '../../assets/icons'

import { PageTopRow } from './comp/TopRow'
import { AddTask } from './comp'
import { Wrapper } from '../../assets/style/StyledComponent'
import { Input } from '..'
import CompletedRow from '../Todo/CompletedRow'
import { useGlobalContext } from '../../context/context'
const Inbox = () => {
  const { allToDo, showBottomRow, submitHandler } = useGlobalContext()

  const allToDoCompleted = allToDo.filter((item) => item.isCompleted === true)
  const allToDoNotCompleted = allToDo.filter(
    (item) => item.isCompleted === false
  )

  return (
    <Wrapper>
      <PageTopRow title='Tasks' logo={<HomeOutlinedIcon />} />
      <Input
        submitHandler={(e) => {
          submitHandler(e)
        }}
      />
      {showBottomRow && <AddTask />}

      <CompletedRow
        listInTop={allToDoNotCompleted}
        listInAccordion={allToDoCompleted}
        listInTopTitle='allToDoNotCompleted'
        listInAccordionTitle='allToDoCompleted'
        title='completed'
        showNotCompleted
        showCompleted
      />
    </Wrapper>
  )
}

export default Inbox
