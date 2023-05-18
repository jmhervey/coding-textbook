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
/*
 * Component for sidebar showing reading list / navigation 
 */
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
    
  function openPopup() {
    window.open('https://www.google.com', 'Popup', 'width=400,height=300');
  }

  return (
    <nav>
      <StyledListHeader>Assigned Reading</StyledListHeader>
      <p>Click the below textbook section to open its context:</p>
      <StyledList>
        {items}
      </StyledList>
      <a href="#" class="hover-link">Help</a>
    </nav>
  )

})

export default ReadingList;