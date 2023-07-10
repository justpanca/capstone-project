import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { buyCourse } from "../Store/actions"
import data from "../Store/dataCourse"

const DetailCoursePage = () => {
    const [dataObj, setDataObject] = useState({});
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const getMyCourse = useSelector((state) => state.buyCourse)
    const getAccess = useSelector((state) => state.accessLogin)

    useEffect(() => {
        const dataObj = data.find((d) => d.id === id);
        setDataObject(dataObj)
    }, [id])
    const handleBtnBuy = () => {
        if(getAccess){
            if (getMyCourse.length !== 0) {
                const check = getMyCourse.some((item) => { return item.id === id })
                if (check) {
                    console.log("Already add")
                } else {
                    dispatch(buyCourse({ id: dataObj.id, img: dataObj.img, title: dataObj.title, desc: dataObj.desc }));
                }
            } else {
                dispatch(buyCourse({ id: dataObj.id, img: dataObj.img, title: dataObj.title, desc: dataObj.desc }));
            }
        }else{
            history.push('/login')
        }
        
    }
    return (
        <div className="relative">
            <div className="sticky top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="max-w-[1280px] mx-auto py-20">
                {/* Gambar Illustrasi */}
                <img className="w-full max-h-[32rem] rounded-lg" src={dataObj.img} alt="/" />

                {/* Judul */}
                <div className="grid grid-flow-col grid-cols-12 gap-12 pt-2 items-center">
                    <div className="flex flex-col items-start text-left col-span-9">
                        <h1 className="text-5xl text-black font-bold">{dataObj.title}</h1>
                    </div>
                    <div className="col-span-8 col-start-11">
                        <Button
                            btnName={"Buy - " + dataObj.price}
                            design="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                            click={handleBtnBuy}
                            testid="btn-buy"
                        />
                    </div>
                </div>

                {/* Deskripsi */}
                <p className="text-justify pt-6">{dataObj.desc}</p>

                {/* Projek */}
                <div className="items-start text-left pt-6">
                    <h1 className="text-2xl text-blue-500 font-bold">Projects you will work on</h1>
                    <p className="text-justify pt-3">{dataObj.project}</p>
                </div>

                {/* Level */}
                <div className="items-start text-left pt-6">
                    <h1 className="text-2xl text-blue-500 font-bold">Who is this class for?</h1>
                    <p className="text-justify pt-3">{dataObj.level}</p>
                </div>

                {/* Periode */}
                <div className="items-start text-left pt-6">
                    <h1 className="text-2xl text-blue-500 font-bold">Study period</h1>
                    <p className="text-justify pt-3">{dataObj.period}</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default DetailCoursePage