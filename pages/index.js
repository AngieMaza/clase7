import Bolo from "../components/Bolo";
import useSWR from 'swr';

const Home = () => {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const url = 'http://localhost:3000/api/recipes';

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  console.log(data);
  return (
    <>
    {data?.map(d => <Bolo key={d.id} data={d}/> )}
    </> 
  )
};

export default Home;
