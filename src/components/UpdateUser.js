import { getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase-config'
import { doc } from 'firebase/firestore'
function UpdateUser() {
  const { id } = useParams()
  let [user, setUser] = useState({})
  let [oldName, setOldName] = useState('')
  let [oldAge, setOldAge] = useState('')
  let [newName, setNewName] = useState('')
  let [newAge, setNewAge] = useState('')
  useEffect(() => {
    const getUser = async () => {
      const data = await getDoc(doc(db, 'users', id))
      console.log(data)
      setUser({ ...data.data(), id: data.id })
      //   setOldName(user.name)
      //   setOldAge(user.age)
    }
    getUser()
  }, [])
  return (
    <div>
      <h1>{id}</h1>
      <h1>{oldAge}</h1>
      <h1>{oldName}</h1>
    </div>
  )
}
export default UpdateUser
