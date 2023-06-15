import { getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase-config'
import { doc } from 'firebase/firestore'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function UpdateUser() {
  const { id } = useParams()
  let [user, setUser] = useState({})
  let [oldName, setOldName] = useState('')
  let [oldAge, setOldAge] = useState('')
  let [newName, setNewName] = useState('')
  let [newAge, setNewAge] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    const getUser = async () => {
      const data = await getDoc(doc(db, 'users', id))
      console.log(data)
      setUser({ ...data.data(), id: data.id })
      setOldName(user.name)
      setOldAge(user.age)
    }
    getUser()
  }, [id, user.name, user.age])
  const handleSubmit = async () => {
    await updateDoc(doc(db, 'users', id), { name: newName, age: newAge })
    navigate('/', { replace: true })
  }
  return (
    <div>
      <Container maxWidth="sm" sx={{ marginTop: '40px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          update {oldName}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={oldName}
            onChange={(e) => setNewName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            value={oldAge}
            onChange={(e) => setNewAge(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  )
}
export default UpdateUser
