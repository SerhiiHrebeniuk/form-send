import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Main from './components/Main/Main';

function App() {

  const { Content } = Layout;

  return (
    <Layout style={{ width: "100%", height: "100vh", alignItems: "center", background: "#71879a", overflow: "scroll" }}>
      <Content style={{ width: "75%", height: "100vh" }}>
        <Main />
      </Content>
    </Layout>
  );
}

export default App;
