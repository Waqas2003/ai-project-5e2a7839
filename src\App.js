import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Pakistan Cricket Team</h1>
      </header>
      <main>
        <section className="team-info">
          <h2>Team Information</h2>
          <ul>
            <li>Captain: Babar Azam</li>
            <li>Coach: Misbah-ul-Haq</li>
            <li>Home Stadium: Gaddafi Stadium, Lahore</li>
          </ul>
        </section>
        <section className="players">
          <h2>Players</h2>
          <ul>
            <li>Babar Azam (Captain)</li>
            <li>Mohammad Rizwan (Wicket-keeper)</li>
            <li>Fakhar Zaman</li>
            <li>Shadab Khan</li>
            <li>Shaheen Afridi</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Pakistan Cricket Team</p>
      </footer>
    </div>
  );
}

export default App;