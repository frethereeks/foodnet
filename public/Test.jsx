// import React from 'react'
// // import PhoneInput from 'react-phone-number-input'
// // import flags from 'react-phone-number-input/flags';
// import 'react-phone-number-input/style.css'
// import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
// import { IoAirplaneOutline } from 'react-icons/io5'
// import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai'
// import { GiAirplaneArrival, GiAirplaneDeparture, GiCalendar, GiAlarmClock, GiAirplane } from 'react-icons/gi'


// const aircrafts = [
//   {
//     id: '739pe823274',
//     name: 'Boeing 737',
//     description: 'The Boeing 737 is a narrow-body aircraft produced by Boeing at its Everett and Renton factories in Washington. Developed to supplement the Boeing 727 on short and thin routes, the twinjet retains the 707 fuselage width and six abreast seating but with two underwing turbofans instead of four.',
//     category: 'Transport',
//     type: 'VIP',
//     origin: null,
//     image: "/pilogue_valuejet.png",
//     status: 'Approved',
//     createdAt: "2024-01-09T00:54:03.983Z",
//     updatedAt: "2024-01-09T00:54:03.983Z",
//     updatedBy: null,
//     flightReport: [Array],
//     pilots: [Array]
//   },
//   {
//     id: '3139pe8278a21',
//     name: 'Aermacchi MB-339',
//     description: 'The Aermacchi MB-339 is a military jet trainer and light attack aircraft designed and manufactured by Italian aviation company Aermacchi.',
//     category: 'Trainer_Aircraft',
//     type: 'Jet_Trainer',
//     origin: null,
//     image: "/pilogue_ibomair.jpg",
//     status: 'Approved',
//     createdAt: "2024-01-09T00:54:03.983Z",
//     updatedAt: "2024-01-09T00:54:03.983Z",
//     updatedBy: null,
//     flightReport: [Array],
//     pilots: [Array]
//   },
//   {
//     id: '86261503452',
//     name: 'Chengdu GJ-2',
//     description: "The Chengdu GJ-2, also known as Wing Loong 2, is an unmanned aerial vehicle (UAV) capable of remotely controlled or autonomous flight developed by the Chengdu Aircraft Industry Group in the People's Republic of China. Intended for use as a surveillance and aerial reconnaissance.",
//     category: 'Combat_Aircraft',
//     type: 'Fighter',
//     origin: null,
//     image: "/pilogue_danaair.jpg",
//     status: 'Approved',
//     createdAt: "2024-01-09T00:54:03.983Z",
//     updatedAt: "2024-01-09T00:54:03.983Z",
//     updatedBy: null,
//     flightReport: [Array],
//     pilots: [Array]
//   },
//   {
//     id: '98874ui3452',
//     name: 'Aeritalia G.222',
//     description: 'The Aeritalia G.222 is a medium-sized STOL military transport aircraft. It was developed to meet a NATO specification, but Italy was initially the only NATO member to adopt the type. The United States purchased 10 G.222s, designating them the C-27A Spartan in the 1990s.',
//     category: 'Helicopter',
//     type: 'Attack',
//     origin: null,
//     image: "/pilogue_alliedair.jpg",
//     status: 'Approved',
//     createdAt: "2024-01-09T00:54:03.983Z",
//     updatedAt: "2024-01-09T00:54:03.983Z",
//     updatedBy: null,
//     flightReport: [Array],
//     pilots: [Array]
//   }
// ]
// export default function App() {
//   const [selectedCategory, setSelectedCategory] = React.useState("All")
//   const [allTableData, setAllTableData] = React.useState([...aircrafts])
//   const [tableData, setTableData] = React.useState([...aircrafts])
//   const allCategories = [...aircrafts.map(el => ({ id: el.id, category: el.category, type: el.type }))]
//   const modalRef = React.useRef(null)
//   const [fromCountry, setFromCountry] = React.useState('Nigeria')
//   const [fromState, setfromState] = React.useState('Abuja Federal Capital Territory')
//   const [toCountry, setToCountry] = React.useState('Nigeria')
//   const [toState, setToState] = React.useState('Abuja Federal Capital Territory')

//   const changeCategory = (category) => {
//     if (category === "All") {
//       setTableData([...allTableData])
//       setAllTableData([...allTableData])
//     }
//     else {
//       setTableData([...aircrafts.filter(el => el.category === category)])
//     }
//     setSelectedCategory(category)
//   }
//   const changeType = (type) => {
//     if (type === "All") {
//       setTableData([...allTableData])
//       setAllTableData([...allTableData])
//     }
//     else {
//       setTableData([...aircrafts.filter(el => el.type === type)])
//     }
//     setSelectedCategory(type)
//   }

//   return (
//     <main className="flex flex-col relative bg-slate-100">
//       <header className="bg-slate-900 flex justify-between items-center p-4">
//         <a href="/" className="text-orange-500 font-bold text-lg sm:text-2xl md:text-3xl">Food<span className="text-white">net</span></a>
//         <a href="/login" className="py-[.3rem] sm:py-2 sm:px-6 px-4 text-white border rounded-[2rem] text-xs bg-slate-800">Login</a>
//       </header>
//       <section className="bg-slate-900 py-10 px-4 flex flex-col gap-4">
//         <p className="py-1 px-2 text-green-700 uppercase text-[.6rem] font-bold bg-slate-800 w-max rounded-full">Everything for you</p>
//         <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold max-w-sm sm:max-w-md md:max-w-lg">Presenting our <span className="text-green-500">High-Flavored</span> Gastronomic Delights</h2>

//       </section>
//       <section className="container mx-auto py-10 my-10 px-6 bg-white flex flex-col gap-4">
//         <div className="flex items-center gap-4 justify-between">
//           <h3 className="flex-1 text-slate-700 font-bold max-w-[18rem] sm:max-w-sm text-3xl sm:text-3xl md:text-4xl">Where would you like to travel?</h3>
//           <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 flex-shrink-0 rounded-full relative overflow-hidden">
//             <img src="/cute-cat.jpg" alt="Cute Cat on a Pilllow" className="absolute h-full w-full object-cover" />
//           </div>
//         </div>
//         <form action="" className="bg-slate-200/50 rounded-lg flex justify-between p-2 sm:p-4 text-slate-700">
//           <input type="text" className="bg-transparent focus:bg-transparent flex-1 text-sm outline-none" placeholder="Search..." required />
//           <button className="p-2 bg-red-500 rounded-md flex-shrink-0 w-6 h-6"></button>
//         </form>
//         <div className="flex gap-4 overflow-x-scroll no-scrollbar py-4 w-full">
//           <button onClick={() => changeCategory("All")} className={`${selectedCategory === "All" ? 'hover:bg-slate-100 bg-red-500 hover:text-slate-700 text-white' : 'bg-slate-100 hover:bg-red-500 text-slate-700 hover:text-white'} text-sm min-w-max py-2 px-6 cursor-pointer rounded-[2rem]`}>All</button>
//           {
//             allCategories.map(el => (
//               <button key={el.id} onClick={() => changeCategory(el.category)} className={`${selectedCategory === el.category ? 'hover:bg-slate-100 bg-red-500 hover:text-slate-700 text-white' : 'bg-slate-100 hover:bg-red-500 text-slate-700 hover:text-white'} text-sm min-w-max py-2 px-6 cursor-pointer rounded-[2rem]`}>{el.category.replace("__", "/").replace("_", " ")}</button>
//             ))
//           }
//         </div>
//         <div className="grid gap-4 py-10 grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center">
//           {
//             tableData.map((el, i) => {
//               const py = i % 2 === 1 ? 'h-[200px]' : 'h-[256px]'
//               return (
//                 <aside key={el.id} className={`relative rounded-3xl overflow-hidden cursor-pointer px-4 ${py} max-w-xs`}>
//                   <img src={el.image} alt={el.name} className='absolute top-0 left-0 object-fill w-full h-full' />
//                   <div className="absolute h-full w-full left-0 top-0 flex items-end flex-end p-4">
//                     <button className="bg-slate-100 hover:bg-slate-700 min-w-max py-1 px-2 sm:px-6 cursor-pointer text-slate-700 hover:text-white text-xs md:text-base rounded-[2rem]">{el.name.replace("__", "/").replace("_", " ")}</button>
//                   </div>
//                 </aside>
//               )
//             })
//           }
//         </div>
//         <div className="flight relative min-h-full ">
//           <img src="/pilogue_danaair.jpg" alt="pilogue_ibomair" className="absolute top-0 left-0 w-full h-2/3 object-cover object-center opacity-60" />
//           <div className="relative my-20 px-5 flex justify-between items-center">
//             <a href="/" className="rounded-full h-10 w-10 bg-white text-slate-700 grid place-items-center flex-shrink-0"><AiOutlineArrowLeft className='text-inherit' /></a>
//             <button onClick={() => modalRef?.current?.showModal()} className={`border border-red-500 hover:bg-white bg-red-500 hover:text-slate-700 text-white text-xs sm:text-sm min-w-max py-2 px-6 cursor-pointer rounded-[2rem]`}>Record Trip</button>
//           </div>
//           <div className="relative px-5 py-10 bg-white shadow  rounded-tr-[2rem] rounded-tl-[2rem] overflow-hidden">
//             <div className="flex gap-4 overflow-x-scroll no-scrollbar w-full">
//               <div className="flex gap-4 overflow-x-scroll no-scrollbar w-max mx-auto bg-slate-100 rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[2rem] rounded-br-[2rem]">
//                 {
//                   allCategories.map(el => (
//                     <button key={el.id} onClick={() => changeType(el.type)} className={`${selectedCategory === el.type ? 'hover:bg-slate-100 bg-red-500 hover:text-slate-700 text-white' : ' hover:bg-red-500 text-slate-700 hover:text-white'} text-sm min-w-max py-2 px-6 cursor-pointer rounded-[2rem]`}>{el.type.replace("__", "/").replace("_", " ")}</button>
//                   ))
//                 }
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       <dialog ref={modalRef} className={`w-full min-h-screen min-w-[105%] sm:min-w-[110%] -translate-x-[10px] pl-[10px] fixed top-0 left-0 pt-10 bg-[#214e6f70] dark:bg-[#072840b0]`}>
//         <button onClick={() => modalRef.current?.close()} className="overlay bg-transparent"></button>
//         <div className="bg-white w-full max-w-md rounded-xl my-10 mx-auto p-6 sm:p-10">
//           <button onClick={() => modalRef.current?.close()} className="cursor-pointer flex justify-center items-center fixed z-50 top-4 right-[15%] rounded-full h-6 w-6 bg-[#cad5df] hover:bg-slate-50 font-thin">
//             <AiOutlineClose className="text-slate-600 text-inherit" />
//           </button>
//           <form action="" className="relative flex flex-col gap-2 max-w-md">
//             <div className="relative bg-white p-3 flex flex-col gap-2 shad rounded-lg">
//               <p className="text-sitetext/50 font-semibold text-sm">Aircraft</p>
//               <div className={`flex items-center gap-3`}>
//                 <label htmlFor='aircraft' className="flex gap-2 items-center p-2 bg-slate-100 rounded-lg flex-shrink-0 cursor-pointer"><IoAirplaneOutline className="text-base text-slate-600" /></label>
//                 <select name="aircraft" id="aircraft" className="relative flex-1 hover:border-primary/90 outline-none py-1 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70">
//                   {
//                     aircrafts?.map(aircraft => <option className='normal-text text-sm bg-white font-sans' key={aircraft.id} value={aircraft.id}>{aircraft.name}</option>)
//                   }
//                 </select>
//               </div>
//             </div>
//             <div className="relative flex flex-col gap-2 py-4">
//               <button type='button' className="absolute top-[52%] left-3/4 -translate-y-1/2 bg-rose-400 rounded-md flex-shrink-0 py-2 px-3 text-white shad z-10">&uarr;&darr;</button>
//               <div className="relative bg-white p-3 mb-2 flex flex-col shad rounded-lg">
//                 <p className="flex gap-2 items-center text-sitetext/50 font-semibold text-sm pb-2"><GiAirplaneDeparture className="text-base text-slate-600 font-bold opacity-70" /> From</p>
//                 <div className={`flex flex-col gap-2`}>
//                   <CountryDropdown value={fromCountry} id='fromCountry' onChange={value => setFromCountry(value)} name='fromCountry' key={9204} classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
//                   <RegionDropdown country={fromCountry} disableWhenEmpty={true} value={fromState} onChange={value => setfromState(value)} name='fromState' key={9205} id='fromState' classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
//                 </div>
//               </div>
//               <div className="relative bg-white p-3 flex flex-col shad rounded-lg">
//                 <p className="flex gap-2 items-center text-sitetext/50 font-semibold text-sm pb-2"><GiAirplaneArrival className="text-base text-slate-600 font-bold opacity-70" /> To</p>
//                 <div className={`flex flex-col gap-2`}>
//                   <CountryDropdown value={toCountry} id='toCountry' onChange={value => setToCountry(value)} name='toCountry' key={9206} classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
//                   <RegionDropdown country={toCountry} disableWhenEmpty={true} value={toState} onChange={value => setToState(value)} name='toState' key={9207} id='toState' classes='hover:border-primary/90 outline-none py-2 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
//                 </div>
//               </div>
//             </div>
//             <div className="relative bg-white p-3 flex flex-col gap-2 shad rounded-lg">
//               <p className="text-sitetext/50 font-semibold text-sm">Date of Flight</p>
//               <div className={`flex items-center gap-3`}>
//                 <label htmlFor='date' className="flex gap-2 items-center p-2 bg-slate-100 rounded-lg flex-shrink-0 cursor-pointer"><GiCalendar className="text-base text-slate-600" /></label>
//                 <input type='date' name='date' id='date' className='flex-1 hover:border-primary/90 outline-none py-1 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
//               </div>
//             </div>
//             <div className="relative bg-white p-3 flex flex-col gap-2 shad rounded-lg">
//               <p className="text-sitetext/50 font-semibold text-sm">Flight Duration</p>
//               <div className={`flex items-center gap-3`}>
//                 <label htmlFor='duration' className="flex gap-2 items-center p-2 bg-slate-100 rounded-lg flex-shrink-0 cursor-pointer"><GiAlarmClock className="text-base text-slate-600" /></label>
//                 <div className="flex-1 flex gap-2">
//                   <input type='number' name='hours' id='hours' required min={0} placeholder='Hours' className='w-1/2 hover:border-primary/90 outline-none py-1 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
//                   <input type='number' name='mins' id='mins' required min={0} placeholder='Mins' className='w-1/2 hover:border-primary/90 outline-none py-1 px-4 border border-gray-300 rounded-md text-sitetext/80 text-sm sm:text-base bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />

//                 </div>
//               </div>
//             </div>
//             <div className={`flex items-stretch gap-3 bg-white p-3 rounded-lg shad`}>
//               <button type='button' className="flex gap-2 items-center px-3 bg-slate-200 rounded-lg flex-shrink-0">
//                 <AiOutlineClose className="text-slate-600 text-inherit" />
//               </button>
//               <button type='submit' className="flex-1 bg-rose-400 hover:bg-rose-600 rounded-md flex-shrink-0 py-2 px-3 text-white shad z-10">Send Record</button>
//             </div>
//           </form>
//         </div>
//       </dialog>
//       <section className="container mx-auto py-10 my-10 px-6 bg-white grid grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] justify-center gap-4">
//         <aside className="flight-report bg-white p-4 rounded-md shad flex flex-col w-full max-w-xs">
//           <div className="relative flex justify-between items-center gap-4 pt-4 border-t-[1.5px] border-dashed border-slate-400 before:absolute before:h-2 before:w-2 before:rounded-full before:-left-1 before:-top-[.3rem] before:bg-rose-400 before:z-10 after:absolute after:h-2 after:w-2 after:rounded-full after:-right-1 after:-top-[.3rem] after:bg-slate-600 after:z-10">
//             <GiAirplane className="text-3xl text-rose-400 p-1 bg-white font-medium absolute left-1/2 -translate-x-1/2 -top-4" />
//             <div className="flex flex-col">
//               <small className="text-[.45rem] tracking-tighter leading-[7px] text-nowrap opacity-70">United States of America</small>
//               <p className="text-xs -tracking-tighter leading-[10px] text-nowrap opacity-70">New York</p>
//             </div>
//             <p className="text-[.8rem] font-semibold text-nowrap">{convertToHours(82.33)}</p>
//             <div className="flex flex-col text-right">
//               <small className="text-[.45rem] tracking-tighter leading-[7px] text-nowrap opacity-70">Great Britain</small>
//               <p className="text-xs -tracking-tighter leading-[10px] text-nowrap opacity-70">England</p>
//             </div>
//           </div>
//           <h4 className="text-xl sm:text-2xl text-center text-slate-700 font-bold py-2">Aermacchi MB-339</h4>
//           <p className="text-xs text-nowrap text-center border-t-2 border-dashed boder-slate-400 pt-2">{new Date().toLocaleString("en-gb", { dateStyle: "long" })}</p>
//         </aside>
//         <aside className="flight-report bg-white p-4 rounded-md shad flex flex-col w-full max-w-xs">
//           <div className="relative flex justify-between items-center gap-4 pt-4 border-t-[1.5px] border-dashed border-slate-400 before:absolute before:h-2 before:w-2 before:rounded-full before:-left-1 before:-top-[.3rem] before:bg-rose-400 before:z-10 after:absolute after:h-2 after:w-2 after:rounded-full after:-right-1 after:-top-[.3rem] after:bg-slate-600 after:z-10">
//             <GiAirplane className="text-3xl text-rose-400 p-1 bg-white font-medium absolute left-1/2 -translate-x-1/2 -top-4" />
//             <div className="flex flex-col">
//               <small className="text-[.45rem] tracking-tighter leading-[7px] text-nowrap opacity-70">United States of America</small>
//               <p className="text-xs -tracking-tighter leading-[10px] text-nowrap opacity-70">New York</p>
//             </div>
//             <p className="text-[.8rem] font-semibold text-nowrap">{convertToHours(82.33)}</p>
//             <div className="flex flex-col text-right">
//               <small className="text-[.45rem] tracking-tighter leading-[7px] text-nowrap opacity-70">Great Britain</small>
//               <p className="text-xs -tracking-tighter leading-[10px] text-nowrap opacity-70">England</p>
//             </div>
//           </div>
//           <h4 className="text-xl sm:text-2xl text-center text-slate-700 font-bold py-2">Aermacchi MB-339</h4>
//           <p className="text-xs text-nowrap text-center border-t-2 border-dashed boder-slate-400 pt-2">{new Date().toLocaleString("en-gb", { dateStyle: "long" })}</p>
//         </aside>
//         <aside className="flight-report bg-white p-4 rounded-md shad flex flex-col w-full max-w-xs">
//           <div className="relative flex justify-between items-center gap-4 pt-4 border-t-[1.5px] border-dashed border-slate-400 before:absolute before:h-2 before:w-2 before:rounded-full before:-left-1 before:-top-[.3rem] before:bg-rose-400 before:z-10 after:absolute after:h-2 after:w-2 after:rounded-full after:-right-1 after:-top-[.3rem] after:bg-slate-600 after:z-10">
//             <GiAirplane className="text-3xl text-rose-400 p-1 bg-white font-medium absolute left-1/2 -translate-x-1/2 -top-4" />
//             <div className="flex flex-col">
//               <small className="text-[.45rem] tracking-tighter leading-[7px] text-nowrap opacity-70">United States of America</small>
//               <p className="text-xs -tracking-tighter leading-[10px] text-nowrap opacity-70">New York</p>
//             </div>
//             <p className="text-[.8rem] font-semibold text-nowrap">{convertToHours(82.33)}</p>
//             <div className="flex flex-col text-right">
//               <small className="text-[.45rem] tracking-tighter leading-[7px] text-nowrap opacity-70">Great Britain</small>
//               <p className="text-xs -tracking-tighter leading-[10px] text-nowrap opacity-70">England</p>
//             </div>
//           </div>
//           <h4 className="text-xl sm:text-2xl text-center text-slate-700 font-bold py-2">Aermacchi MB-339</h4>
//           <p className="text-xs text-nowrap text-center border-t-2 border-dashed boder-slate-400 pt-2">{new Date().toLocaleString("en-gb", { dateStyle: "long" })}</p>
//         </aside>
//       </section>
//       <section className="aircraft-individual container mx-auto p-6 bg-white flex flex-col gap-4">
//         <div className="relative bg-white p-3 flex flex-col md:flex-row-reverse md:items-strech gap-4 shad rounded-lg">
//           <div className="flex-shrink-0 h-[300px] md:min-h-[350px] md:h-full md:max-w-md w-full rounded-lg relative overflow-hidden">
//             <img src="/pilogue_alliedair.jpg" alt="pilogue_alliedair" className="absolute w-full h-full top-0 left-0 object-fill" />
//           </div>
//           <div className="flex-1 flex flex-col justify-center gap-2">
//             <div className="hidden md:flex h-10 w-10 relative rounded-full overflow-hidden">
//               <img src="/pilogue_alliedair.jpg" alt="pilogue_alliedair" className="absolute w-full h-full top-0 left-0 object-fill" />
//             </div>
//             <div className="flex flex-col gap-1 pb-2">
//               <h3 className="tracking-tight text-xl sm:text-2xl md:text-3xl text-slate-700 leading-tight font-bold">Aeritalia G.222</h3>
//               <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-slate-400 w-max border-t border-dashed border-t-slate-300">
//                 <p className="text-slate-600 text-xs tracking-tight leading-tight font-bold flex items-center gap-2"><span className="font-normal scale-70">Category:</span>Helicopter</p> |
//                 <p className="text-slate-600 text-xs tracking-tight leading-tight font-bold flex items-center gap-2"><span className="font-normal scale-70">Type:</span>Fighter</p>
//               </div>
//             </div>
//             <p className="text-xs sm:text-sm md:text-base text-slate-700 text-justify opacity-70 font-medium leading-loose">The Aeritalia G.222 is a medium-sized STOL military transport aircraft. It was developed to meet a NATO specification, but Italy was initially the only NATO member to adopt the type. The United States purchased 10 G.222s, designating them the C-27A Spartan in the 1990s.</p>
//             <div className="flex items-center gap-2 sm:gap-4 md:gap-6 pt-3 my-2 border-t border-dashed border-t-slate-500">
//               <p className="text-white bg-success py-1 px-3 sm:px-6 rounded-[2rem] text-xs tracking-tight">Active</p>
//               <p className="text-slate-600 text-xs tracking-tight">13 Pilots</p>
//               <p className="text-slate-600 text-xs tracking-tight">7,180 Flights</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

// const convertToHours = (duration) => {
//   const pad = x => x > 9 ? x : `0${x}`;
//   const pluralize = (x, variant) => x > 1 ? `${variant}s` : variant
//   if (!duration.toString().includes(".")) return `${pad(duration)}${pluralize(duration, "hr")}:00min`
//   let split = duration.toString().split("."), hour = split[0], mins = Math.round(Number(("." + split[1])) * 60) ?? "00"
//   return `${pad(hour)}${pluralize(hour, "hr")}:${pad(mins)}${pluralize(mins, "min")}`
// }