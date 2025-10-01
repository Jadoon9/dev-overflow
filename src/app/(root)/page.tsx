import { Button } from "@/components/ui/button";
import { auth, signOut } from "../auth";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import LocalSearch from "@/components/search/LocalSearch";
export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between pag-4 sm:flex-row text-dark-100_light900">
        <h1 className="h1-bold text-dark-100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 "
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch />
      </section>
      home filters
      <div className="mt-10 flex w-full flex-col gap-6 ">
        <p>Question Card</p>
      </div>
    </>
  );
}
