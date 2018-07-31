import React from 'react';
import { render } from 'react-dom';

import Hello from './components/Hello/Hello.jsx';
import World from './components/world.jsx';

render(
  <div>
    <Hello />
    <World />
  </div>,
  document.getElementById('app')
);