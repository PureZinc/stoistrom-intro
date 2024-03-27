import useLoad from "../../hooks/useLoad";

export default function MainDetails() {
    const mainDetails = [
        {
            title: "Discover your Purpose",
            description: `Gain clarity of the present moment through meditation and the art of
              journaling. By cultivating mindfulness, you pave the path towards inner peace and fulfilment. 
              Make everyday a step closer towards greater mental resilience and emotional well-being.`
        },
        {
            title: "Empower your Journey",
            description: `Your habits determine the quality of your life. Observe your habits with keen awareness
              with Stoistrom's Habit Tracker! Celebrate the victories of your positive habits, and with unwavering 
              determination, transform the shadows of your bad habits into stepping stones towards greatness.`
        },
        {
          title: "Unlock your Potential",
          description: `In our journey of life, we ofte get distracted from the true essence of our purpose. 
            Through the wisdom of Atomic Habits, we harness the power of technology to propel you forward in your 
            journey. Build a digital habitat that allows you to overcome distractions and pave your path towards 
            a successful life!.`
        },
      ]

    const { dataIndex: detailIndex } = useLoad(mainDetails);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
        {mainDetails.map((detail, index) => (
            <div key={index} 
                className={`flex flex-col justify-center items-center text-center opacity-0 text-black
                bg-gradient-to-t from-orange-100 to-white p-4 m-4 border border-dashed border-black
                ${index <= detailIndex && 'fade-in'}`}
            >
                <h3 className="text-3xl mb-3 main-font-sm">{detail.title}</h3>
                <p>{detail.description}</p>
            </div>
        ))}
    </div>
  )
}
