import { useRouter } from 'next/router';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import theme from './theme';

interface IHeader {}
const Header: React.FunctionComponent<IHeader> = () => {
  const router = useRouter();

  return (
    <div
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,.2)'
      }}
    >
      <Pivot
        theme={theme}
        id='header-pivot'
        headersOnly={true}
        selectedKey={router.asPath}
        defaultSelectedKey={router.asPath}
        onLinkClick={(pivot: any) => {
          if (pivot.props.itemKey) {
            router.replace(pivot.props.itemKey);
          }
        }}
        getTabId={(itemKey: string, index: number) => itemKey}
      >
        <PivotItem
          headerText=''
          itemKey=''
          onRenderItemLink={() => null}
        ></PivotItem>
        <PivotItem headerText='Pages' itemKey='/editor/pages'></PivotItem>
        <PivotItem headerText='API' itemKey='/editor/api'></PivotItem>
        <PivotItem headerText='Config' itemKey='/editor/config'></PivotItem>
        <PivotItem headerText='Deploy' itemKey='/editor/deploy'></PivotItem>
      </Pivot>

      <style jsx global>{`
        body {
          background: #373d49;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Header;
