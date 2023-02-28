
import { useState } from 'react';


function App() {
  const [isim, setIsim] = useState("");
  const [errorMessage , setErrorMessage] = useState("");

  const handleChange = (event) => {
    setIsim(event.target.value);
  }
  const handleSubmit = (isim) => {

    isim.lenght < 6 ? setErrorMessage("Kullanıcı ismi en az 6 karater olmalırdır.") : 
   setErrorMessage("");
  };

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <input
      name='isim'
      placeholder=" Name ...  "
      value={isim}
      onChange={handleChange}
      />

      <button onClick={() => handleSubmit(isim)}>Giriş</button>
      <br/>
      {errorMessage}
      <h2>Giriş yapınız ... </h2>

      
    </div>
  );
}

export default App;
