import React from 'react';
import './App.css';
import MaskOfAThousandFaces from './MaskOfAThousandFaces';
function App() {
  return (
    <div className="container">
      <header >
          <h1>Zanzer's Dungeon</h1>
          <h2><a href="https://zanzersdungeon.com" title="Link to Zanzer's Dungeon; Dungeon Master tools">Dungeon Master Tools</a></h2>
      </header>
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
      <footer>
          Copyright © 2020 <a href="https://zanzersdungeon.com" title="Link to Zanzer's Dungeon; Dungeon Master tools">Zanzer's Dungeon</a>. All rights reserved. 
      </footer>
  </div>
  );
}

export default App;
