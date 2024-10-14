export const AdvertisementSection = () => {

    return <div className="flex flex-col gap-4 border-2 p-4 w-11/12 h-auto bg-slate-200 rounded-xl">
        <p className="text-center text-slate-600">advertisement here</p>
        <span className="flex flex-col gap-4">
            <div className="w-full h-20 bg-slate-50 rounded"></div>
            <span className="flex gap-4">
                <div className="w-full h-20 bg-slate-50 rounded"></div>
                <div className="w-full h-20 bg-slate-50 rounded"></div>

            </span>
            <div className="w-full h-40 bg-slate-50 rounded"></div>
            <span className="flex gap-4">
                <div className="w-full h-28 bg-slate-50 rounded"></div>
                <div className="w-full h-28 bg-slate-50 rounded"></div>
            </span>
            <div className="w-full h-28 bg-slate-50 rounded"></div>
        </span>
    </div>
}