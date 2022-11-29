import React from 'react';
import Select from 'react-select';

function App() {
   const options = [
     {
       value: "Pink",
       label: "Pink",
       bgcolor: "rgba(255, 5, 218, 0.035)",
       color: "#ff29c6",
     },
     {
       value: "Red",
       label: "Red",
       bgcolor: "rgba(255, 0, 0, 0.27)",
       color: "red",
     },
     {
       value: "Yellow",
       label: "Yellow",
       bgcolor: "rgba(255, 251, 5, 0.27)",
       color: "#fff429",
     },
     {
       value: "Orange",
       label: "Orange",
       bgcolor: "rgba(255, 143, 5, 0.27)",
       color: "orange",
     },
     {
       value: "Purple",
       label: "Purple",
       bgcolor: "rgba(172, 5, 255, 0.27)",
       color: "purple",
     },
     {
       value: "Green",
       label: "Green",
       bgcolor: "rgba(58, 230, 0, 0.27)",
       color: "green",
     },
   ];

   const colorStyles = {
     control: (styles) => ({ ...styles, backgroundColor: "white" }),
     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
       return {
         ...styles,
         backgroundColor: isFocused ? data.bgcolor : "white",
         color: data.color,
       };
     },
     multiValue: (styles, { data }) => {
       return {
         ...styles,
         backgroundColor: data.color,
         color:'white'
       };
     },
     multiValueLabel: (styles, { data }) => {
       return { ...styles, color: "white", backgroundColor: data.color };
     },
   };

   const handleChange = (selectedoption)=>{
    // console.log('selected', selectedoption)
   }
  return (
    <div className="App">
      <div style={{ width:'600px', margin:'auto' , paddingTop:'150px' }}>
      <h2>Select Your Colors</h2>
        <Select 
        options={options} 
        onChange={handleChange} 
        isMulti 
        styles={colorStyles} >
        </Select>
      </div>
    </div>
  );
}

export default App;
