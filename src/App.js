import React, { useState } from 'react';
import DataTable from "./classes/DataTable";
import './App.css';

function App () {
  const [dataset, setDataset] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let body;

    if (loaded) {
        body = <DataTable dataset={dataset} />
    } else {
        fetch('https://data.sfgov.org/resource/nfpa-mg4g.json')
            .then(response => response.json())
            .then(data => {
                setLoaded(true);
                setDataset(data);
            });

        body = <div>loading</div>
    }

   return (
       <div className="App">
         { body }
       </div>
   );
}

export default App;