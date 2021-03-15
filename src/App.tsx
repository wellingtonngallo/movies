
import { Header } from './components/Header';
import { Content } from './components/Content';
import { GenereProvider } from './context/genre';
import { SideBar } from './components/SideBar';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return (
    <GenereProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar/>
        <div className="container">
          <Header/>
          <Content />
        </div>
      </div>
    </GenereProvider>
  )
}