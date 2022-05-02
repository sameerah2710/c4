import { useState } from "react";

export const Login = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate()
  useSelect((store)=>{
    return store.username;
  });
  const [formData,setFornData] =useState({
    username:"",
    password:""
  })

  const handleChange = (e)=>
{
  setFormData({...formData,[e.target.name]:e.target.value})
}  
const handleSubmit=(e)=>{
  e.preventDefault();
  axios.get("http://localhost:8080/users").then((data)=>{
    data.data.map((e)=>{
      if(e.username === formData.username && e.pass === formData.password)
      {
        dispatch(login(e));
        if(e.role === 'admin'){
          navigate("/orders")
        }
        else{
          navigate("/neworder")
        }
      }
    });
  })
}
return (
    <div>
      <input
        className="username"
        onChange={handleChange}

        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={(handleSubmit)}>Login</button>
    </div>
  );
};
