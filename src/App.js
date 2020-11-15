import React from 'react';
import './App.css';
import MaskOfAThousandFaces from './MaskOfAThousandFaces';
import { Header, Footer } from '@zanzer-tem/components-library';
function App() {
  return (
    <div className="container">
      <Header/>
      <main className="main">
          <h3>Mask of a Thousand Faces</h3>
          <MaskOfAThousandFaces/>
          <div>
            <p>
            <em>
              'Whoever looks into the mirror of the water will see first of all his own face. 
              Whoever goes to himself risks a confrontation with himself. 
              The mirror does not flatter, it faithfully shows whatever looks into it; namely, the face we never show to the world because we cover it with the persona, the mask of the actor. 
              But the mirror lies behind the mask and shows the true face.'
              </em><b> - Carl Jung</b>
            </p>
          </div>
      </main>
      <Footer/>
  </div>
  );
}

export default App;
