import { useRouter } from "next/router";

import Blog from "../../components/modules/Blog";

export default function BlogRoute() {
  const router = useRouter();
  const { blog } = router.query;

  // https://github.com/vercel/next.js/discussions/11484
  if (!blog) {
    return null;
  }

  // Sample path blog/users/kris-gano/retro-scratch-contest-8-24-2020
  // path is an array of path after blog
  // blog: ["users", "kris-gano", "retro-scratch-contest-8-24-2020"]
  const authorId = blog[1];
  const articleId = blog[2];
  return (
    <div>
      <Blog authorId={authorId} articleId={articleId} />
    </div>
  );
}
