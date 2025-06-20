import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, List, ListItem, Button } from '@mui/material';

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/courses').then(response => setCourses(response.data));
  }, []);

  return (
    <Container>
      <List>
        {courses.map(course => (
          <ListItem key={course.id}>
            {course.title}
            <Button href={`/course/${course.id}`}>Start</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Dashboard;
