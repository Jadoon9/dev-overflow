import { Button } from "@/components/ui/button";
import { auth, signOut } from "../auth";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";

export default async function Home() {
  const session = await auth();
  console.log(session);

  const questions = [
    {
      _id: "1",
      title: "What is the best way to learn React?",
      content:
        "I want to learn React and I want to know the best way to learn it.",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
      ],
      author: {
        _id: "1",
        name: "John Doe",
        image: "https://via.placeholder.com/150",
      },
      createdAt: new Date(),
      upvotes: 10,
      downvotes: 2,
      answers: 10,
      views: 10,
    },
    {
      _id: "2",
      title: "What is the best way to learn React?",
      content:
        "I want to learn React and I want to know the best way to learn it.",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
      ],
      author: {
        _id: "1",
        name: "John Doe",
        image: "https://via.placeholder.com/150",
      },
      createdAt: new Date(),
      upvotes: 10,
      downvotes: 2,
      answers: 10,
      views: 10,
    },
  ];

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
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search for questions"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6 ">
        {questions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
}
