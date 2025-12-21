import { useState } from "react";
import Search from "./componenets/Search";
import FoodList from "./componenets/FoodList";
import Nav from "./componenets/Nav";
import "./App.css";
import Container from "./componenets/Container";
import InnerContainer from "./componenets/InnerContainer";
import FoodDetails from "./componenets/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
