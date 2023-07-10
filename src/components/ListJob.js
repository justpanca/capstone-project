import { MdPaid, MdLocationOn, MdWork } from "react-icons/md";

const JobList = ({imgSrc, title, fee, location, type, requirement}) => {
    return (
        <div className="grid grid-cols-2 gap-2 border px-8 py-8 rounded-xl shadow-lg">
            <div className="place-self-center">
                <img className="max-h-60" src={imgSrc} alt="/" />
            </div>
            <div className="items-start text-left">
                <h1 className="font-bold text-2xl mb-8">{title}</h1>
                <div className="text-neutral-600 font-medium">
                    <p className="flex place-items-center gap-2 mb-2"><MdPaid size='1.5rem' className="place-self-center"></MdPaid>{fee}</p>
                    <p className="flex place-items-center gap-2 mb-2"><MdLocationOn size='1.5rem' className="place-self-center"></MdLocationOn>{location}</p>
                    <p className="flex place-items-center gap-2 mb-6"><MdWork size='1.5rem' className="place-self-center"></MdWork>{type}</p>
                </div>
                <p className="flex place-items-center gap-2">{requirement}</p>
            </div>
        </div>
    )
}
export default JobList;