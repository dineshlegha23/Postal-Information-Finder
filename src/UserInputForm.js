import React,{useState} from 'react'
import Loading from './Loading'

function UserInputForm({onSearch,onReset,loading}) {
    const [postalCode,setPostalCode]=useState('')
    const [error,setError]=useState('')

    function handleChange(e){
        setError('')
        if(e.target.value==Number(e.target.value)){
            if(postalCode.length>=6){
                setError("Enter only 6 digits")
            }
            setPostalCode(e.target.value)
        }
        else{
            setError("Enter numbers only")
        }
    }


  return (
    <div className='user-input-form'>
        {loading?<Loading loading={loading} />:
    <form onSubmit={(e)=>onSearch(e,postalCode)}>
        <input type='text' placeholder='Enter Postal Code' value={postalCode} onChange={(e)=>handleChange(e)} />
         <div className='error'>{error?<p>{error}</p>:''}</div>
        <div className='buttons'>
        <button type='button' onClick={onReset} className='reset-btn'>Reset</button>
        <button  className='submit-btn' type='submit' disabled={error}>Search</button>
        </div>
    </form>}
    </div>
  )
}

export default UserInputForm