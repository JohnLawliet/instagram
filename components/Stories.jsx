import faker from 'faker'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Story from './Story'

const Stories = () => {
    const [suggestions, setSuggestions] = useState([])
    const {data:session} = useSession()

    useEffect(() => {
        // const suggestions = [...Array(20)].map((_,i) => ({
        //     // contextualCard contains fake details of user
        //     ...faker.helpers.contextualCard()
        // }))
        const suggestions = Array(20).fill().map((_,i) => ({
            ...faker.helpers.contextualCard()
        }))
        console.log(suggestions)
        setSuggestions(suggestions)
    }, [])

    return (
        <div className="flex space-x-2 p-6 bg-white border-gray-200 mt-8 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {
            session && (
                <Story img={session.user.image} username={session.user.username} />
            )
        }
        {
            suggestions.map(profile => (
                <Story 
                key={profile.id} 
                img={profile.avatar} 
                username={profile.username}                
                />
            ))
        }
        </div>
    )
}

export default Stories
