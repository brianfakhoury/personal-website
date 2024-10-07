import { getPosts } from "@/lib/get-posts";
import ListOfPosts from "@/app/components/list-of-posts";

export const metadata = {
  title: "Writing",
  description: "A collection of written words by Brian Fakhoury.",
  openGraph: {
    url: "/writing",
    siteName: "Brian Fakhoury's website",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://fakhoury.xyz/writing",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-4">Written Words</h2>
      <ListOfPosts posts={posts} />
    </div>
  );
}