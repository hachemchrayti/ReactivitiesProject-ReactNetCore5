import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
function App() {


  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get('https://localhost:5001/api/activities')
      .then(response=>{
        console.log(response)
        setActivities(response.data)
      })
    return () => {
      
    }
  }, [])
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        <List>
        {activities.map((activity: Activity) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
