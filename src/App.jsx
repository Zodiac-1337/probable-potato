
import { Button, DatePicker, Input } from 'antd';
import './App.css'
import { useState } from 'react';

function App() {

  const [data, setData] = useState('')
  const [firstName, setFirstName] = useState('')

  const sendData = async () => {
    const response = await fetch('https://5c16d7330a26280c.mokky.dev/data', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: data,
        firstName,
      })
    })
    return response
  }

  console.log(data)

  const onChange = (_, dateString) => {
    setData(dateString);
  };
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    sendData()
  }

  return (
    <form onSubmit={onSubmit}>
       <DatePicker onChange={onChange} />
       <Input value={firstName} onChange={firstNameChange} placeholder='first name'/>
       <Button htmlType='submit'>Send Date</Button>
    </form>
  )
}

export default App
