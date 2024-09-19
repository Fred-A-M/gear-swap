import { useEffect, useState } from 'react';
import './DiscoverProfiles.css';

export default function DiscoverProfiles () {
  const [list, setList] = useState(null);

  async function fetchProfiles () {
    try {
      const res = await fetch('http://localhost:3000/gear')
      const data = await res.json();
      setList(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProfiles();
  }, []);


  return (
    <>
     {/* {list.map(function(profile) {
      return (
        <div key={profile.id}>
          {profile.username}
        </div>
      )
    })
    } */}
    </>
  )
}