import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <br />
      <br />
      <br />
      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <>HIII</>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<MainPage />} />
    //       {/* <Route path='login' element={<LoginPage />} /> */}
    //       <Route path='/pokemon/:id' element={<DetailPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App