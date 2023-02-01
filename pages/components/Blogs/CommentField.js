export default function CommentField() {
    return (
        <form className="mt-10 flex flex-col gap-4">
            <h1 className="font-semibold text-2xl">Leave your thought here</h1>
            <span className="text-lg">Your email address will not be published. Required fields are marked *</span>
            <div className="grid lg:grid-cols-2 grid-flow-row gap-6">
                <input
                    type="text"
                    placeholder="Your Name *"
                    className="px-4 py-3 lg:w-96 bg-violet-50 focus:bg-white outline-none border border-transparent focus:border-violet-700 transition-colors duration-500 ease-in-out rounded-md"
                />
                <input
                    type="email"
                    placeholder="Your Email *"
                    className="px-4 py-3 lg:w-96 bg-violet-50 focus:bg-white outline-none border border-transparent focus:border-violet-700 transition-colors duration-500 ease-in-out rounded-md"
                />
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Comment"
                    className="lg:col-span-3 px-4 py-3 bg-violet-50 focus:bg-white outline-none border border-transparent focus:border-violet-700 transition-colors duration-500 ease-in-out rounded-md"
                />
            </div>
            <label htmlFor="checkbox" className="flex flex-row gap-2 items-center cursor-pointer">
                <input
                    type="checkbox"
                    name=""
                    id="checkbox"
                    className="w-4 h-4 border border-gray-200 hover:border-violet-700 cursor-pointer"
                />
                Save my name, email, and website in this browser for the next time I comment.
            </label>
            <button
                className="py-3 px-4 bg-violet-700 text-white rounded-md font-bold lg:w-40 hover:border hover:border-gray-200 hover:bg-white hover:text-violet-700 transition-colors duration-500 ease-in-out"
            >
                Submit
            </button>
        </form>

    )
}