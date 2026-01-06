import Link from "next/link";

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Model Dashboard</h2>

        <nav className="space-y-3">
          <Link href="/model/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link href="/model/profile" className="block hover:underline">
            Profile
          </Link>
          <Link href="/model/portfolio" className="block hover:underline">
            Portfolio
          </Link>
          <Link href="/model/availability" className="block hover:underline">
            Availability
          </Link>
          <Link href="/model/settings" className="block hover:underline">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
