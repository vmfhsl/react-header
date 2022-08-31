import './App.css';
import Head from './components/Head';
import Test from './components/Test';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [member, setMember] = useState([]);

useEffect(()=>{

  const getData = async () => { 
    try{
    const data = await axios({
        url:'http://localhost:3000/mem',
        method:'get',
    });
  console.log(data.data)  
  setMember(data.data)
} catch(e){console.log(e)}
};
getData()
}
,[])

  return (
   <div>
    <Head 
   member={member}
    />
    <div>
      <ul>
      <li>{member.id}</li>
      <li>{member.이름}</li>
      <li>{member.나이}</li>
      </ul>
    </div>
    <Test />
   </div>
  )
}

export default App;
