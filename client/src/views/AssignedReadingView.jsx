import * as React from "react"
import { useState, useEffect } from "react"
import ReadingAssignment from "../components/ReadingAssignment"

const AssignedReadingView = () => {

  const [loading, setLoading] = React.useState(true)
  const [assignedReading, setAssignedReading] = useState([])

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

  if(loading) return <>Loading...</>

  return (
    <ReadingAssignment items={items} />
  )
}

export default AssignedReadingView