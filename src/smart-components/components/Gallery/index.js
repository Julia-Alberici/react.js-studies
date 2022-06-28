import { useState } from "react";
import Button from "../Button";

function PhotosGallery(props) {
  const { photos } = props;
  const [gallery, setGallery] = useState(photos);

  const renderGallery = (img, key) => {
    return (
      <div>
        <img src={img} alt="random" key={key} />
        <div>
          <Button onClick={() => handleRemove(key)}>Remove Photo</Button>
        </div>
      </div>
    );
  };

  const handleRemove = (elKey) => {
    const newGallery = gallery.filter((img, index) => elKey !== index);
    setGallery(newGallery);
  };

  return <div>{gallery.map(renderGallery)}</div>;
}

export default PhotosGallery;
