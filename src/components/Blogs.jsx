import useFetch from "../hooks/useFetch";

export default function Blogs() {
    const { isLoading, error, data: blogs } = useFetch('none')

  return (
    <div className="text-center">
        {isLoading && <div>
            <p>Loading...</p>
        </div>}
        {error && <div>
            <p>We don't have any blogs to show yet :{'('}</p>
        </div>}
        {blogs && <div>
            {blogs.map((blog, index) => (
                <div key={index} 
                    className={`flex flex-col justify-center items-center text-center opacity-0
                    bg-gradient-to-t from-orange-100 to-white p-4 m-4 border border-dashed border-black`}
                >
                    <h3 className="text-3xl mb-3 main-font-sm">{blog.title}</h3>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>}
    </div>
  )
}
