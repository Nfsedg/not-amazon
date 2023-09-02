export default function Loading() {
  return (
    <div role="status" className="w-full animate-pulse gap-4 p-2">
      {[...Array(20).keys()].map((item, index) => (
        <div key={index} className="h-24 bg-gray-200 rounded-t-lg dark:bg-gray-700 w-full mb-4"></div>
      ))}
    </div>
  )
}
