export default function Unauthorized() {
  return (
    <div className="flex justify-center items-center h-[80vh]">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-red-600">
          403
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Access Denied
        </h2>

        <p className="text-gray-500 mt-2">
          You don't have permission to access this page.
        </p>

      </div>

    </div>
  );
}