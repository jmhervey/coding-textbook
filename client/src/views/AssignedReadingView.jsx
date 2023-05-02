import * as React from "react"
import { useState, useEffect } from "react"
import ReadingAssignment from "../components/ReadingAssignment"

const AssignedReadingView = () => {

  const [loading, setLoading] = React.useState(true)
  const [assignedReading, setAssignedReading] = useState([])

  //Calls the assigned reading API call to show textbook pages in the Assigned Reading 
  useEffect( () => {
    fetch("/api/assigned-readings")
    .then(response => {
      if(response.ok) return response.json()
      throw response;
    })
    .then(reading => {
      setAssignedReading(reading);
      setLoading(false);
    })
    // TODO: handle error
  },[])

  const items = Object.values(assignedReading)

  //Show "loading" if textbook is still loading
  if(loading) return <>Loading...</>

  return (
    <ReadingAssignment items={items} />
  )
}

export default AssignedReadingView
