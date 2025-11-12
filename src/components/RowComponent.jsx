import React from 'react';

const RowComponent = ({ item }) => {
  return (
    <div className="card" style={{ width: 400 }}>
      <img src={item.imagePath} alt="Row content" />
      <div className="card-body">
        <h3 class="card-title">{item.title}</h3>
        <p class="card-text">{item.text}</p>
      </div>
    </div>
  );
};

export default RowComponent;
