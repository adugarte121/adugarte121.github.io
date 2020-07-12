import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import MyCarousel from './MyCarousel'
import CreateGroupCard from './CreateGroupCard'

function App() {
  
  return (
    <div>
      <Header />
      <MyCarousel />
      <CreateGroupCard />
      <Footer />
    </div>
  );
}

export default App;
