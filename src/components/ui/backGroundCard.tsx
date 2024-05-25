import React from 'react';
import { Box, Image } from '@radius-ui/react';

const BackgroundCard = ({ backgroundImage, children }) => (
  <Box
    as="figure"
    sx={{
      position: 'relative',
      width: '100%',
      maxWidth: 400,
      pt: '56.25%', // 16:9 aspect ratio
    }}
  >
    <Image
      src={backgroundImage}
      alt="Background"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
    {children}
  </Box>
);

export default BackgroundCard;
