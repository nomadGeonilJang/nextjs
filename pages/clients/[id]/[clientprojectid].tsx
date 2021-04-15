import { useRouter } from "next/router"

const SelectedClientProjectPage = () => {
    const router = useRouter();
    console.log(router);
    return <h1>SelectedClientProjectPage</h1>
}

export default SelectedClientProjectPage