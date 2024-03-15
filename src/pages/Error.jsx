import {  FaLongArrowAltLeft } from 'react-icons/fa'

export default function Error() {
  return (
    <main className='min-h-[80vh] flex flex-col gap-2 justify-center items-center'>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">Page Not Found!</h2>
        <a href='/' className="text-sm sm:text-base md:text-lg font-medium text-slate-500 flex items-center gap-2"><FaLongArrowAltLeft /> Back to Home</a>
    </main>
  )
}
