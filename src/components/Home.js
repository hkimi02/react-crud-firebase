import { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import { deleteDoc, collection, getDocs, doc } from 'firebase/firestore'
import {
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import { Card } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import CreateIcon from '@mui/icons-material/Create'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Link } from 'react-router-dom'
function Home() {
  const [users, setUsers] = useState([])
  const UserCollectionRef = collection(db, 'users')
  const [RefDelete, setRefDelete] = useState(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(UserCollectionRef)
      console.log(data)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [UserCollectionRef])

  const handleClickOpen = (Refdelete) => {
    setOpen(true)
    setRefDelete(Refdelete)
    console.log('hello')
    console.log(Refdelete)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDelete = async () => {
    //await db.collection('users').doc(RefDelete).delete()
    console.log(RefDelete)
    if (RefDelete) {
      await deleteDoc(doc(db, 'users', RefDelete))
      setOpen(false)
    }
  }
  return (
    <div>
      <h1>list persons</h1>
      <div className="users">
        <div>
          <Grid container>
            {users.map((user) => (
              <Grid item xs={4} key={user.id}>
                <Card
                  variant="outlined"
                  sx={{ maxWidth: 345, margin: '10px', padding: '10px' }}
                >
                  <CardHeader
                    title={
                      <Typography align="center" variant="h5">
                        Person
                      </Typography>
                    }
                  />
                  <CardContent align="center">
                    <h4>Name : {user.name}</h4>
                    <h4>age : {user.age}</h4>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="text"
                      sx={{ color: 'red' }}
                      onClick={() => handleClickOpen(user.id)}
                    >
                      <DeleteIcon />
                    </Button>
                    <Link to={`/update/${user.id}`} className="link">
                      <Button variant="text" sx={{ color: 'orange' }}>
                        <CreateIcon />
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'confirm dialog to delete person'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are you sure you want to delete this person ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default Home
