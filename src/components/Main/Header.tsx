import Search from "lib/icons/Search";

export default function () {
  return (
    <ul className="Header">
      <div className="Header_title">
        <h1>Jaegar Resto</h1>
        <p>Tuesday, 2 Feb 2021</p>
      </div>
      <div className="Searcher">
          <Search/>
          <input type="text" placeholder="Search for food, coffe, etc.."/>
      </div>
    </ul>
  )
}