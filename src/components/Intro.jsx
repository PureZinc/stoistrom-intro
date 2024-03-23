export default function Intro({title, subtitle}) {
  return (
    <div className="mb-6 text-4xl text-center">
        <h1 className="text-4xl main-font-sm">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
  )
}
