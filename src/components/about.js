import { Button, Container, TextField, Typography } from '@mui/material'
import react, { useState } from 'react'

function About() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Name:', name)
    console.log('Age:', age)
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        add a person
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          value={age}
          onChange={(e) => setAge(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  )
}
export default About
