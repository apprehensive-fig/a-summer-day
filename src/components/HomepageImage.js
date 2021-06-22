import React from 'react';

function HomepageImage() {
  const url = 'https://res.cloudinary.com/dzwpbkn3u/image/upload/v1624192445/cicada_a5ppy7.gif';
  return (
    <img src={url} style={{width: 300}} alt='cicada' />
  );
}

export default HomepageImage;
