export const NewsCard = ({news}) => {
    const { img_url, title, author, pubDate, content } = news;

    return <li className="clickEffect border-2 px-4 p-2 rounded bg-slate-100 flex flex-col gap-2 cursor-pointer">
        <div className="w-full  bg-slate-50 rounded flex">
            <img src={img_url} alt="news image" loading="lazy" className="w-full h-72 rounded"/>
        </div>
        <p className="text-gray-600 text-lg font-semibold">{title}</p>
        <span>
            <p className="text-yellow-600 text-sm">{author}</p>
            <p className="text-gray-600 text-sm">{pubDate}</p>
        </span>
        <p className="text-gray-600 text-lg">{content}</p>
    </li>
}