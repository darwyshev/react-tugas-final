"use client";
import { useParams } from "next/navigation";
export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Detail Produk</h2>
      <p>Anda sedang melihat produk dengan ID: {id}</p>
    </div>
  );
}
