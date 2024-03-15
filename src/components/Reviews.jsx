import {reviewsData} from "../data/reviewsData"
import {FaQuoteRight} from "react-icons/fa"

export default function Reviews() {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col md:gap-4 sm:flex-row sm:items-center justify-between">
            <h3 className="text-2xl sm:text-3xl md:text-5xl text-slate-800 font-bold font-serif max-w-lg">Customer Love & Raving Reviews</h3>
            <div className="flex flex-col gap-2">
                <p className="text-xs sm:text-sm text-slate-600">Keep returning with these heartwarming testimonials</p>
                <a href="/reviews" className="bg-orange-500 rounded-full px-6 py-2 text-white text-xs sm:text-sm border border-orange-500 hover:bg-transparent hover:text-orange-500 w-max">View All</a>
            </div>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {
                reviewsData.map(review => (
                    <aside key={review.id} className="bg-white shadow-md p-4 sm:p-6 rounded-md flex flex-col gap-2">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-800 text-white grid place-items-center"><FaQuoteRight className="text-inherit" /></div>
                        <h5 className="font-serif capitalize text-sm sm:text-base md:text-lg text-slate-700 font-semibold">&quot;{review.title}&quot;</h5>
                        <p className="text-xs sm:text-sm text-slate-500">{review.text}</p>
                    </aside>
                ))
            }
        </div>
    </div>
  )
}
