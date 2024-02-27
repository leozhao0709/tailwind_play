import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import subRoutes from './router/root/subRoutes';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav className="fixed z-50 min-h-16 w-full md:w-48" routes={subRoutes} />
      <div className="detail mt-16 flex-1 md:ml-48 md:mt-0">
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
