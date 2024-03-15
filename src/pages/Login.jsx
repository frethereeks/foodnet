import TextInput from "../components/TextInput"
import {robin} from "../assets/images"

export default function Login() {
  return (
    <section className="grid sm:grid-cols-2">
      <div className="hidden sm:block relative h-[80vh]">
        <img src={robin} alt="" className="absolute w-full h-full left-0 top-0 object-cover" />
      </div>
      <form action="" className="bg-white py-10 px-4 mx-auto flex flex-col justify-center gap-2 w-full max-w-sm">
        <TextInput key={'804861'} id={'email'} labelText={'Email Address'} placeholder={'Someone@email.com'} required={true} type={'email'} />
        <TextInput id={'password'} labelText={'Password'} placeholder={'*******'} required={true} type={'password'} key={'804860'} />
        <button type="submit" className="bg-green-700 hover:bg-green-600 rounded-md text-white cursor-pointer py-2 px-4">Login</button>
        <a href="/signup" className="text-sm text-slate-500 text-center -mt-1">Don&apos;t have an account yet? Sign Up</a>
      </form>
    </section>
  )
}

