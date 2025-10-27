import Link from "next/link";
export default function Products() {
  const products = [
    { id: "1", name: "Monitor" },
    { id: "2", name: "Printer" },
    { id: "3", name: "Router" },
  ];
  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
