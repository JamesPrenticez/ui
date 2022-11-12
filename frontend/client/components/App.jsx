import React, {Suspense, lazy} from 'react'
import { Routes , Route} from "react-router-dom";
import loadable from '@loadable/component'

import Layout from './layout/Layout'
import NotFound from './errors/NotFound'
import InternalServer from './errors/InternalServer'

import Home from './routes/Home'
// const Home = lazy(() => import(/* webpackChunkName: "routes-home" */ './routes/Home'))

// const Admin = lazy(() => import(/* webpackChunkName: "routes-admin" */ './routes/Admin'))
// const Animations = lazy(() => import(/* webpackChunkName: "routes-animations" */ './routes/Animations'))
const Table = loadable(() => import(/* webpackChunkName: "routes-admin" */ './routes/Table'))
const Inputs = loadable(() => import(/* webpackChunkName: "routes-admin" */ './routes/Inputs'))
const Animations = loadable(() => import(/* webpackChunkName: "routes-animations" */ './routes/Animations'))

export default function App() {
  return (
    // <Suspense fallback={<div className='bg-fuchsia-500 text-white h-[100vh] w-[100vw] flex items-center justify-center text-7xl'>Loading...</div>}>
      <Routes>
        <Route path="/error/404" element={<NotFound />} />
        <Route path="/error/500" element={<InternalServer />} />
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home title={"Home"}/>} />
          <Route path="/table" element={<Table title={"Table"}/>} />
          <Route path="/inputs" element={<Inputs title={"Inputs"}/>} />
          <Route path="/animations" element={<Animations title={"Animations"}/>} />
        </Route>
      </Routes>
    // </Suspense>
  )
}