
import { useState } from 'react';


function App() {
  const [isim, setIsim] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [entered, setEntered] = useState(false);


  const handleChange = (event) => {
    setIsim(event.target.value);
  }
  const handleSubmit = (isim) => {

    if (isim.length < 6) {
      setErrorMessage("Kullanıcı ismi en az 6 karater olmalırdır.");

    }
    else {

      setErrorMessage("");
      setEntered(true)
    }

    setIsim("")

  };

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      {entered ? (

        <>
          <h2>Welcome !!!</h2>
          <button onClick={() => setEntered(false)}> Çıkış Yap</button>
        </>


      ) : (
        <>

          <input
            name='isim'
            placeholder=" Name ...  "
            value={isim}
            onChange={handleChange}
          />

          <button onClick={() => handleSubmit(isim)}>Giriş</button>
          <br />
          {errorMessage ? <h3>{errorMessage}</h3> : <h2>Giriş yapınız ... </h2>}

        </>
      )}






    </div>
  );
}

export default App;
