import React from 'react'
import { Routes , Route} from "react-router-dom";

import Layout from './layout/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import NotFound from './errors/NotFound'
import InternalServer from './errors/InternalServer'

export default function App() {
  return (
    <>
      <Layout>
          <Routes>
            <Route exact path="/" element={<Home title={"Home"}/>} />
            <Route path="/admin" element={<Admin title={"Admin"}/>} />
            <Route path="/error/404" element={<NotFound />} />
            <Route path="/error/500" element={<InternalServer />} />
          </Routes>
      </Layout>
    </>
  )
}