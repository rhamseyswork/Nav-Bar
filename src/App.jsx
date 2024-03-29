//By: Rhamseys Garcia
//Date: 2024-03-29

import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

//Navr Bar
import Nav_Bar from './components/Nav Bar/Nav Bar'
import NavBarData from './components/Nav Bar/Nav Bar Tabs'

//Error 404 Page
import Error404 from './Pages/404'
//Error404 = <div>404 - Page Not Found</div>

const LazyLoadPage = ({ tab }) => {
  const PageComponent = React.lazy(() => import(`./Pages/${tab}`).catch(() => ({ default: () => <Error404 /> })));

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <PageComponent />
      </Suspense>
    );
};


function App() {
  return (
    <>
<Suspense fallback={<div>Nav bar Loading...</div>}>
  <Nav_Bar Tabs={NavBarData.tabs}>
    {NavBarData.title}
  </Nav_Bar>
</Suspense>
    <Routes>
    <Route path='/' element={<div>Home</div>} />
      {NavBarData.tabs.map((tab, index) => (
          <Route key={tab} path={tab} element={<LazyLoadPage tab={tab} />} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>

  );
}




export default App
