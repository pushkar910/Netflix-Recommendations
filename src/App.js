import Card from "./Card";
import "./index.css";
import data from "./data";

function App() {
  return (
    <div className="App">
      <h1 className="heading_style">My Top 5 Netflix Series Recommendation</h1>
      {data.map((movie) => {
        return (
          <Card
            imgsrc={movie.imgsrc}
            title={movie.title}
            name={movie.name}
            link={movie.link}
          />
        );
      })}
    </div>
  );
}

export default App;
