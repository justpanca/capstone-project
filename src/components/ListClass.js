import Button from "../components/Button";

const ListClass = ({ imgSrc, title, duration, intro }) => {
    return (
        <div class="grid grid-cols-3 gap-4 border px-8 py-8 mb-14 rounded-xl shadow-lg">
            <div>
                <img className="object-cover h-72 rounded-xl" src={imgSrc} alt="/" />
            </div>

            <div class="col-span-2 items-start text-left pt-6">
                <div className="flex flex-row items-end mb-2">
                    <div className="w-2/3 place-self-center">
                        <h1 className="font-bold text-2xl">{title}</h1>
                    </div>
                </div>

                <p className="font-medium text-neutral-600 mb-12">{duration}</p>
                <p className="text-neutral mb-10">
                    {intro}
                </p>
                <div className="flex gap-4">
                    <Button
                        btnName='Detail Class'
                        design='w-48 h-12 rounded-lg bg-blue-500 text-white font-semibold'
                    />

                    <Button
                        btnName='Certificate'
                        design='w-48 h-12 rounded-lg bg-blue-500 text-white font-semibold'
                    />
                </div>
            </div>
        </div>
    )
}

export default ListClass;