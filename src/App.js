import './App.css';
import AppBarBlock from './component/AppBar';
import { RecoilRoot } from 'recoil';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeBlock from './component/Home';
import CreateEditBlock from './component/CreateEdit';
import DeleteBlock from './component/Delete';

function App() {
  return (
    <RecoilRoot>

    
      <div className='Root'>
        <div className='TodoTemplate'>
          <Router>
            <AppBarBlock/>
            <Routes>
              <Route path="/" element={<HomeBlock/>}/>
              <Route path="/CreateEdit" element={<CreateEditBlock/>}/>
              <Route path="/Delete" element={<DeleteBlock/>}/>
            </Routes>
          </Router>
          
          {/* <div className='TodoListBlock'>
            <div className='TodoList'>

              <div className='Item'>
                <div className='CheckCircle'><MdDone /></div>
                <div className='TextBlock'>
                  <div className='Text'>test</div>
                </div>
                <div className='Remove'><MdDelete></MdDelete></div>
              </div>

              <div className='Item'>
                <div className='CheckCircle'><MdDone /></div>
                <div className='TextBlock'>
                  <input type="text" placeholder='test'/>
                </div>
                <div className='Remove'><MdDelete></MdDelete></div>
              </div>


            </div>

            <div className="ComplateButton">
              <button>전체</button>
              <button>완료</button>
              <button>미완료</button>
            </div>

            <div className='Create'>
              <input type="text" placeholder='할 일을 입력 후, Add 를 누르세요'/>
              <button>Add</button>
            </div>
          </div> */}


        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
