import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import NotFound from './components/errors/NotFound'
import InternalServer from './components/errors/InternalServer'

import Home from './routes/Home'
// const Home = lazy(() => import(/* webpackChunkName: "routes-home" */ './routes/Home'))

const Table = lazy(() =>
  import(/* webpackChunkName: "routes-table" */ './routes/Table')
)
const Animations = lazy(() =>
  import(/* webpackChunkName: "routes-animations" */ './routes/Animations')
)
const Inputs = lazy(() =>
  import(/* webpackChunkName: "routes-inputs" */ './routes/Inputs')
)
const Viewport = lazy(() =>
  import(/* webpackChunkName: "routes-veiwport" */ './routes/Viewport')
)

export default function App() {
  return (
    <Suspense
      fallback={
        <div className='bg-blue-500 text-white h-[100vh] w-[100vw] flex items-center justify-center text-7xl'>
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path='/error/404' element={<NotFound />} />
        <Route path='/error/500' element={<InternalServer />} />
        <Route element={<Layout />}>
          <Route exact path='/' element={<Home title={'Home'} />} />
          <Route path='/table' element={<Table title={'Table'} />} />
          <Route path='/inputs' element={<Inputs title={'Inputs'} />} />
          <Route path='/animations' element={<Animations title={'Animations'} />}/>
        </Route>
        <Route path='/viewport' element={<Viewport title={'Viewport'} />}/>
      </Routes>
    </Suspense>
  )
}
