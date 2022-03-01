import React from 'react'
import { useState } from 'react';

export const SearchBar = ({onSearchSubmit}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    onSearchSubmit(inputText);
  }

  return (
    <form className="ui form" onSubmit={handleSubmit}>
  <div className="field">
    <label>Image Search</label>
    <input type="text" name="search" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
  </div>
</form>
  )
}
