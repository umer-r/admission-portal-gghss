import { 
    Box,
    Typography, 
    Table,
    TableRow,
    TableContainer,
    TableHead,
    TableBody,
    TableCell,
    Paper
} from "@mui/material"

import useMediaQuery from '@mui/material/useMediaQuery';

import { useTheme } from '@mui/material/styles';

export const DetailsTable = () => {

        
    const theme = useTheme();
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const tableWidth = isSmallScreen ? 300 : 500;

    function createData(id: number, title: string, value: string) {
        return { id, title, value };
       }
         
       const rows = [
        createData(1, "School", "Govt. Girls Higher Secondary School Sarai-Alamgir"),
        createData(2, "Address", "Inside Main Bazaar, Sarai Alamgir"),
        createData(3, "Postal Code", "	50000"),
        createData(4, "Strength (apx) 2023", "3500"),
        createData(5, "EMIS Code", "34230003"),
        createData(6, "Phone No.", "054-4651358")
       ];
       
  return (
    <Box sx={{ width: tableWidth}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: tableWidth }} aria-label="details table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                <Typography variant="h6">School Details</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(row => 
                            <TableRow key={row.id}>
                                <TableCell><Typography variant="subtitle1">{row.title}</Typography></TableCell>
                                <TableCell align="center"><Typography variant="body2">{row.value}</Typography></TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
    </Box>
  )
}
