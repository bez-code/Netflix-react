import Row from '../Components/Row';
import { ENDPOINTS } from '../Services/api';

const Home = () => {
  return (
    <div className="home">
      <Row title="NETFLIX ORIGINALS" endpoint={ENDPOINTS.NETFLIX_ORIGINALS} />
      <Row title="Trending Now" endpoint={ENDPOINTS.TRENDING} />
      <Row title="Top Rated" endpoint={ENDPOINTS.TOP_RATED} />
      <Row title="Action Movies" endpoint={ENDPOINTS.ACTION_MOVIES} />
      <Row title="Comedy Movies" endpoint={ENDPOINTS.COMEDY_MOVIES} />
      <Row title="Horror Movies" endpoint={ENDPOINTS.HORROR_MOVIES} />
      <Row title="Documentaries" endpoint={ENDPOINTS.DOCUMENTARIES} />
    </div>
  );
};

export default Home;
