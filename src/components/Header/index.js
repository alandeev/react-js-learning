import React from 'react';

import { FaPlus } from 'react-icons/fa';

import './Header.css';

export default function Header({ handleSubmit, handleChangeInput, text }){
  return (
    <div className="header item">
      <h1>Task List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" onChange={handleChangeInput} value={text} />
        <button type="submit"><FaPlus /></button>
      </form>
    </div>
  );
}
