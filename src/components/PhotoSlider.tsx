import { Avatar } from "@mui/material"

import gate from '../images/gate.jpeg';
import entrance from '../images/enterance.jpeg';
import garden from '../images/garden.jpeg';
import hall from '../images/hall.jpeg';
import lawn from '../images/lawn.jpeg';
import display from '../images/display.jpeg';

import Carousel from 'react-material-ui-carousel'

import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';

export const PhotoSlider = () => {

  const theme = useTheme();
  
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const imageWidth = isSmallScreen ? 300 : 500;
  const imageHeight = isSmallScreen ? 150 : 250;

  return (
    <Carousel sx={{
      maxWidth: imageWidth, // Adjust the maximum width as needed
      margin: '0 auto', // Center the Carousel horizontally
      // Add other custom styles as needed
    }}
    >
        {
            images.map( (item, i) => 
            <Avatar
              variant="rounded"
              sx={{ bgcolor: 'warning.light', width: imageWidth, height: imageHeight }}
              key={i}
              src={item}
            />
            )
        }
    </Carousel>
  )
}

const images = [gate, entrance, garden, display];