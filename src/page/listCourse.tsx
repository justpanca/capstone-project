import InputText from "../components/InputBar"
import Button from "../components/Button";
import ListCard from "../components/CardList"
import Footer from "../components/Footer";
import data from "../Store/dataCourse"
import { useState } from "react"
import Navbar from "../components/Navbar";
import {dataCourse} from "../types/component"
import React from "react";

const ListCoursePage = () => {
    const [keyword, setKeyword] = useState('');
    const listCourseSection = React.useRef<HTMLInputElement>(null);
    const executeScroll = () => listCourseSection.current?.scrollIntoView()
    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }
    const handlebtn=()=>{

    }
    return (
        <div className="relative">
             <div className="sticky top-0 left-0 right-0">
                <Navbar 
                    course={executeScroll}
                />
            </div>
            <div className="max-w-screen bg-sky-50">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-flow-col grid-cols-12 gap-12 py-36">
                        <div className="flex flex-col items-start text-left py-20 my-8 col-span-8">
                            <h1 className="text-6xl text-black font-bold"><span className="text-blue-600">Certified</span> Course Class</h1>
                            <p className="text-xl text-gray-400 mt-4 font-medium-1">Intensive and structured classes for 2 months, guided by experienced mentors</p>
                            <Button
                                btnName="Take Class"
                                design="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                                testid="btn-browse-class"
                                click={executeScroll}
                            />
                        </div>
                        <div className="hidden sm:block col-span-8 col-start-9">
                            <img className="w-full" src="./icon/icon_course_intro.png" alt="/" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-32">
                <div className="text-center">
                    <p className="text-xl text-sky-500 font-bold">Course Scheme</p>
                    <h1 className="text-6xl text-black font-bold">How to Study at Ebility</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-4 px-2 text-center mt-20">
                    <div className="border py-8 rounded-xl shadow-lg">
                        <img className="m-auto" src="./icon/icon_key.png" alt="desc-text" />
                        <p className="text-xl text-gray-400 mt-4">Access all materials on the web</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-lg">
                        <img className="m-auto" src="./icon/icon_message.png" alt="desc-text-2" />
                        <p className="text-xl text-gray-400 mt-4">Join the discussion group</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-lg">
                        <img className="m-auto" src="./icon/icon_task.png" alt="desc-text-3" />
                        <p className="text-xl text-gray-400 mt-4">Do all the tasks</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 px-2 text-center mt-5">
                    <div className="border py-8 rounded-xl shadow-lg">
                        <img className="m-auto" src="./icon/icon_task.png" alt="desc-text-4" />
                        <p className="text-xl text-gray-400 mt-4">Do the quiz every weekend</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-lg">
                        <img className="m-auto" src="./icon/icon_chart.png" alt="desc-text-5" />
                        <p className="text-xl text-gray-400 mt-4">View and improve your achievements</p>
                    </div>
                    <div className="border py-8 rounded-xl shadow-lg">
                        <img className="m-auto" src="./icon/icon_trophy.png" alt="desc-text-6" />
                        <p className="text-xl text-gray-400 mt-4">Get your skills and certificates</p>
                    </div>
                </div>

            </div>
            <div className="max-w-screen-xl mx-auto mb-10 pt-20" ref={listCourseSection}>
                <div className="flex flex-row h-20 items-end mb-10">
                    <div className="w-1/2 text-left h-full pt-3">
                        <h6 className="text-blue-500 font-semibold">Class available</h6>
                        <h1 className="font-bold text-4xl">Digital skills class</h1>
                    </div>
                    <div className="w-1/2">
                        <div className="flex justify-end gap-x-3 h-full">
                            <InputText
                                design='w-96 h-12 border-2 border-gray-400 rounded-lg p-2.5'
                                value={keyword}
                                onChange={handleKeyword}
                                placeholder="Search Course"
                                type='text'
                                testid="input-search-course"
                            >
                                <div></div>
                            </InputText>
                            <Button
                                btnName='Search'
                                design='w-32 h-12 rounded-lg bg-blue-500 text-white font-semibold'
                                testid="btn-search-class"
                                click={handlebtn}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-x-1 gap-y-6 justify-items-center">
                    {data.map((datacourse: dataCourse) => {
                        return (
                            <ListCard cardlist={datacourse} key={datacourse.id}/>
                        )
                    })}
                </div>
            </div>
          <Footer/>
        </div>
    )
}
export default ListCoursePage;