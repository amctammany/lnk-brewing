import {
  Box,
  Button,
  Paper,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Fermentable } from "@prisma/client";

export interface FermentableFormProps {
  fermentable?: Fermentable;
  action?: any;
}
type FermentableTextFieldProps = {
  src?: Fermentable;
  name: keyof Fermentable;
};
function capitalizeFirst(str: string) {
  return str.substring(0, 1).toUpperCase().concat(str.slice(1));
}
const FermentableTextField = ({ src, name }: FermentableTextFieldProps) => (
  <TextField
    fullWidth
    name={name}
    label={capitalizeFirst(name)}
    defaultValue={src?.[name]}
  />
);
export const FermentableForm = ({
  fermentable,
  action,
}: FermentableFormProps) => {
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
            <FermentableTextField src={fermentable} name="name" />
          </Grid>

          <Grid xs={12}>
            <FermentableTextField src={fermentable} name="country" />
          </Grid>
          <Grid xs={12}>
            <FermentableTextField src={fermentable} name="usage" />
          </Grid>
          <Grid xs={12}>
            <FermentableTextField src={fermentable} name="description" />
          </Grid>

          <Grid xs={12}>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};
