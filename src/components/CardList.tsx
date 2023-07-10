import {Link} from "react-router-dom";
import { cardList } from "../types/component";

const ListCard = ({cardlist}:{cardlist: cardList}) => {
    return (
        <div>
            <Link className="w-72 text-left text-lg font-semibold" to={"courses/"+cardlist.id}>
                <div className="rounded-xl w-72 h-72 bg-gray-200 py-3.5 shadow-md">
                    <img src={cardlist.img} className="object-cover rounded-xl w-64 h-64 mx-auto" alt="/"/>
                </div>
                <p className="mt-2 truncate w-64">{cardlist.title}</p>
            </Link>
        </div>
    )
}
export default ListCard;