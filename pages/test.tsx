import { Button, Callout } from 'office-ui-fabric-react';
import { observer, useObservable } from 'mobx-react-lite';
import { useRef } from 'react';

export default observer(() => {
  const meta = useObservable({
    s: false,
    ev: null as any
  });
  const r = useRef(null);

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Button
        ref={r}
        onClick={e => {
          meta.s = !meta.s;
          meta.ev = e.nativeEvent;
        }}
      >
        Text coba
      </Button>
      {meta.s && <Callout target={meta.ev}> halo sodara</Callout>}
    </div>
  );
});
