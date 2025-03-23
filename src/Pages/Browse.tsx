import Row from '../Components/Row';
import { ENDPOINTS } from '../Services/api';

const Browse = () => {
  return (
    <div className="browse">
      <h1>Browse Movies & TV Shows</h1>
      <Row title="TV Shows" endpoint={ENDPOINTS.NETFLIX_ORIGINALS} />
      <Row title="Movies" endpoint={ENDPOINTS.TOP_RATED} />
    </div>
  );
};

export default Browse;
