import {Route, Routes} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {WorkingArea} from './components/workingArea/WorkingArea';
import {NotFound} from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/calendario' element={<WorkingArea/>} />
      <Route path='/*' element={<NotFound/>} />

    </Routes>
  );
}

export default App;
