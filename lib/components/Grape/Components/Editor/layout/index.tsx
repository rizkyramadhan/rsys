import { observer } from 'mobx-react-lite';
import React from 'react';
import AlignItems from './align-items';
import FlexDirection from './flex-direction';
import JustifyContent from './justify-content';
import { Label } from 'office-ui-fabric-react';

export default observer((props: any) => {
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
        <Label
          style={{
            width: '25%',
            display: 'flex',
            marginRight: 10,
            fontSize: '12px',
            alignItems: 'center'
          }}
        >
          Direction
        </Label>
        <FlexDirection {...props} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 10px 5px',
          alignItems: 'stretch'
        }}
      >
        <Label
          style={{
            width: '25%',
            fontSize: '12px',
            marginRight: 10,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Align
        </Label>
        <AlignItems {...props} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 10px 5px',
          alignItems: 'stretch'
        }}
      >
        <Label
          style={{
            width: '25%',
            fontSize: '12px',
            marginRight: 10,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Justify
        </Label>
        <JustifyContent {...props} />
      </div>
    </div>
  );
});
