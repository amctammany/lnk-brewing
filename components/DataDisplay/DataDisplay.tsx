import {
  Box,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";

export type DataDisplayProps<T extends Object> = {
  title?: string;
  data: T & { urlString: string };
};
export const DataDisplay = <T extends Object>({
  data,
  title,
}: DataDisplayProps<T>) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link href={`${data?.urlString}/edit`}>Edit</Link>
      <TableContainer sx={{ margin: "auto" }} component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} sx={{ fontSize: 32, textAlign: "center" }}>
                {title}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data || {}).map(([prop, val]) => (
              <TableRow key={prop}>
                <TableCell sx={{ maxWidth: "20%" }}>
                  <b>{prop}</b>
                </TableCell>
                <TableCell align="left">{val?.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
