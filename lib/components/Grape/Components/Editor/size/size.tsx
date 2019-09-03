import { observer } from 'mobx-react-lite';
import React from 'react';
import { TextField } from 'office-ui-fabric-react';

export default observer(({ state, callback }: any) => {
  const change = (e, key) => {
    state.value[key] = e.nativeEvent.target.value;
    callback(state.value);
  };
  return (
    <div
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch'
          }}
        >
          <label
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              margin: '0 10px 0 0'
            }}
          >
            Width
          </label>
          <TextField
            styles={inputStyle}
            value={state.value.width}
            onChange={e => change(e, 'width')}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch'
          }}
        >
          <label
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              margin: '0 10px 0 10px'
            }}
          >
            Height
          </label>
          <TextField
            styles={inputStyle}
            value={state.value.height}
            onChange={e => change(e, 'height')}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 10px 5px',
          alignItems: 'stretch'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch'
          }}
        >
          <label
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              margin: '0 10px 0 0'
            }}
          >
            Min W
          </label>
          <TextField
            styles={inputStyle}
            value={state.value.minWidth}
            onChange={e => change(e, 'minWidth')}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch'
          }}
        >
          <label
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              margin: '0 10px 0 10px'
            }}
          >
            Min H
          </label>
          <TextField
            styles={inputStyle}
            value={state.value.minHeight}
            onChange={e => change(e, 'minHeight')}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 10px 5px',
          alignItems: 'stretch'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch'
          }}
        >
          <label
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              margin: '0 10px 0 0'
            }}
          >
            Min W
          </label>
          <TextField
            styles={inputStyle}
            value={state.value.maxWidth}
            onChange={e => change(e, 'maxWidth')}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch'
          }}
        >
          <label
            style={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              margin: '0 10px 0 10px'
            }}
          >
            Min H
          </label>
          <TextField
            styles={inputStyle}
            value={state.value.maxHeight}
            onChange={e => change(e, 'maxHeight')}
          />
        </div>
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
