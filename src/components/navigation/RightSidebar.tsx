import React from "react";
import Link from "next/link";
import TagCard from "../cards/TagCard";
import ROUTES from "@/constants/routes";
import Image from "next/image";

const hotQuestions = [
  {
    _id: "1",
    title: "How to optimize React performance with useMemo and useCallback?",
  },
  {
    _id: "2",
    title: "What's the difference between useEffect and useLayoutEffect?",
  },
  {
    _id: "3",
    title: "How to handle authentication in Next.js 14 with App Router?",
  },
  {
    _id: "4",
    title: "Best practices for TypeScript with React components?",
  },
  {
    _id: "5",
    title: "How to implement dark mode with Tailwind CSS and Next.js?",
  },
];

const popularTags = [
  { _id: "1", name: "react", question: 1250 },
  { _id: "2", name: "nextjs", question: 890 },
  { _id: "3", name: "typescript", question: 756 },
  { _id: "4", name: "javascript", question: 2340 },
  { _id: "5", name: "tailwindcss", question: 432 },
  { _id: "6", name: "nodejs", question: 678 },
];
const RightSidebar = async () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col gap-4">
          {hotQuestions.map((question) => (
            <Link
              href={ROUTES.QUESTION(question._id)}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="text-dark500_light700 body-medium">
                {question.title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <TagCard
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              questions={tag.question}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
