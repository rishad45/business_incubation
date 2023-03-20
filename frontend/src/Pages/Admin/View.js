import React, { useContext, useEffect } from 'react'
import Sidebar from '../../Components/Admin/Sidebar/Sidebar'
import { ApplicationContext } from '../../Contexts/ApplicationContext'
import ViewApp from '../../Components/Admin/ViewApp'
function View(props) { 
  return (
    <div>
      <Sidebar>
        <ViewApp/> 
      </Sidebar>
    </div> 
  )
}

export default View