import { malidate } from "../assets/images"
import { useState } from "react"
import toast from "react-hot-toast"

export default function SignUp() {
  const [allUsers, setAllUsers] = useState(JSON.parse(localStorage.getItem("foodnet__users")) || [])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (password !== confPassword) {
      toast.error("Passwords do NOT Match")
      return
    }
    else{
      const user = {
        id: Math.random().toString(6).slice(4),
        firstName,
        lastName,
        email: email.toLowerCase(),
        password,
        createdAt: new Date().toISOString()
      }
      const findMatch = allUsers.find(oldUser => oldUser.email === user.email)
      if(findMatch) {
        toast.error("A user with this email already exists")
        return;
      }
      else{
        setAllUsers(prevUsers => [{...user}, ...prevUsers])
        localStorage.setItem("oodnet__users", JSON.stringify(allUsers))
        toast.success(`Welcome ${firstName} ${lastName}. Please, login to continue`)
      }
      
    }
  }


  return (
    <section className="grid sm:grid-cols-2">
      <div className="hidden sm:block sm:col-start-2 relative min-h-[80vh]">
        <img src={malidate} alt="" className="absolute w-full h-full left-0 top-0 object-cover" />
      </div>
      <form onSubmit={handleSubmit} className="sm:col-start-1 sm:row-start-1 bg-white py-10 px-4 mx-auto flex flex-col justify-center gap-2 w-full max-w-sm">
        <label htmlFor="firstname" className="text-sm text-slate-500">First Name</label>
        <input type="text" placeholder="Chijeoma" minLength={3} id="firstname" name="firstname" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" required value={firstName} onChange={e => setFirstName(e.target.value)} />
        <label htmlFor="lastname" className="text-sm text-slate-500">Last Name</label>
        <input type="text" placeholder="Odumeje" minLength={3} id="lastname" name="lastname" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" required value={lastName} onChange={e => setLastName(e.target.value)} />
        <label htmlFor="phone" className="text-sm text-slate-500">Phone Number</label>
        <input type="text" placeholder="+2348041941956" minLength={11} id="phone" name="phone" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" required value={phone} onChange={e => setPhone(e.target.value)} />
        <label htmlFor="email" className="text-sm text-slate-500">Email</label>
        <input type="email" placeholder="someone@email.com" minLength={6} id="email" name="email" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" required value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password" className="text-sm text-slate-500">Password</label>
        <input type="password" placeholder="*******" minLength={6} id="password" name="password" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" required value={password} onChange={e => setPassword(e.target.value)} />
        <label htmlFor="cpassword" className="text-sm text-slate-500">Confirm Password</label>
        <input type="password" placeholder="*******" minLength={6} required id="cpassword" name="cpassword" className="border border-slate-300 border-solid rounded-md px-4 py-2 bg-white hover:border-green-700 focus:border-green-700" value={confPassword} onChange={e => setConfPassword(e.target.value)} />
        <button type="submit" className="bg-green-700 hover:bg-green-600 rounded-md text-white cursor-pointer py-2 px-4">Create Account</button>
        <a href="/login" className="text-sm text-slate-500 text-center -mt-1">Have an account already? Login</a>
      </form>
    </section>
  )
}

