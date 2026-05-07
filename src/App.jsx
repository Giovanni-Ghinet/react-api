import { useEffect } from "react";
import { useState } from "react";

const URL_Attrici = 'https://lanciweb.github.io/demo/api/actresses/';

const fetchActresses = () => {
  return fetch(URL_Attrici)
    .then(response => {
      return response.json();
    })
    .then(data => {
      
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
            <div
              className="card h-100"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedActress(actress)}
            >
              <img
                src={actress.image}
                className="card-img-top"
                alt={actress.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{actress.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {actress.nationality}, nata nel {actress.birth_year}
                </h6>
                <p className="card-text flex-grow-1">
                  <small>{actress.bio}</small>
                </p>
                <p className="card-text">
                  <strong>Riconoscimenti:</strong> {actress.awards}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
