import Image from 'next/image'

const ProfilePage = () => {
    return (
        <div className="bg-gray-100 ">
            <div className="max-w-screen-lg mx-auto h-screen">
                <div className="border-b border-gray-300 ">
                    <div className="max-w-3xl flex p-4 justify-evenly items-center h-2/6">
                        <div className="mr-4">
                            <Image 
                                src="https://links.papareact.com/3ke"
                                alt="profile pic"
                                objectFit="contain"
                                height={150}
                                width={150}
                                className="rounded-full"
                            />
                            <h1 className="font-medium sm:hidden text-center">Jonty thakur</h1>
                        </div>

                        <div className="flex flex-col flex-grow sm:justify-evenly sm:flex-grow-0 space-y-4">
                            <div className="flex sm:items-center flex-col sm:flex-row space-y-2">
                                <h1 className="font-light text-3xl mr-4">jonty</h1>
                                <button className="py-1 px-3 bg-blue-500 text-white shadow-md rounded-md">Follow</button>
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <span className="pr-0 sm:pr-10"><strong>1</strong> post</span>
                                <span className="pr-0 sm:pr-10"><strong>21</strong> followers</span>
                                <span className="pr-0 sm:pr-10"><strong>41</strong> following</span>
                            </div>
                            <h1 className="font-medium hidden sm:inline">Jonty thakur</h1>
                        </div>
                    </div>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
