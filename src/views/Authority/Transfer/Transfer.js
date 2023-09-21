import React from 'react'
import Background from 'views/background'
import ReqTable from './transferReqTable'

const Transfer = () => {
  return (
    <Background heading={"Transfer Request"}>
      <ReqTable/>
    </Background>
  )
}

export default Transfer