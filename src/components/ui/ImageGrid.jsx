import Image from "next/image";

function ImageGrid() {
  const images =  [
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A serene landscape with rolling hills and a vibrant sky."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A bustling city street at night with bright neon lights."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A close-up of a beautiful flower blooming in spring."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A tranquil beach with crystal clear water and soft sand."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A group of friends enjoying a picnic on a sunny day."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A majestic castle overlooking a lush green valley."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A delicious plate of pasta topped with fresh herbs."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A stunning view of autumn foliage in a forest."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A happy dog playing fetch in an open field."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A woman smiling in a field of sunflowers."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "A cozy cabin surrounded by snow-covered trees."
      },
      {
        "url": "https://placeholder.com/800x600",
        "alt": "An astronaut floating in the vastness of space."
      }
    ]
  
  

  return (
    <div className="grid grid-cols-6">
      {images.map((image) => (
        <Image className="w-full h-full" src={image.url} width={250} height={250} alt={image.alt} />
      ))}
    </div>
  );
}

export default ImageGrid;
