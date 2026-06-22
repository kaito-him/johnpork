import { useNavigate } from 'react-router-dom';
import ScrollVelocity from './ScrollVelocity';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <ScrollVelocity
        texts={['john', 'pork']}
        velocity={100}
        className="custom-scroll-text"
        numCopies={10}
        damping={50}
        stiffness={400}
      />
      <div className="btn-wrapper">
        <button className="btn-class-name" onClick={() => navigate('/call')}>
          <span className="back"></span>
          <span className="front"></span>
        </button>
        <p className="btn-label">click me !</p>
      </div>
    </div>
  );
}

export default App;
