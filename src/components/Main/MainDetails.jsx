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
    <div className="grid-container-3-1">
        {mainDetails.map((detail, index) => (
            <div key={index} className={`main-card ${index <= detailIndex && 'fade-in'}`}>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
            </div>
        ))}
    </div>
  )
}
