"use client";

import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

import { Input } from "../ui/input";

/**
 * Props interface for the LocalSearch component
 */
interface Props {
  /** The route path where this search component is being used */
  route: string;
  /** Source URL for the search icon image */
  imgSrc: string;
  /** Placeholder text to display in the input field */
  placeholder: string;
  /** Additional CSS classes to apply to the container */
  otherClasses?: string;
  /** Position of the search icon - either "left" or "right" of the input */
  iconPosition?: "left" | "right";
}

/**
 * LocalSearch Component
 *
 * A reusable search input component that provides real-time search functionality
 * with URL synchronization. Features debounced input, automatic URL parameter
 * management, and customizable icon positioning.
 *
 * Key Features:
 * - Debounced search to prevent excessive API calls (300ms delay)
 * - Automatic URL parameter synchronization
 * - Clean URL management (removes empty query parameters)
 * - Flexible icon positioning
 * - Responsive design with dark/light theme support
 */
const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  otherClasses,
  iconPosition = "left",
}: Props) => {
  // Next.js navigation hooks for URL management
  const pathname = usePathname(); // Current page path
  const router = useRouter(); // Router for navigation
  const searchParams = useSearchParams(); // Current URL search parameters

  // Get existing query parameter from URL, default to empty string
  const query = searchParams.get("query") || "";

  // Local state for the search input value
  const [searchQuery, setSearchQuery] = useState(query);

  /**
   * Effect hook that handles debounced search and URL synchronization
   *
   * This effect:
   * 1. Debounces user input by 300ms to prevent excessive URL updates
   * 2. Updates URL parameters when user types a search query
   * 3. Removes query parameter when search is cleared (only on the specified route)
   * 4. Prevents page scrolling when updating the URL
   */
  useEffect(() => {
    // Create a debounced function that executes after 300ms of inactivity
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        // If there's a search query, add it to the URL parameters
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        // Navigate to the new URL without scrolling
        router.push(newUrl, { scroll: false });
      } else {
        // If search query is empty and we're on the specified route,
        // remove the query parameter from the URL
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          // Navigate to the cleaned URL without scrolling
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    // Cleanup function to clear the timeout if component unmounts or dependencies change
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {/* Conditionally render search icon on the left side */}
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="Search"
          className="cursor-pointer"
        />
      )}

      {/* Search input field with controlled value and onChange handler */}
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />

      {/* Conditionally render search icon on the right side */}
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={15}
          height={15}
          alt="Search"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
