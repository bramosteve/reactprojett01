export default function Form03(){
    return(
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6" >
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="fex flex-col w-1/2 p-8">
                    <h1 className="text-2xl">chat to hour time </h1>
                    <p className="text-gray-600 mb-6">Need help with something?</p>

                    <form className="space-y-4">
                        <div className="flex space-x-4 ">
                                <input type="text" placeholder="Fist name" className="w1/2 p-3  border rounded-md" />
                                <input type="text" placeholder="Last name" className="w1/2 p-3  border rounded-md" />
                        </div>

                        <div className="space-y-3 ">
                            <input type="text" placeholder="Job title " className="w-full p-3 border rounded-md" />
                            <input type="email" placeholder="Word email" className="w-full p-3 border rounded-md "/>
                        </div>

                        <div className="flex space-x-4 items-center ">
                            <span className="bg-gray-600">US</span>
                            <input type="tel " placeholder="+1 (555) 000-0000" className="w-full p-3 border rounded-md" />

                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}