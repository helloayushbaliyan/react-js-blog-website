import { useState, useEffect } from 'react'
// import './App.css'
import { useDispatch } from "react-redux";
import authservice from './AppWrite/auth';
import { logIn, logOut } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';
import { Outlet } from "react-router-dom";

function App() {
  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }))
        } else {
          dispatch(logOut())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !Loading ? (
    <div className=' min-h-screen flex flex-wrap bg-gray-600'>
      <div className=""></div>
      <Header />
      header
      <main>
       todo {/* <Outlet /> */}
      </main>
      <Footer />
      footer
    </div>
  ) : null
}

export default App
