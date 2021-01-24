
import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  //using useEffect to make request only when component mounts using empty array as the watch parameter
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/eriklowrance')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;