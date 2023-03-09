import './App.css';
import Row from './Row';
import request from './request'
import Banner from './component/Banner';
import Nav from './component/Nav';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Banner/>
      <Row isPoster={true} title='Netflix Originals' fetchUrl={request.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={request.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
      <Row title='Action' fetchUrl={request.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={request.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={request.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={request.fetchRomanceMovies}/>
      <Row title='Documentries' fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
