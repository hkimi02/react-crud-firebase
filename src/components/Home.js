import { useState, useEffect } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { Card } from '@mui/material'
function Home() {
  const [users, setUsers] = useState([])
  const UserCollectionRef = collection(db, 'users')
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(UserCollectionRef)
      console.log(data)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers()
  }, [UserCollectionRef])
  return (
    <div>
      <h1>list persons</h1>
      <div class="users">
        <div>
          <Grid container>
            {users.map((user) => (
              <Grid item xs={4} key={user.name}>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}
export default Home
