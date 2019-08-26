import dynamic from 'next/dynamic';
const Header = dynamic(import('./Header'), {
  ssr: false
});
export default ({ children }: any) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Header />
      <div style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
        {children}
      </div>
    </div>
  );
};
