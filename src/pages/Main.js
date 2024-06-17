import { useNavigate } from 'react-router-dom';
import Intro from '../components/Intro';
import MainDetails from '../components/Main/MainDetails';

export default function Main() {
    const nav = useNavigate()

  return (
    <div className="my-3">
      <Intro 
        title="Welcome to Stoistrom!"
        subtitle="The #1 app for self-improvement!"
      />
      <MainDetails />
      <div className="flex flex-col justify-center items-center">
        <button className="main-button" onClick={() => nav('explore')}>
          Explore -{'>'}
        </button>
      </div>
    </div>
  )
}