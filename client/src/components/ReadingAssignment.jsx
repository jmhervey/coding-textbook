import React, {useState} from 'react';
import ReadingList from './ReadingList';
import ReadingPane from './ReadingPane';

const ReadingAssignment = React.memo( props => {

  const [selectedItem, setSelectedItem] = useState(props.items[0])

  const style = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row"
  }

  return (
    <div style={style}>
      <ReadingList items={props.items} onSelect={setSelectedItem}/>
      <ReadingPane {...selectedItem} />
    </div>
  )

})

export default ReadingAssignment;