import {
  Box,
  Button,
  Paper,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Hop } from "@prisma/client";

export interface HopFormProps {
  hop?: Hop;
  action?: any;
}
type HopTextFieldProps = {
  src?: Hop;
  name: keyof Hop;
};
function capitalizeFirst(str: string) {
  return str.substring(0, 1).toUpperCase().concat(str.slice(1));
}
const HopTextField = ({ src, name }: HopTextFieldProps) => (
  <TextField
    fullWidth
    name={name}
    label={capitalizeFirst(name)}
    defaultValue={src?.[name]}
  />
);
export const HopForm = ({ hop, action }: HopFormProps) => {
  return (
    <form action={action}>
      <Paper
        sx={{
          bgcolor: "paper.background",
          p: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12}>
            <HopTextField src={hop} name="name" />
          </Grid>

          <Grid xs={12}>
            <HopTextField src={hop} name="country" />
          </Grid>
          <Grid xs={12}>
            <HopTextField src={hop} name="usage" />
          </Grid>
          <Grid xs={12}>
            <HopTextField src={hop} name="description" />
          </Grid>

          <Grid xs={12}>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};
