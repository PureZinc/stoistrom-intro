import useFetch from "../../hooks/useFetch";

export default function Blogs() {
    const { isLoading, error, data: blogs } = useFetch('http://127.0.0.1:8000/blogs');

  return (
    <div className="text-center">
        {isLoading && <div>
            <p>Loading...</p>
        </div>}
        {error && <div>
            <p>We don't have any blogs to show yet :{'('}</p>
        </div>}
        {blogs && <div className="grid-container-2-1">
            {blogs.map((blog, index) => (
                <div key={index} className="main-card">
                    <p>{blog.posted_on}</p>
                    <h3>{blog.title}</h3>
                    <p>{blog.subtitle}</p>
                </div>
            ))}
        </div>}
    </div>
  )
}
