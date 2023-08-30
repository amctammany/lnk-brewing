import {
  Box,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";
import type { Hop } from "@prisma/client";

export interface HopDisplayProps {
  hop: Hop | null;
}
export const HopDisplay = ({ hop }: HopDisplayProps) => {
  console.log(hop);
  return (
    <Box sx={{ flexGrow: 1 }}>
      HopDisplay!
      <TableContainer sx={{ margin: "auto", maxWidth: 400 }} component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Prop</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(hop || {}).map(([prop, val]) => (
              <TableRow key={prop}>
                <TableCell component="th" scope="row">
                  {prop}
                </TableCell>
                <TableCell align="right">{val}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
