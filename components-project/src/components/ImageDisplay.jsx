import React from "react";

const ImageDisplay = ({ src, alt }) => {
  return (
    <div className="image-display">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageDisplay;
