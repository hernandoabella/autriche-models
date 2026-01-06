export default function ModelRegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Model Registration
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
          />

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Create Model Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already registered? <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </main>
  );
}
