import Link from "next/link";

export default function Home() {
  console.log("testing server comp");
  return (
    <div>
      <h1>testing 123</h1>
      <Link href="/dashboard/123">Dashboard</Link>
    </div>
  );
}
