import { useEffect, useRef } from 'react';
import 'nanogallery2/dist/css/nanogallery2.min.css';
import { nanogallery2 } from 'nanogallery2';

const NanoGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Ensure nanogallery2 is initialized only on the client side
    if (galleryRef.current) {
      nanogallery2(galleryRef.current, {
        itemsBaseURL: 'http://nanogallery2.nanostudio.org/samples/',
        thumbnailWidth: 'auto',
        thumbnailHeight: '200', // Optional: Adjust height as needed
        thumbnailLabel: { position: 'overImageOnBottom' },
        galleryDisplayMode: 'pagination',
        thumbnailAlignment: 'center',
        thumbnailOpenImage: true,
      });
    }
  }, []);

  return (
    <div>
      <h1>Gallery made with nanogallery2</h1>
      <div
        ref={galleryRef}
        data-nanogallery2='{
          "itemsBaseURL": "http://nanogallery2.nanostudio.org/samples/",
          "thumbnailWidth": "auto",
          "thumbnailLabel": {
            "position": "overImageOnBottom"
          },
          "galleryDisplayMode": "pagination",
          "thumbnailAlignment": "center",
          "thumbnailOpenImage": true
        }'
      >
        <a href="berlin1.jpg" data-ngthumb="berlin1t.jpg" data-ngdesc="">
          Berlin 1
        </a>
        <a href="berlin2.jpg" data-ngthumb="berlin2t.jpg" data-ngdesc="">
          Berlin 2
        </a>
        <a href="berlin3.jpg" data-ngthumb="berlin3t.jpg" data-ngdesc="">
          Berlin 3
        </a>
      </div>
    </div>
  );
};

export default NanoGallery;
