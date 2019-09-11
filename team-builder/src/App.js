import React from 'react';
import Team from './Team';
import MemberList from './MemberList';
import './App.css';

function App() {

  const [team, setTeam] = useState([
    {
      name: 'Jason',
      email: 'jason@json.com',
      role: 'Instructor',
    },
    {
      name: 'Don',
      email: 'Don@lambda.com',
      role: 'SL',
    },
    {
      name: 'Raul',
      email: 'raulortizarts@gmail.com',
      role: 'Student',
    },
  ])

  return (
   
  <div>
      <MemberList team={team} />
      <Team team={team} setTeam={setTeam} />
    </div>
  )

}

export default App;
