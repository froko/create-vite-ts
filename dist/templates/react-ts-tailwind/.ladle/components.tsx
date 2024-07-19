import '../src/style.css';
import './components.css';

import type { GlobalProvider } from '@ladle/react';
import React from 'react';

export const Provider: GlobalProvider = ({ children }) => <div>{children}</div>;
