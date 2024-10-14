import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Section } from "./components/section";
import { Footer } from "./components/footer";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [newsApiData, setNewsApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://synoize.github.io/tech_news_api/tech_news.json";

  const getNewsFromApi = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setNewsApiData(data);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    getNewsFromApi();
  }, [])

  // loading after fetching data
  if (loading) {
    return <div>
      <p className='h-full text-center mt-72 font-bold text-xl text-gray-600'>Loading . . .</p>
    </div>
  }

  // error after doesn't fetching data
  if (error) {
    return <div>
      <p className='text-center mt-72 font-bold text-xl text-red-600'>ERROR : {error.message}</p>
    </div>
  }

  // search functionality
  const searchData = newsApiData.filter((currNews) => currNews.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Section searchData={searchData} />
      <Footer />
    </>
  )
}
export default App;