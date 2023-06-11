import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { CardContent, CardHeader, Grid } from '@mui/material'
import { Card } from '@mui/material'
function App() {
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
    <div className="App">
      <h1>list persons</h1>
      <div class="users">
        <div>
          <Grid container spacing={3}>
            {users.map((user) => (
              <Grid item xs={4} key={user.name}>
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                  <CardHeader>
                    <h3>person</h3>
                  </CardHeader>
                  <CardContent>
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

export default App
