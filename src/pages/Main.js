import { useNavigate } from 'react-router-dom';
import useLoad from '../hooks/useLoad';
import Intro from '../components/Intro';

export default function Main() {
    const nav = useNavigate()

    const mainDetails = [
      {
          title: "Practice Mindfulness",
          description: `Meditation and writing down your thoguhts has proven to be beneficial for
            your mental health.`
      },
      {
          title: "Track Your Habits",
          description: `Take responsibility for your life, by first paying attention to your habits! 
            Keep track of both good and bad habits.`
      },
      {
        title: "Remove Distractions",
        description: `As inspired by the book, Atomic Habits, allow technology's advantages to put you
          at an advantage, not the other way around.`
      },
    ]

    const { dataIndex: detailIndex } = useLoad(mainDetails)

  return (
    <div className="my-3">
        <Intro 
          title="Welcome to Stoistrom!"
          subtitle="The #1 app for self-improvement!"
        />
        <div className="grid md:grid-cols-3 grid-cols-1">
            {mainDetails.map((detail, index) => (
                <div key={index} 
                    className={`flex flex-col justify-center items-center text-center opacity-0
                    bg-gradient-to-t from-orange-100 to-white p-4 m-4 border border-dashed border-black
                    ${index <= detailIndex && 'fade-in'}`}
                >
                    <h3 className="text-3xl mb-3 main-font-sm">{detail.title}</h3>
                    <p>{detail.description}</p>
                </div>
            ))}
        </div>
        <div className="flex flex-col justify-center">
          <button 
            className="mt-3 mb-5 mx-auto border border-black border-dashed hover:scale-105 main-font-sm" 
            onClick={() => nav('explore')}
          >
            Explore -{'>'}
          </button>
        </div>
    </div>
  )
}