import React from 'react';

const SearchBar = ({input, onChange}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     style={{
      padding: "10px",
      width: "250px",
      borderRadius: "10px",
      outline: "none"
     }}
     value={input}
     placeholder={"search conference by name or city"}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar