import {useState} from 'react'
import './App.css';
import UserInputForm from './UserInputForm';
import LocationInfo from './LocationInfo';


function App() {
  const [locationData,setLocationData]=useState()
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)

  const fetchLocationData=async (e,postalCode)=>{
    e.preventDefault()
    setLoading(true)
    setLocationData('')
    const apiUrl=`https://api.zippopotam.us/in/${postalCode}`
    try{
      const response=await fetch(apiUrl)
      const result=await response.json()
      if(response.ok){
        setError('')
        setLocationData(result)
      }
      else{
        setError("Not Found. Kindly enter a different postalcode.")
      }
    }catch(error){
      setError("Server Error. Please check your network connection.")
    }finally{
      setLoading(false)
    }
  }

  const resetLocationData=()=>{
    setLocationData(null)
    setError(null)
  }

  return (
    <div className='container'>
      <h1>Information Finder</h1>
      <UserInputForm onSearch={fetchLocationData} loading={loading} onReset={resetLocationData} />
      <LocationInfo locationData={locationData} error={error} />
    </div>
  )
}

export default App;
