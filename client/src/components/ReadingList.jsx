import React from 'react';
import styled from 'styled-components';

const StyledListHeader = styled.ul`
  font-size: 1.5rem;
  border-bottom: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
`

const StyledList = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 1rem;
`

const ReadingList = React.memo( props => {

  const handleClick = (item) => {
    if(props.onSelect) props.onSelect(item);
  }

  const items = props.items.map(item => (
    <li key={item.id} onClick={()=>handleClick(item)}>
      {item.read ? "☑;" : "☐"}
      {item.title}
    </li>
  ))
    
  return (
    <nav>
      <StyledListHeader>Assigned Readings</StyledListHeader>
      <StyledList>
        {items}
      </StyledList>
    </nav>
  )

})

export default ReadingList;