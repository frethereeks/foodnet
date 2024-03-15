import TextInput from "../components/TextInput"
import { robin } from "../assets/images"
import { useState } from "react"
import toast from "react-hot-toast"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allUsers, setAllUsers] = useState(JSON.parse(localStorage.getItem("foodnet__users")) || [])

  const handleSubmit = e => {
    e.preventDefault()
    try {
      toast.loading(`Please wait...`, {id: "86065"})
      const findUser = allUsers.find(user => user.email === email.toLowerCase() && user.password === password)
      if(findUser){
        toast.success(`Welcome ${findUser.firstName} ${findUser.lastName}`, {id: "86065", duration: "5000"})
      }
      else{
        toast.error(`Invalid username and password. Please, try again`, {id: "86065", duration: "5000"})
      }
    } catch (error) {
      toast.error(`Something went wrong. Please, try again`, {id: "86065", duration: "5000"})
    }
  }


  return (
    <section className="grid sm:grid-cols-2">
      <div className="hidden sm:block relative h-[80vh]">
        <img src={robin} alt="" className="absolute w-full h-full left-0 top-0 object-cover" />
      </div>
      <form onSubmit={handleSubmit} className="bg-white py-10 px-4 mx-auto flex flex-col justify-center gap-2 w-full max-w-sm">
        <label htmlFor="email" className="text-sm text-slate-500">Email Address</label>
        <input type="email" name="email" id="email" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" required placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password" className="text-sm text-slate-500">Password</label>
        <input type="password" name="password" id="password" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" required placeholder="*********" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-green-700 hover:bg-green-600 rounded-md text-white cursor-pointer py-2 px-4">Login</button>
        <a href="/signup" className="text-sm text-slate-500 text-center -mt-1">Don&apos;t have an account yet? Sign Up</a>
      </form>
    </section>
  )
}

