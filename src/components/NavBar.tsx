import { 
    AppBar,
    Toolbar,
    Typography, 
    Button, 
    IconButton, 
} from "@mui/material"

import SchoolIcon from "@mui/icons-material/School"
import DownIcon from "@mui/icons-material/ArrowDownward"

export const NavBar = () => {
    const handleButtonClick = () => {
        // Scroll to the bottom of the page
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      };

  return (
    <AppBar position="static" color="primary" variant="elevation" elevation={4}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="poke-logo">
            <SchoolIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
            GGHSS - Sarai
          </Typography>
        </div>
        <Button color="inherit" variant="outlined" onClick={handleButtonClick} startIcon={<DownIcon/>}>
          Admissions
        </Button>
      </Toolbar>
    </AppBar>
  )
}
