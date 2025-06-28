function ImageDisplay({ src, alt }) {
  return (
    <div className="image-display">
      <img src={src} alt={alt} />
    </div>
  );
}

export default ImageDisplay;
