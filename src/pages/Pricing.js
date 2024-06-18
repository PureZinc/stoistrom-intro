import Intro from "../components/Intro"
import Services from "../components/Pricing/Services"

export default function Pricing() {
  return (
    <div className="my-3">
        <Intro 
            title="Stoistrom's Features!"
            subtitle="Discover how you do self-improvement."
        />
        <Services />
    </div>
  )
}
