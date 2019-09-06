import { observer } from 'mobx-react-lite';
import React from 'react';
import Color from '../components/color-picker';
import { observable } from 'mobx';
import { Label } from 'office-ui-fabric-react';

const config = observable({
  isCallout: false,
  key: null,
  pickerRef: null
});
export default observer(({ state, callback }: any) => {
  const colorChange = val => {
    state.value.backgroundColor = val;
    callback(state.value);
  };
  return (
    <div
      className='rsys-attr'
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 10px 5px',
          alignItems: 'stretch'
        }}
      >
        <Label
          className='rsys-at-label'
          style={{
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Color
        </Label>
        <Color
          color={state.value.backgroundColor}
          callback={colorChange}
          config={config}
          keyid='backgroundcolor'
        />
      </div>
    </div>
  );
});
