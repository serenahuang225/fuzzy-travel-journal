import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} items={item}/>
  })

  return (
    <div>
      <Navbar />
      <div className="cards">
        {cards}
      </div>
      <footer>&copy; Serena S. Huang 2022</footer>
    </div>
  );
}

export default App;
