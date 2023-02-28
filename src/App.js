
import { useState } from 'react';


function App() {
  const [isim, setIsim] = useState("");
  const handleChange = (e) => {
    setIsim(e.target.value);
  }

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <input
      name='isim'
      placeholder=" Name ...  "
      value={isim}
      onChange={handleChange}
      />

      <button>Giriş</button>
      <h2>Giriş yapınız ... </h2>

      
    </div>
  );
}

export default App;
