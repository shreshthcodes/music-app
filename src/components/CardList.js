import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <div className='box'>
      {
        data.map((user, i) => {
          return (
            <Card
              key={i}
              count={i}
              songUrl={data[i].previewUrl}
              imageUrl={data[i].artworkUrl100}
              songName={data[i].collectionCensoredName}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;