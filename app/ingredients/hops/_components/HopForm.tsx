import { Box, Button, Paper, TextField } from "@mui/material";
import { Hop } from "@prisma/client";

export interface HopFormProps {
  hop?: Hop;
  action?: any;
}
export const HopForm = ({ hop, action }: HopFormProps) => {
  return (
    <Paper sx={{ bgcolor: "paper.background" }}>
      <Box
        component="form"
        action={action}
        sx={{
          "& .MuiTextField-root": { margin: 1 },
        }}
      >
        <TextField
          fullWidth
          name="name"
          label="Name"
          defaultValue={hop?.name}
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          defaultValue={hop?.description}
        />

        <Button type="submit">Submit</Button>
      </Box>
    </Paper>
  );
};
