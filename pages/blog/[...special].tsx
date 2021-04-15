import { useRouter } from "next/router";

const BlogPage = () => {
    const router = useRouter();
    console.log(router.query.special)
    return <h1>BlogPage</h1>
}
export default BlogPage;