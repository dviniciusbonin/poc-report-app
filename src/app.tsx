import {
  Button,
  FormControl,
  TextField,
  Box,
  Container,
  Stack,
} from "@mui/material";
import React from "react";

export function App() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState<number | undefined>(undefined);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    alert(`Nome: ${formData.get("name")}, Idade: ${formData.get("age")}`);
    setName("");
    setAge(undefined);
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <h1>Hello, world!</h1>
        <FormControl component="form" onSubmit={handleSubmit} fullWidth>
          <Stack spacing={2}>
            <TextField
              fullWidth
              type="text"
              name="name"
              label="Digite seu nome..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              type="number"
              name="age"
              label="Digite sua idade..."
              value={age ?? ""}
              onChange={(e) =>
                setAge(e.target.value ? parseInt(e.target.value) : undefined)
              }
            />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Container>
  );
}
