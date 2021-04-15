import { useRouter } from 'next/router'

const Project = (props: any) => {

    const { query: { project } } = useRouter();

    console.log(project)
    return (
        <div>
            Project
        </div>
    )
}

export default Project
