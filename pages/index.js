import Bolo from "../components/Bolo";
import useSWR from 'swr';

const Home = () => {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = 'http://https://clase7-44jb.vercel.app/api/recipes';

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
    {data?.map(d => <Bolo key={d.id} data={d}/> )}
    </> 
  )
};

export default Home;
