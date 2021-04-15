import Link from 'next/link'
const MainPage = () => {
    return (
        <nav>
            <h1>Main</h1>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>  <Link replace href="/portfolio"><a>portfolio</a></Link></li>
                <li>  <Link href="/"><a>Home</a></Link></li>
            </ul>
        </nav>
    )
}
export default MainPage;