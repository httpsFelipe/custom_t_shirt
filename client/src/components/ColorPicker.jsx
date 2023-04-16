import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      {/* Custom colors: presetColors={['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557']} */}
      <SketchPicker color={snap.color} disableAlpha onChange={(color) => state.color = color.hex}/>
    </div>
  )
}

export default ColorPicker