import "./styles.css";
import violin from "./violin.jpg";
import { useState } from "react";

var musicdb = {
  Feelgood: [
    { name: "Roobaroo", rating: "4.5/5" },
    { name: "Kun Faya Kun", rating: "4.2/5" },
    { name: "Yun Hi Chala Cha", rating: "4.0/5" },
    { name: "Kar Gayi Chull", rating: "3.8/5" },
    { name: "London Thumakda ", rating: "4.8/5" }
  ],

  Relaxed: [
    { name: "Phir Le Aaya Dil", rating: "4.8/5" },
    { name: "Jugni", rating: "3.0/5" },
    { name: "Kabira", rating: "4.5/5" },
    { name: "Tujhe Bhula Diya ", rating: "4.1/5" },
    { name: "Khwaja Mere Khwaja", rating: "5/5" }
  ],

  sad: [
    { name: "Jag Soona Soona Lage", rating: "3.8/5" },
    { name: "Agar Tum Saath Ho", rating: "4.5/5" },
    { name: "Tum Hi Ho", rating: "5/5" },
    { name: "Bhula Dena", rating: "4.6/5" },
    { name: "Humdard", rating: "5/5" }
  ],

  Romantic: [
    { name: "Tum Se Hi", rating: "4.8/5" },
    { name: "Pee Loon", rating: "4.2/5" },
    { name: "Pehli Nazar Mein", rating: "3.2/5" },
    { name: "Tu Jaane Na", rating: "4.1/5" },
    { name: "Dil Diyan Gallan", rating: "3.8/5" }
  ],

  Roadtrip: [
    { name: "Dil Chahta Hai", rating: "4.2/5" },
    { name: "Khwabon Ke Parindey", rating: "3.6/5" },
    { name: "Suhana Safar Aur Ye", rating: "3.9/5" },
    { name: "Ilahi", rating: "4.5/5" },
    { name: "Hairat ", rating: "4.2/5" }
  ],

  Inspiration: [
    { name: "Teri Mittii", rating: "4.5/5" },
    { name: "Apna Time Aayega", rating: "5/5" },
    { name: "Shaabaashiyaan", rating: "4.0/5" },
    { name: "Kar Har Maidaan Fateh", rating: "4.8/5" },
    { name: "Zinda", rating: "4.2/5" }
  ]
};

export default function App() {
  function Header() {
    return <img src={violin} alt="violin" />;
  }

  const [selectedGenre, setGenre] = useState("Inspiration");
  function categoryClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Mood Song Recommender</h1>
      <h2>{Header()}</h2>
      <p>What is your mood ?</p>

      {Object.keys(musicdb).map((genre) => (
        <button
          className="primarybutton"
          onClick={() => categoryClickHandler(genre)}
        >
          {genre}
        </button>
      ))}

      <div className="division">
        <ul className="ul">
          {musicdb[selectedGenre].map((music) => (
            <li className="list" key={music.name}>
              <div>{music.name}</div>

              <div>{music.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
