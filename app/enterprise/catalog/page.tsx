const models = [
  { id: "1", name: "Anna Smith", category: "Fashion", location: "NYC" },
  { id: "2", name: "Lucas Brown", category: "Commercial", location: "LA" },
];

export default function CatalogPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Model Catalog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model) => (
          <a
            key={model.id}
            href={`/enterprise/models/${model.id}`}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <h3 className="font-semibold">{model.name}</h3>
            <p className="text-sm text-gray-500">{model.category}</p>
            <p className="text-sm text-gray-500">{model.location}</p>
          </a>
        ))}
      </div>
    </>
  );
}
