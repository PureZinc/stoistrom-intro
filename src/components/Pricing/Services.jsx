import useLoad from "../../hooks/useLoad";

export default function Services() {
    const serviceDetails = [
        {
            name: "Free",
            description: "Basic journaling and habit tracking. Great for beginners!",
            price: 0
        },
        {
            name: "Premium",
            description: "Advanced your Self-Improvement experience with Premium!",
            price: 15
        },
        {
            name: "Finance",
            description: "Track your finances and create budgets with ease!",
            price: 10
        },
        {
            name: "Gamify",
            description: "Gamify your life! Gain XP as you gain skills and practice self-improvement!",
            price: 7
        }
    ]
    const { dataIndex: serviceIndex } = useLoad(serviceDetails);

  return (
    <div className="grid-container-2-1">
        {serviceDetails.map((service, index) => (
            <div
                key={index}
                className={`main-card ${index <= serviceIndex && 'fade-in'}`}
            >
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>Cost: ${service.price}</p>
            </div>
        ))}
    </div>
  )
}
