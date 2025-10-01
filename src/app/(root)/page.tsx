import { auth, signOut } from "../auth";
export default async function Home() {
  const session = await auth();
  console.log(session);

  return <div className="text-2xl font-bold">This is page 1</div>;
}
