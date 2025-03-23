import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import  Search  from './Pages/Search'
import  Browse  from './Pages/Browse'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <>
                    <Navbar />
                    <Routes>
                      <Route path="/search" element={<Search />} />
                      <Route path="/browse" element={<Browse />} />
                      <Route
                        path="/"
                        element={
                          <>
                            <Banner />
                            <Home />
                          </>
                        }
                      />
                    </Routes>
                  </>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
