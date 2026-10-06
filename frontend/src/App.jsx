import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('dashboard')
  const [building, setBuilding] = useState('1')
  const [floor, setFloor] = useState('0')
  const getRooms = () => {
  const roomCount = building === '1' ? 28 : building === '2' ? 10 : 8

  const rooms = []

  for (let i = 1; i <= roomCount; i++) {
    const roomNumber = `${building}${floor}${String(i).padStart(2, '0')}`

    rooms.push(roomNumber)
  }

  return rooms
}

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>SmartCampus</h2>
        <p className="campus-name">VIT Pune</p>

        <nav>
          <button onClick={() => setPage('dashboard')}>
            🏠 Dashboard
          </button>

          <button onClick={() => setPage('classrooms')}>
            🏫 Classrooms
          </button>

          <button>
            🚗 Parking
          </button>

          <button>
            🗺️ Navigation
          </button>

          <button>
            🔍 Lost & Found
          </button>

          <button>
            🚨 Emergency
          </button>

          <button>
            🤖 AI Assistant
          </button>
        </nav>
      </aside>


      {/* Main Content */}
      <main className="main-content">

        {page === 'dashboard' && (

          <>
            {/* Header */}
            <header className="header">
              <div>
                <h1>Welcome to SmartCampus 👋</h1>
                <p>Smart Campus Intelligence Platform</p>
              </div>

              <div className="student">
                👤 Student
              </div>
            </header>


            {/* Quick Access Cards */}
            <section className="cards">

              <div className="card">
                <div className="card-icon">🏫</div>
                <h3>Classrooms</h3>
                <p>12 Free</p>
                <p>18 Occupied</p>

                <button onClick={() => setPage('classrooms')}>
                  Find Classroom →
                </button>
              </div>


              <div className="card">
                <div className="card-icon">🚗</div>
                <h3>Parking</h3>
                <p>Student: 35 available</p>
                <p>Staff: 12 available</p>
                <button>View Parking →</button>
              </div>


              <div className="card">
                <div className="card-icon">🗺️</div>
                <h3>Navigation</h3>
                <p>Explore VIT Pune campus</p>
                <button>Explore Campus →</button>
              </div>


              <div className="card">
                <div className="card-icon">🔍</div>
                <h3>Lost & Found</h3>
                <p>3 Items Found</p>
                <p>2 Recently Reported</p>
                <button>View Items →</button>
              </div>


              <div className="card">
                <div className="card-icon">🚨</div>
                <h3>Emergency</h3>
                <p>No Active Emergency</p>
                <button>Emergency Center →</button>
              </div>


              <div className="card">
                <div className="card-icon">🤖</div>
                <h3>AI Assistant</h3>
                <p>Ask about the campus</p>
                <button>Ask Assistant →</button>
              </div>

            </section>


            {/* Campus Overview */}
            <section className="section">
              <h2>🏢 Campus Overview</h2>

              <div className="buildings">

                <div className="building">
                  <h3>Building 1</h3>
                  <p>CS + IT</p>
                  <span>5 Floors</span>
                </div>

                <div className="building">
                  <h3>Building 2</h3>
                  <p>AI & DS</p>
                  <span>5 Floors</span>
                </div>

                <div className="building">
                  <h3>Building 3</h3>
                  <p>AI</p>
                  <span>4 Floors</span>
                </div>

                <div className="building">
                  <h3>Building 4</h3>
                  <p>AIML</p>
                  <span>4 Floors</span>
                </div>

              </div>
            </section>


            {/* Campus Facilities */}
            <section className="section">
              <h2>📍 Campus Facilities</h2>

              <div className="facilities">

                <div>
                  📚 Library
                  <br />
                  <span>Building 2</span>
                </div>

                <div>
                  📖 Reading Hall
                  <br />
                  <span>Building 2 • 1st Floor</span>
                </div>

                <div>
                  🏛️ Auditorium
                  <br />
                  <span>Near Building 1</span>
                </div>

                <div>
                  🍴 Main Canteen
                  <br />
                  <span>Campus</span>
                </div>

                <div>
                  🍎 Fruit Canteen
                  <br />
                  <span>Campus</span>
                </div>

                <div>
                  🏟️ Ground
                  <br />
                  <span>Campus</span>
                </div>

              </div>
            </section>


            {/* Recent Alerts */}
            <section className="section">
              <h2>🔔 Recent Campus Alerts</h2>

              <div className="alerts">
                <p>🟢 Library reading hall is available.</p>
                <p>🟡 Student parking is getting busy.</p>
                <p>🔵 Building 2 classroom maintenance scheduled.</p>
              </div>

            </section>

          </>
        )}


        {/* CLASSROOM PAGE */}

        {page === 'classrooms' && (

          <>
            <header className="header">
              <div>
                <h1>🏫 Classroom Finder</h1>
                <p>Find available classrooms across VIT Pune</p>
              </div>
            </header>


            <section className="section">

  <h2>🏫 Select Classroom Location</h2>

  <div className="filters">

    <div>
      <label>Building</label>

      <select
        value={building}
        onChange={(e) => setBuilding(e.target.value)}
      >
        <option value="1">Building 1 — CS & IT</option>
        <option value="2">Building 2 — AI & DS</option>
        <option value="3">Building 3 — AI</option>
        <option value="4">Building 4 — AIML</option>
      </select>
    </div>


    <div>
      <label>Floor</label>

      <select
        value={floor}
        onChange={(e) => setFloor(e.target.value)}
      >
        <option value="0">Ground Floor</option>
        <option value="1">1st Floor</option>
        <option value="2">2nd Floor</option>
        <option value="3">3rd Floor</option>
        <option value="4">4th Floor</option>
      </select>
    </div>

  </div>


  <h2>Available Classrooms</h2>

  <div className="classroom-list">

  {getRooms().map((room, index) => (

    <div className="card" key={room}>

      <h3>Room {room}</h3>

      <p>
        Branch: {
          building === '1'
            ? 'CS & IT'
            : building === '2'
            ? 'AI & DS'
            : building === '3'
            ? 'AI'
            : 'AIML'
        }
      </p>

      <p>
        Floor: {
          floor === '0'
            ? 'Ground Floor'
            : `${floor} Floor`
        }
      </p>

      <strong>
        {index % 3 === 0 ? '🔴 OCCUPIED' : '🟢 FREE'}
      </strong>

    </div>

  ))}

</div>

            </section>


            <button
              className="back-button"
              onClick={() => setPage('dashboard')}
            >
              ← Back to Dashboard
            </button>

          </>
        )}

      </main>

    </div>
  )
}

export default App