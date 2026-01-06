type Props = {
  params: { id: string };
};

export default function EnterpriseModelDetail({ params }: Props) {
  const isUnlocked = false; // later comes from subscription

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">
        Model #{params.id}
      </h1>

      {isUnlocked ? (
        <p>Full model details unlocked.</p>
      ) : (
        <div className="border rounded-lg p-6 bg-yellow-50">
          <p className="mb-4">
            This profile is locked. Upgrade your subscription to view full details.
          </p>
          <a
            href="/enterprise/subscriptions"
            className="inline-block px-4 py-2 bg-black text-white rounded-md"
          >
            Upgrade
          </a>
        </div>
      )}
    </>
  );
}
