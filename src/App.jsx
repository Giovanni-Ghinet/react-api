import { useEffect } from "react";
import { useState } from "react";

const URL_Attrici = 'https://lanciweb.github.io/demo/api/actresses/';

const fetchActresses = () => {
  return fetch(URL_Attrici)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      return data;
    });
};


function App() {
  const [actressList, setActressList] = useState([]);
  const [selectedActress, setSelectedActress] = useState(null);

  useEffect(() => {
    fetchActresses()
      .then(actressListReceived => {
        setActressList(actressListReceived);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
  <div className="row">
    {actressList.map(actress => (
      <div className="col-md-4 mb-4" key={actress.id || actress.name}>
        <div className="card d-flex flex-column align-items-center text-center">
          <h5 className="card-title mt-2">{actress.name}</h5>
          <div className="container">
            <img
              src={actress.image}
              className="card-img-top"
              alt={actress.name}
              style={{ height: '400px', whidth: '200px', objectFit: 'contain', width: '100%' }}
            />
          </div>
          <div className="card-body d-flex flex-column align-items-center">
            <h6 className="card-subtitle mb-2 text-body-secondary">
                {actress.birth_year} {actress.nationality}
            </h6>
            <div className="card-text flex-grow-1">
              <p>{actress.biography}</p>
            </div>
            <div className="card-text text-danger">
              <strong>Known For:</strong>
              <p>{actress.known_for}</p> 
            </div>
            <div className="card-text text-warning">
              <strong>Awards:</strong>
              <p>{actress.awards}</p> 
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
export default App;
