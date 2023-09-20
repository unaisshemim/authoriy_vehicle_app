import React from 'react'
import Background from 'views/background'
import ReqTable from './ReqTable'

const Request = () => {
  return (
    <Background heading={"Pending Request"}>
      <ReqTable/>
    </Background>
  )
}

export default Request