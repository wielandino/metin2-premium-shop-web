type ItemImageProps = {
  imageName: string;
  alt: string;
};

export const ItemImage = ({ imageName, alt }: ItemImageProps) => {
  const imageUrl = "/images/items/" + imageName + ".png";

  return (
    <div className="flex items-center justify-center grey-box min-h-37.5 sm:min-h-45">
      <img
        src={imageUrl}
        alt={alt}
        className="h-auto max-h-32 max-w-32 sm:max-h-40 sm:max-w-40 md:max-h-44 md:max-w-44 object-contain"
      />
    </div>
  );
};
