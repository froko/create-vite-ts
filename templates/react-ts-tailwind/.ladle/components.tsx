import type { GlobalProvider } from '@ladle/react';
import React from 'react';

import '../src/style.css';
import './components.css';

export const Provider: GlobalProvider = ({ children }) => <div>{children}</div>;
