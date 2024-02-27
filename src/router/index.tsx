import React from 'react';
import { createHashRouter } from 'react-router-dom';
import rootRoute from './root';

type RemixRouter = ReturnType<typeof createHashRouter>;

const router: RemixRouter = createHashRouter([rootRoute]);

export default router;
