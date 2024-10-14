import { AdvertisementSection } from "./advertisementContent";
import { ContectForm } from "./contectForm";
import { NewsCard } from "./newsCard";
import { IoReload } from "react-icons/io5";

export const Section = ({ searchData }) => {

    return (
        <>
            <div className="p-4 mt-28 sm:mt-16">
                <h1 className="text-center text-yellow-600 text-xl mb-4">Latest News!</h1>
                <div className="flex justify-between">
                    <ul className="newsScroll flex flex-col gap-4 w-full sm:w-3/6">
                        {
                            searchData.map((news) => {
                                return (
                                    <NewsCard key={news.id} news={news} />
                                )
                            })
                        }
                        <span className="w-full flex justify-center items-center gap-2 text-gray-400 ">More Not Found<IoReload/></span>
                    </ul>
                    <div className="w-2/4 hidden sm:flex justify-end">
                    <AdvertisementSection/>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col gap-6 p-4'>
                <h1 className='text-orange-500 text-2xl text-center font-semibold'>Contect Us </h1>
                <div className="flex justify-around flex-row ">
                    <img src="contect.jpg" alt="contect image" className="hidden sm:block h-96 rounded-2xl" />
                    <ContectForm />
                </div>

            </div>
        </>
    )}