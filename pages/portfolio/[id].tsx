import { useRouter } from 'next/router'

const Project = () => {

    const { query: { id } } = useRouter();

    console.log(id)
    return (
        <div>
            Project
        </div>
    )
}

export default Project
