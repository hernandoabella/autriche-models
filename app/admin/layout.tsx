import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <nav className="space-y-3">
          <Link href="/admin/dashboard" className="block hover:underline">
            Dashboard
          </Link>
          <Link href="/admin/models" className="block hover:underline">
            Models
          </Link>
          <Link href="/admin/enterprises" className="block hover:underline">
            Enterprises
          </Link>
          <Link href="/admin/payments" className="block hover:underline">
            Payments
          </Link>
          <Link href="/admin/settings" className="block hover:underline">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
