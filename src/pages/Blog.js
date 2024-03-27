import Blogs from "../components/Blog/Blogs";
import Intro from "../components/Intro";

export default function Blog() {
  return (
    <div className="my-3">
        <Intro 
            title="View our Blog!" 
            subtitle="For tips and knowledge of Self-Improvement!" 
        />
        <Blogs />
    </div>
  )
}