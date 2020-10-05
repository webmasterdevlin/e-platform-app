import React, { useEffect, useState } from 'react';

type Props = {
  imageFile?: any | (any & Blob);
};
const ThumbnailImage: React.FC<Props> = ({ imageFile }) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!imageFile?.name) return;

    setLoading(true);

    let reader = new FileReader();

    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  if (!imageFile) return null;
  if (loading) return <h5>loading..</h5>;

  return (
    <img
      alt={imageFile?.name}
      src={thumb ? thumb : 'https://picsum.photos/200'}
    />
  );
};

export default ThumbnailImage;
