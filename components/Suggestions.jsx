import faker from 'faker'
import { useEffect, useState } from 'react'

const footerLinks = ["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Top accounts", "Hashtags", "Language"]

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = Array(5).fill().map((_,i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))

        setSuggestions(suggestions)
    }, [])

    return (
        <div className="h-4 ml-10 mt-6">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-medium">See All</button>
            </div>
            {
                suggestions.map(profile => (
                    <div
                        key={profile.id}
                        className="flex items-center justify-between mt-3"
                    >
                        <img src={profile.avatar} alt=""
                            className="w-10 h-10 rounded-full border p-[2px]"
                        />
                        <div className="ml-4 flex-1">
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <h3 className="text-xs text-gray-400">Works at {profile.company.name}</h3>
                        </div>
                        <button className="text-sm text-blue-400 font-medium">Follow</button>
                    </div>
                ))
            }
            <footer className="w-full mt-6">                
            {
                footerLinks.map(item => (
                    <p className="inline-block text-[10px] text-gray-400 mr-2 ">
                    {item}
                    </p>
                ))
            }
            <div className="text-[10px] text-gray-400 mt-4">© {new Date().getFullYear} INSTAGRAM FROM FACEBOOK</div>
            </footer>
        </div>
    )
}

export default Suggestions
