import { Api } from '@pnpm-create-vite/apis'
import React, { useEffect } from 'react'
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

  const apiInstance = new Api('https://pokeapi.co/api/v2', 5000)

  useEffect(() => {
    (async () => {
      const data = await apiInstance.get('/pokemon/', { limit: 300, offset: 0 })
      console.log(data, 'data :::')
    })()
  }, [])

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