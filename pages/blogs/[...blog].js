import { useRouter } from 'next/router'

import Header from "../../components/common/Header";
import Blog from "../../components/modules/Blog";
import Footer from "../../components/common/Footer";

export default function BlogRoute(props) {
    const router = useRouter();
    const { blog } = router.query;

    // https://github.com/vercel/next.js/discussions/11484
    if (!blog) {
        return null
    }

    // Sample path blog/users/kris-gano/retro-scratch-contest-8-24-2020
    // path is an array of path after blog
    // blog: ["users", "kris-gano", "retro-scratch-contest-8-24-2020"]
    console.log("blog", blog[0]);
    const authorId = "kris-gano" //blog[1];
    const articleId = "retro-scratch-contest-8-24-2020" //blog[2];
    return (
        <div>
            <Header />
            <Blog authorId={authorId} articleId={articleId} />
            <Footer />
        </div>
    );
}
