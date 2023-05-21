import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
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
  }, [])
  return (
    <div className="App">
      <h1>React App</h1>
      <div class="users">
        {users.map((user) => {
          return (
            <div>
              <h1>Name : {user.name}</h1>
              <h1>age : {user.age}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
