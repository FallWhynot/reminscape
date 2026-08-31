import { Metadata } from "next";
import SearchPage from "./SearchPage";

export const metadata: Metadata = {
  title: "Search",
  description: "Search all articles on reminscape",
};

export default function Page() {
  return <SearchPage />;
}
