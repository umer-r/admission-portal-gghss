import { 
    Box,
    Typography, 
    Button, 
    Card, 
    CardContent, 
    CardActions, 
} from "@mui/material"

import DownloadIcon from "@mui/icons-material/Download"

import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';

export const AdmissionsBox = () => {

    const form = require('../resource/admissions_form_gghss_sarai.pdf')

    const handleButtonClick = () => {
        // Replace 'path/to/your/file.txt' with the actual file path in your local folder
        const filePath = form;
        const anchor = document.createElement('a');
        anchor.href = filePath;
        anchor.download = 'admissions_form_gghss_sarai.pdf'; // Set the desired name for the downloaded file
        anchor.click();
      };

      const theme = useTheme();
  
      const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
      const boxWidth = isSmallScreen ? 300 : 500;


  return (
    <Box sx={{ maxWidth: boxWidth }}>
        <Card elevation={3}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Admissions</Typography>
                <Typography variant="body2">Click Below to retrieve admissions form</Typography>

            </CardContent>
            <CardActions>
                <Button 
                    size="large" 
                    variant="contained" 
                    startIcon={<DownloadIcon/>} 
                    fullWidth 
                    onClick={handleButtonClick}
                >
                    Download Form
                </Button>
            </CardActions>
        </Card>
    </Box>
  )
}
