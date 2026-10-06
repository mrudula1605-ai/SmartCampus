import { useState } from 'react'
import './App.css'

function App() {

  const [page, setPage] = useState('dashboard')
  const [building, setBuilding] = useState('1')
  const [floor, setFloor] = useState('0')

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const getRooms = () => {

    const roomCount =
      building === '1' ? 28 :
      building === '2' ? 10 : 8

    const rooms = []

    for (let i = 1; i <= roomCount; i++) {

      const roomNumber =
        `${building}${floor}${String(i).padStart(2, '0')}`

      rooms.push(roomNumber)
    }

    return rooms
  }


  const askAssistant = () => {

    if (question.toLowerCase().includes('library')) {
      setAnswer('📚 The library is located in Building 2.')
    }

    else if (question.toLowerCase().includes('parking')) {
      setAnswer('🚗 Student parking has 35 available slots and staff parking has 12 available slots.')
    }

    else if (question.toLowerCase().includes('canteen')) {
      setAnswer('🍴 There are two canteens on campus: Main Canteen and Fruit Canteen.')
    }

    else if (question.toLowerCase().includes('classroom')) {
      setAnswer('🏫 Use the Classroom Finder to find free classrooms in each building.')
    }

    else if (question.toLowerCase().includes('auditorium')) {
      setAnswer('🏛️ The auditorium is located near Building 1.')
    }

    else {
      setAnswer('🤖 Sorry, I do not have information about that yet.')
    }
  }


  return (

    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <h2>SmartCampus</h2>

        <p className="campus-name">
          VIT Pune
        </p>

        <nav>

          <button onClick={() => setPage('dashboard')}>
            🏠 Dashboard
          </button>

          <button onClick={() => setPage('classrooms')}>
            🏫 Classrooms
          </button>

          <button onClick={() => setPage('parking')}>
            🚗 Parking
          </button>

          <button onClick={() => setPage('navigation')}>
            🗺️ Navigation
          </button>

          <button onClick={() => setPage('lostfound')}>
            🔍 Lost & Found
          </button>

          <button onClick={() => setPage('emergency')}>
            🚨 Emergency
          </button>

          <button onClick={() => setPage('assistant')}>
            🤖 AI Assistant
          </button>

        </nav>

      </aside>


      {/* MAIN CONTENT */}

      <main className="main-content">


        {/* ================= DASHBOARD ================= */}

        {page === 'dashboard' && (

          <>

            <header className="header">

              <div>

                <h1>
                  Welcome to SmartCampus 👋
                </h1>

                <p>
                  Smart Campus Intelligence Platform
                </p>

              </div>

              <div className="student">
                👤 Student
              </div>

            </header>


            <section className="cards">


              <div className="card">

                <div className="card-icon">
                  🏫
                </div>

                <h3>Classrooms</h3>

                <p>12 Free</p>
                <p>18 Occupied</p>

                <button
                  onClick={() => setPage('classrooms')}
                >
                  Find Classroom →
                </button>

              </div>


              <div className="card">

                <div className="card-icon">
                  🚗
                </div>

                <h3>Parking</h3>

                <p>
                  Student: 35 available
                </p>

                <p>
                  Staff: 12 available
                </p>

                <button
                  onClick={() => setPage('parking')}
                >
                  View Parking →
                </button>

              </div>


              <div className="card">

                <div className="card-icon">
                  🗺️
                </div>

                <h3>Navigation</h3>

                <p>
                  Explore VIT Pune campus
                </p>

                <button
                  onClick={() => setPage('navigation')}
                >
                  Explore Campus →
                </button>

              </div>


              <div className="card">

                <div className="card-icon">
                  🔍
                </div>

                <h3>Lost & Found</h3>

                <p>
                  3 Items Found
                </p>

                <p>
                  2 Recently Reported
                </p>

                <button
                  onClick={() => setPage('lostfound')}
                >
                  View Items →
                </button>

              </div>


              <div className="card">

                <div className="card-icon">
                  🚨
                </div>

                <h3>Emergency</h3>

                <p>
                  No Active Emergency
                </p>

                <button
                  onClick={() => setPage('emergency')}
                >
                  Emergency Center →
                </button>

              </div>


              <div className="card">

                <div className="card-icon">
                  🤖
                </div>

                <h3>AI Assistant</h3>

                <p>
                  Ask about the campus
                </p>

                <button
                  onClick={() => setPage('assistant')}
                >
                  Ask Assistant →
                </button>

              </div>

            </section>


            <section className="section">

              <h2>
                🏢 Campus Overview
              </h2>

              <div className="buildings">

                <div className="building">

                  <h3>Building 1</h3>

                  <p>CS + IT</p>

                  <span>
                    5 Floors
                  </span>

                </div>


                <div className="building">

                  <h3>Building 2</h3>

                  <p>AI & DS</p>

                  <span>
                    5 Floors
                  </span>

                </div>


                <div className="building">

                  <h3>Building 3</h3>

                  <p>AI</p>

                  <span>
                    4 Floors
                  </span>

                </div>


                <div className="building">

                  <h3>Building 4</h3>

                  <p>AIML</p>

                  <span>
                    4 Floors
                  </span>

                </div>

              </div>

            </section>


            <section className="section">

              <h2>
                📍 Campus Facilities
              </h2>

              <div className="facilities">

                <div>
                  📚 Library
                  <br />
                  <span>Building 2</span>
                </div>

                <div>
                  📖 Reading Hall
                  <br />
                  <span>
                    Building 2 • 1st Floor
                  </span>
                </div>

                <div>
                  🏛️ Auditorium
                  <br />
                  <span>
                    Near Building 1
                  </span>
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


            <section className="section">

              <h2>
                🔔 Recent Campus Alerts
              </h2>

              <div className="alerts">

                <p>
                  🟢 Library reading hall is available.
                </p>

                <p>
                  🟡 Student parking is getting busy.
                </p>

                <p>
                  🔵 Building 2 classroom maintenance scheduled.
                </p>

              </div>

            </section>

          </>

        )}


        {/* ================= CLASSROOMS ================= */}

        {page === 'classrooms' && (

          <>

            <header className="header">

              <div>

                <h1>
                  🏫 Classroom Finder
                </h1>

                <p>
                  Find available classrooms across VIT Pune
                </p>

              </div>

            </header>


            <section className="section">

              <h2>
                🏫 Select Classroom Location
              </h2>


              <div className="filters">

                <div>

                  <label>
                    Building
                  </label>

                  <select
                    value={building}
                    onChange={(e) =>
                      setBuilding(e.target.value)
                    }
                  >

                    <option value="1">
                      Building 1 — CS & IT
                    </option>

                    <option value="2">
                      Building 2 — AI & DS
                    </option>

                    <option value="3">
                      Building 3 — AI
                    </option>

                    <option value="4">
                      Building 4 — AIML
                    </option>

                  </select>

                </div>


                <div>

                  <label>
                    Floor
                  </label>

                  <select
                    value={floor}
                    onChange={(e) =>
                      setFloor(e.target.value)
                    }
                  >

                    <option value="0">
                      Ground Floor
                    </option>

                    <option value="1">
                      1st Floor
                    </option>

                    <option value="2">
                      2nd Floor
                    </option>

                    <option value="3">
                      3rd Floor
                    </option>

                    <option value="4">
                      4th Floor
                    </option>

                  </select>

                </div>

              </div>


              <h2>
                Available Classrooms
              </h2>


              <div className="classroom-list">

                {getRooms().map((room, index) => (

                  <div
                    className="card"
                    key={room}
                  >

                    <h3>
                      Room {room}
                    </h3>

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
                      {
                        index % 3 === 0
                          ? '🔴 OCCUPIED'
                          : '🟢 FREE'
                      }
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


        {/* ================= PARKING ================= */}

        {page === 'parking' && (

          <>

            <header className="header">

              <div>

                <h1>
                  🚗 Parking Management
                </h1>

                <p>
                  Check available parking slots
                </p>

              </div>

            </header>


            <section className="cards">

              <div className="card">

                <div className="card-icon">
                  🚗
                </div>

                <h3>
                  Student Parking
                </h3>

                <p>
                  Total Slots: 50
                </p>

                <p>
                  Occupied: 15
                </p>

                <strong>
                  🟢 35 Available
                </strong>

              </div>


              <div className="card">

                <div className="card-icon">
                  🅿️
                </div>

                <h3>
                  Staff Parking
                </h3>

                <p>
                  Total Slots: 30
                </p>

                <p>
                  Occupied: 18
                </p>

                <strong>
                  🟢 12 Available
                </strong>

              </div>

            </section>


            <section className="section">

              <h2>
                Parking Information
              </h2>

              <div className="alerts">

                <p>
                  🟢 Student parking has good availability.
                </p>

                <p>
                  🟡 Staff parking has moderate availability.
                </p>

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


        {/* ================= NAVIGATION ================= */}

        {page === 'navigation' && (

          <>

            <header className="header">

              <div>

                <h1>
                  🗺️ Campus Navigation
                </h1>

                <p>
                  Explore important locations at VIT Pune
                </p>

              </div>

            </header>


            <section className="section">

              <h2>
                🏢 Academic Buildings
              </h2>

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


            <section className="section">

              <h2>
                📍 Important Locations
              </h2>

              <div className="facilities">

                <div>
                  📚 Library
                  <br />
                  <span>Building 2</span>
                </div>

                <div>
                  📖 Reading Hall
                  <br />
                  <span>
                    Building 2 • 1st Floor
                  </span>
                </div>

                <div>
                  🏛️ Auditorium
                  <br />
                  <span>
                    Near Building 1
                  </span>
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


            <button
              className="back-button"
              onClick={() => setPage('dashboard')}
            >
              ← Back to Dashboard
            </button>

          </>

        )}


        {/* ================= LOST AND FOUND ================= */}

        {page === 'lostfound' && (

          <>

            <header className="header">

              <div>

                <h1>
                  🔍 Lost & Found
                </h1>

                <p>
                  Find or report lost items on campus
                </p>

              </div>

            </header>


            <section className="cards">

              <div className="card">

                <div className="card-icon">
                  🎒
                </div>

                <h3>
                  Water Bottle
                </h3>

                <p>
                  Location: Building 1
                </p>

                <strong>
                  🟢 Found
                </strong>

              </div>


              <div className="card">

                <div className="card-icon">
                  📓
                </div>

                <h3>
                  Notebook
                </h3>

                <p>
                  Location: Library
                </p>

                <strong>
                  🔴 Lost
                </strong>

              </div>


              <div className="card">

                <div className="card-icon">
                  🔑
                </div>

                <h3>
                  Keys
                </h3>

                <p>
                  Location: Building 2
                </p>

                <strong>
                  🟢 Found
                </strong>

              </div>

            </section>


            <section className="section">

              <h2>
                Report an Item
              </h2>

              <p>
                Students can report lost or found items
                through the SmartCampus platform.
              </p>

              <button>
                + Report Lost / Found Item
              </button>

            </section>


            <button
              className="back-button"
              onClick={() => setPage('dashboard')}
            >
              ← Back to Dashboard
            </button>

          </>

        )}


        {/* ================= EMERGENCY ================= */}

        {page === 'emergency' && (

          <>

            <header className="header">

              <div>

                <h1>
                  🚨 Emergency Center
                </h1>

                <p>
                  Campus safety and emergency information
                </p>

              </div>

            </header>


            <section className="cards">

              <div className="card">

                <div className="card-icon">
                  🚨
                </div>

                <h3>
                  Emergency Status
                </h3>

                <p>
                  No active emergency
                </p>

                <strong>
                  🟢 Campus Safe
                </strong>

              </div>


              <div className="card">

                <div className="card-icon">
                  🔥
                </div>

                <h3>
                  Fire Emergency
                </h3>

                <p>
                  Follow campus evacuation procedures.
                </p>

              </div>


              <div className="card">

                <div className="card-icon">
                  🏥
                </div>

                <h3>
                  Medical Emergency
                </h3>

                <p>
                  Contact campus authorities immediately.
                </p>

              </div>

            </section>


            <section className="section">

              <h2>
                🔔 Emergency Alerts
              </h2>

              <div className="alerts">

                <p>
                  🟢 No active emergency alerts.
                </p>

                <p>
                  📢 Emergency notifications will
                  appear here.
                </p>

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


        {/* ================= AI ASSISTANT ================= */}

        {page === 'assistant' && (

          <>

            <header className="header">

              <div>

                <h1>
                  🤖 AI Campus Assistant
                </h1>

                <p>
                  Ask questions about the VIT Pune campus
                </p>

              </div>

            </header>


            <section className="section">

              <h2>
                💬 Ask SmartCampus
              </h2>

              <p>
                Try questions like:
              </p>

              <ul>

                <li>
                  Where is the library?
                </li>

                <li>
                  Where is the parking?
                </li>

                <li>
                  Where is the canteen?
                </li>

                <li>
                  Where can I find a classroom?
                </li>

                <li>
                  Where is the auditorium?
                </li>

              </ul>


              <input
                type="text"
                placeholder="Ask a question..."
                value={question}
                onChange={(e) =>
                  setQuestion(e.target.value)
                }
              />


              <br />
              <br />


              <button onClick={askAssistant}>
                Ask Assistant
              </button>


              {answer && (

                <div className="alerts">

                  <p>
                    {answer}
                  </p>

                </div>

              )}

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