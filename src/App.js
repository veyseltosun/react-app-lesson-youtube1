
import { useState, useEffect } from 'react';


function App() {
  const [isim, setIsim] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [entered, setEntered] = useState(false);
  const [message1, setMessage1] = useState("");


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

    

    

  };

  useEffect(() => {
     setTimeout(() => {
      setMessage1("Giriş Yapıldı ")
    }, 1000);
   clearTimeout( () => {
      setMessage1("")
    });
  }, []);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      {entered &&  <h3>{message1}</h3> }
      {entered || <h3>Çıkış Yapıldı...</h3>}
      {entered ? (

        <>
          <h2 className='greating'>Welcome {isim} !</h2>
          <button onClick={() => { setEntered(false); setIsim("")}}> Çıkış Yap</button>
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
