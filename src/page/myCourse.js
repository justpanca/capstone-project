import ListClass from "../components/ListClass"
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
const MyCoursePage = () => {
    const getMyCourse = useSelector((state) => state.buyCourse)
    return (
        <div className="relative">
            <div className="sticky top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="max-w-screen py-16">
                <div className="max-w-[1280px] mx-auto gap-8">
                    <h1 className="font-bold text-3xl mb-8 text-left">My Course</h1>
                    {getMyCourse.map((item) => {
                        return (
                            <ListClass
                                key={item.id}
                                imgSrc={item.img}
                                title={item.title}
                                duration="3 Video | Total 7 Minutes"
                                intro={item.desc}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MyCoursePage;