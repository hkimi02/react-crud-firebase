import { Button, Container, TextField, Typography } from '@mui/material'
import react, { useState } from 'react'
import { db } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import { Route, Routes, useNavigate } from 'react-router-dom'
function About() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const docRef = await addDoc(collection(db, 'users'), {
      name: name,
      age: age,
    })
    setName('')
    setAge('')
    navigate('/', { replace: true })
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
