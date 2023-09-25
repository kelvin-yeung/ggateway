import Genre from "./Genre.jsx";

export default function Sidebar({ setResults, setGenre }) {
  return (
    <aside className="flex flex-col sticky top-20 h-full" style={{ minWidth: '12rem'  }}>
      <div className="flex flex-col items-start m-8 mt-0">
        <h1 className="font-bold text-2xl mb-1">Top</h1>
        <Genre genre="action" img="/genres/action.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="action" img="/genres/action.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="action" img="/genres/action.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <h1 className="font-bold text-2xl mt-6 mb-1">Genres</h1>
        <Genre genre="action" img="/genres/action.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="adventure" img="/genres/adventure.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="puzzle" img="/genres/puzzle.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="racing" img="/genres/racing.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="shooter" img="/genres/shooter.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="sports" img="/genres/sports.svg" setResults={setResults} setGenre={setGenre}></Genre>
        <Genre genre="strategy" img="/genres/strategy.svg" setResults={setResults} setGenre={setGenre}></Genre>
      </div>
    </aside>
  );
}
