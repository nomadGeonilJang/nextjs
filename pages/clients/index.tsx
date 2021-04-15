import Link from "next/link"

const ClientPage = () => {

    const users = [
        { id: 'max', name: 'max' },
        { id: 'gi', name: 'Gi' },
        { id: 'sll', name: 'sll' },
    ]

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <Link href={{
                        pathname: '/clients/[id]',
                        query: { id: user.id }
                    }}>
                        {user.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ClientPage