import './App.css';
import Movies from './Movies.js'

let movieList = [
  {
   title: 'Shrek',
   category: 'Kids',
   rating: 'Excellent',
 },
 {
  title: 'Titanic',
  category: 'Drama',
  rating: 'Good',
}
]

function App() {
  return (
    <div className="App">
      <h2>Movie List</h2>
      <Movies movies={movieList}/>      
    </div>
  );
}

export default App;
