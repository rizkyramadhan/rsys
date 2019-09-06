import { observer } from 'mobx-react-lite';
import { TextField, Label } from 'office-ui-fabric-react';
import React from 'react';

export default observer(({ state, callback }: any) => {
  const change = (e, key) => {
    state.value[key] = e.nativeEvent.target.value;
    callback(state.value);
  };
  return (
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
        Size
      </Label>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'stretch'
        }}
      >
        <TextField
          styles={inputStyle}
          value={state.value.width}
          onChange={e => change(e, 'fontSize')}
        />
        <Label
          style={{
            width: '50%',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            margin: '0 10px 0 10px'
          }}
        >
          Height
        </Label>
        <TextField
          styles={inputStyle}
          value={state.value.height}
          onChange={e => change(e, 'lineHeight')}
        />
      </div>
    </div>
  );
});

const inputStyle: any = {
  fieldGroup: {
    backgroundColor: '#2b313b',
    border: 0,
    height: '22px'
  },
  field: {
    height: '21px'
  }
};
