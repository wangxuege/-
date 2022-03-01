import React from 'react'
import Masonry from 'react-masonry-component'

export const ImageList = ({images}) => {
  const resault = images.map((image) =>{
    return (
      <a 
      href={image.pageURL}
      key={image.id} 
      target="_blank" 
      rel="noopener noreferrer" 
      className='ui medium image'
      >
        <img src={image.webformatURL} alt={image.tags}></img>
      </a>
    );
  });
  return (
    <Masonry className='image-list'>
      {resault}
    </Masonry>
  );
};
