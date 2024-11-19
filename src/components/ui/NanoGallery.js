import { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
// import 'nanogallery2/dist/jquery.nanogallery2.min.js'; // Import NanoGallery2 JS
// import 'nanogallery2/dist/css/nanogallery2.min.css'; 
// import '../../styles/nanogallery.scss'

const $ = dynamic(() => import('jquery'), { ssr: false });

const NanoGallery = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = require('jquery');
      require('nanogallery2/dist/jquery.nanogallery2.min.js');

      $("#nanogallery").nanogallery2({
        kind: 'nano_photos_provider2',
        dataProvider: 'https://nano.gallery/ngy2/demo7/nano_photos_provider2/nano_photos_provider2.php',
        // ... other options
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure the plugin is available
      if ($.fn.nanogallery2) {
        $("#nanogallery").nanogallery2({
          kind: 'nano_photos_provider2',
          dataProvider: 'https://nano.gallery/ngy2/demo7/nano_photos_provider2/nano_photos_provider2.php',
          galleryL1DisplayMode: 'fullContent',
          galleryDisplayMode: 'rows',
          galleryMaxRows: 4,
          gallerySorting: 'random',
          thumbnailL1Height: 400,
          thumbnailL1Width: 600,
          thumbnailL1GutterWidth: 20,
          thumbnailL1GutterHeight: 20,
          thumbnailL1BorderHorizontal: 0,
          thumbnailL1BorderVertical: 0,
          thumbnailHeight: 400,
          thumbnailWidth: 'auto',
          thumbnailGutterWidth: 2,
          thumbnailGutterHeight: 2,
          thumbnailBorderHorizontal: 0,
          thumbnailBorderVertical: 0,
          thumbnailAlignment: 'fillWidth',
          thumbnailToolbarImage: null,
          thumbnailToolbarAlbum: null,
          thumbnailL1Label: {
            display: true,
            valign: 'bottom',
            hideIcons: true,
            titleFontSize: '3em',
            align: 'left',
            titleMultiLine: true,
            displayDescription: false,
          },
          thumbnailLabel: {
            display: true,
            position: 'overImageOnBottom',
            hideIcons: true,
            titleFontSize: '1em',
            align: 'center',
            titleMultiLine: true,
            displayDescription: false,
          },
          thumbnailL1DisplayTransition: 'flipUp',
          thumbnailDisplayTransition: 'slideDown',
          thumbnailDisplayTransitionDuration: 500,
          thumbnailDisplayInterval: 30,
          thumbnailL1BuildInit2:
            'title_font-weight_bold|image_scale_0.8|label_left_-25px|label_top_95%|label_rotateZ_-90deg|label_transform-origin_top left',
          thumbnailL1HoverEffect2: 'imageGrayOff|title_color_#46D6AB_#aaaaaa|labelOpacity50',
          touchAnimation: false,
          touchAutoOpenDelay: 800,
          galleryTheme: {
            thumbnail: {
              background: '#111',
              titleShadow: '',
              descriptionShadow: 'none',
              titleColor: '#fff',
              borderColor: '#000',
            },
            navigationBreadcrumb: { background: '#3C4B5B' },
          },
          locationHash: false,
        });
      } else {
        console.error('nanogallery2 is not loaded!');
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>NanoGallery</title>
      </Head>
      <div id="nanogallery" />
    </>
  );
};

export default NanoGallery;
