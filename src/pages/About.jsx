
import { IoMdTrash, IoIosLink } from "react-icons/io"

export default function About() {

  return (
    <main className="flex flex-col gap-6 bg-[#f9f9fb] py-20 px-4 min-h-screen">
      <section className="bg-white max-w-screen-lg w-full mx-auto p-4 rounded-md shad">
        <div className="flex justify-between items-center gap-4 border-b-[.0156rem] border-b-gray-300/50 pb-4">
          <h3 className="font-semibold text-gray-600 text-base">Latest Transaction</h3>
          <button className="font-normal text-blue-700 hover:text-white text-xs bg-blue-50 hover:bg-blue-700 py-2 px-5 rounded-full cursor-pointer">View all</button>
        </div>
        <div className="overflow-x-scroll w-full border-t-[.0156rem] border-t-gray-300/50">
          <table className="w-full mb-3 min-w-48">
            <thead>
              <tr className="border-b-[.0156rem] border-b-gray-300/50 text-gray-400 text-sm text-left py-5">
                <th className="font-normal p-3">To/From</th>
                <th className="font-normal py-3">Date</th>
                <th className="font-normal py-3">Description</th>
                <th className="font-normal py-3">Amount</th>
                <th className="font-normal py-3">Status</th>
                <th className="font-normal py-3">Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-300/50'>
              <tr className="text-gray-400 text-xs whitespace-nowrap">
                <td className="font-normal py-1">
                  <div className="flex gap-2 items-center p-2 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 ring ring-gray-200 ring-offset-1"></div>
                    <h3 className="font-semibold text-gray-600">Daniel Angelo</h3>
                  </div>
                </td>
                <td className="font-medium pr-3 pl-0">2 Oct 2023</td>
                <td className="font-semibold text-sm pr-3 pl-0 text-gray-600">Monthly salary</td>
                <td className="font-medium pr-3 pl-0 text-green-500">+$1,5000.00</td>
                <td className="font-medium pr-3 pl-0 relative"> 
                <label htmlFor="status" className="border border-green-500 rounded-full py-1 px-6 text-green-500 text-xs peer cursor-pointer">Success</label>
                <input type="checkbox" name="" id="status" className="hidden peer" />
                <label htmlFor="status" className="hidden flex-col divide-y divide-gray-300/50 peer-checked:flex bg-white px-4 shad rounded-md min-w-[10rem] absolute top-3/4 z-20">
                  <p className="text-gray-500 p-2 cursor-pointer hover:text-gray-700 hover:font-semibold">Pending</p>
                  <p className="text-gray-500 p-2 cursor-pointer hover:text-gray-700 hover:font-semibold">Success</p>
                  <p className="text-gray-500 p-2 cursor-pointer hover:text-gray-700 hover:font-semibold">Decline</p>
                </label>
                </td>
                <td className="font-medium py-2 pr-3 pl-0">
                  <div className="flex gap-1 items-center">
                    <button className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer p-2 bg-gray-100 hover:bg-blue-100 rounded-full" title="Unlink"><IoIosLink className='text-inherit' /></button>
                    <button className="text-sm text-gray-500 hover:text-white cursor-pointer p-2 bg-gray-100 hover:bg-red-600 rounded-full" title="Delete"><IoMdTrash className='text-inherit' /></button>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-400 text-xs whitespace-nowrap">
                <td className="font-normal py-1">
                  <div className="flex gap-2 items-center p-2 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 ring ring-gray-200 ring-offset-1"></div>
                    <h3 className="font-semibold text-gray-600">Andrew Iduguma</h3>
                  </div>
                </td>
                <td className="font-medium py-2 pr-3 pl-0">15 Dec 2023</td>
                <td className="font-semibold text-sm py-2 pr-3 pl-0 text-gray-600">Second Contract Disbursement</td>
                <td className="font-medium py-2 pr-3 pl-0 text-red-500">-$7,650.00</td>
                <td className="font-medium py-2 pr-3 pl-0"> <button className="border border-red-500 rounded-full py-1 px-6 text-red-500 text-xs">Declined</button></td>
                <td className="font-medium py-2 pr-3 pl-0">
                  <div className="flex gap-1 items-center">
                    <button className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer p-2 bg-gray-100 hover:bg-blue-100 rounded-full" title="Unlink"><IoIosLink className='text-inherit' /></button>
                    <button className="text-sm text-gray-500 hover:text-white cursor-pointer p-2 bg-gray-100 hover:bg-red-600 rounded-full" title="Delete"><IoMdTrash className='text-inherit' /></button>
                  </div>
                </td>
              </tr>
              <tr className="text-gray-400 text-xs whitespace-nowrap">
                <td className="font-normal py-1">
                  <div className="flex gap-2 items-center p-2 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 ring ring-gray-200 ring-offset-1"></div>
                    <h3 className="font-semibold text-gray-600">Gaybriel Santana</h3>
                  </div>
                </td>
                <td className="font-medium pr-3 pl-0">21 Nov 2023</td>
                <td className="font-semibold text-sm pr-3 pl-0 text-gray-600">Monthly salary</td>
                <td className="font-medium pr-3 pl-0 text-orange-500">+$2,449.00</td>
                <td className="font-medium pr-3 pl-0"> <button className="border border-slate-500/50 rounded-full py-1 px-6 text-slate-500 text-xs">Pending</button></td>
                <td className="font-medium py-2 pr-3 pl-0">
                  <div className="flex gap-1 items-center">
                    <button className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer p-2 bg-gray-100 hover:bg-blue-100 rounded-full" title="Unlink"><IoIosLink className='text-inherit' /></button>
                    <button className="text-sm text-gray-500 hover:text-white cursor-pointer p-2 bg-gray-100 hover:bg-red-600 rounded-full" title="Delete"><IoMdTrash className='text-inherit' /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
