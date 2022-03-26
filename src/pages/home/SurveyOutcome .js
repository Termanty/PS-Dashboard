import { useState} from "react";

const SurveyOutcome = () => {

  const [userNPS, setUserNPS]= useState({id:"", User_id:"", Name:"" })
    // const [id, setId] = useState("")
    // const [displayName, setDisplayName] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log({ 
     userNPS
      })
    }


const changeHandler=(event)=>{
  const {name, value}=event.target
  setUserNPS((prevState)=>({...prevState, [name]:value,}));
  console.log(userNPS)
  
}

  
    return (
      <>
        <h3>Net Promoter Score</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Id:</span>
            <input 
              type="number"
              name="id"
              required
              onChange={changeHandler} 
            />
          </label>
          <label>
            <span>User Id:</span>
            <input
              type="number"
              name="User_Id"
              required
              onChange={changeHandler} 
            />
          </label>
          <label>
            <span>Name:</span>
            <input
              type="text"
              name="Name"
              required
              onChange={changeHandler} 
            />
          </label>
          {/* <label>
            <span>Name:</span>
            <input
              type="text"
              required
              onChange={(e) => setDisplayName(e.target.value)} 
              value={displayName} 
            />
          </label>
          <label>
            <span>Survey Text:</span>
            <textarea
              type="number"
              required
              onChange={(e) => setDisplayName(e.target.value)} 
              value={displayName} 
            />
          </label>
          
           */}
          <button className="btn">Save</button>
        </form>
      </>
    )
};

export default SurveyOutcome;

