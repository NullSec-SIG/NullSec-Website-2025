export default function GalleryPage() {
    return (
        <div className="flex flex-col items-center px-6 min-h-svh">
            <h1 className="text-4xl mt-36 font-[IBMPlexSans] font-bold">GALLERY</h1>
            <div className="flex flex-row items-center w-4/5 whitespace-pre">
                <h3 className="text-2xl">WORKSHOP: </h3>
                <div className="relative text-lg">
                    <select className="border-1 rounded-sm px-3 py-1">
                        <option value={0}>test</option>
                    </select>
                </div>
            </div>
        </div>
    )
}