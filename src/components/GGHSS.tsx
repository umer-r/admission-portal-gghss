import {
    Stack,  
    Grid
} from "@mui/material"

import { PhotoSlider } from "./PhotoSlider";
import { DetailsTable } from "./DetailsTable";
import { AdmissionsBox } from "./AdmissionsBox";
import { NavBar } from "./NavBar";

import { useTheme } from '@mui/material/styles';

export const GGHSS = () => {

    const marginVertical = {
        xs: 5, // Spacing for extra small screens
        sm: 8, // Spacing for small screens
        md: 10, // Spacing for medium screens
        lg: 10, // Spacing for large screens
        xl: 10, // Spacing for extra large screens
      };

      const marginHorizontal = {
        xs: 2, // Spacing for extra small screens
        sm: 2, // Spacing for small screens
        md: 2, // Spacing for medium screens
        lg: 2, // Spacing for large screens
        xl: 2, // Spacing for extra large screens
      };

    const theme = useTheme();
  return (
    <>
        <NavBar/>
        <Grid container justifyContent="center">
            <Stack spacing={2} 
                my={marginVertical}
            >
                <PhotoSlider/>
                <DetailsTable/>
                <AdmissionsBox/>
            </Stack>
        </Grid>
    </>
  )
}