import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !==id );
    setTours(newTours);
  } 
  const fetchTours = async () => {
    setLoading(true)
    try {
      const data = await fetch(url);
      const tour = await data.json();
      setLoading(false);
      setTours(tour);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
   
  }
  useEffect(() => {
    fetchTours();
  },[])
  if(loading) {
    return <h2><Loading /></h2>
  }
  if(tours.length === 0) {
    return <main>
      <h1>No more destination</h1>
      <button className='btn' onClick={() => fetchTours()}>Refresh</button>
    </main>
  }
  return (
    <main>
    < Tours tours={tours} removeTours={removeTours}/>
    </main> 
  )
}

export default App
