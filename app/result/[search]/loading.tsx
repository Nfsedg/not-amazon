export default function Loading() {
  return (
    <div role="status" className="w-full animate-pulse gap-4 p-2">
      {new Array(20)
        .fill(undefined)
        .map((item, index) => (
          <div
            key={index}
            className="h-24 bg-gray-200 rounded-t-lg dark:bg-gray-700 w-full mb-4"
          ></div>
        ))}
    </div>
  );
}
