export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md border rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4">
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
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?
        </p>

        <div className="flex justify-center gap-4 mt-2 text-sm">
          <a href="/register/model" className="underline">
            Model
          </a>
          <a href="/register/enterprise" className="underline">
            Enterprise
          </a>
        </div>
      </div>
    </main>
  );
}
