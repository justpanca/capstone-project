import React, { useRef } from "react";
import Button from "../components/Button";
import InputText from "../components/InputBar"
import { useState } from "react"
import ListJob from "../components/ListJob"
import dataJob from "../Store/dataJob";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobVacancyPage = () => {
    const [keyword, setKeyword] = useState('');
    const listJobSection = useRef(null);
    const executeScroll = () => listJobSection.current?.scrollIntoView()
    const handleKeyword = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <div className="max-w-screen ">
            <div className="sticky top-0 left-0 right-0">
                <Navbar />
            </div>
            <div className="max-w-[1280px] mx-auto py-5">
                <div className="grid grid-flow-col grid-cols-12 gap-12 py-20">
                    <div className="flex flex-col items-start text-left py-20 my-8 col-span-8">
                        <h1 className="text-6xl text-black font-bold leading-tight">Looking for a Job just got <span className="text-blue-600">Easier!</span></h1>
                        <p className="text-xl text-gray-400 mt-4 font-medium-1">With adequate expertise, it will make it easier for you to find work</p>
                        <Button
                            btnName="Find Job"
                            design="mt-10 mb-6 w-96 h-14 rounded-lg bg-blue-500 text-white font-semibold"
                            click={executeScroll}
                        />
                    </div>
                    <div className="hidden sm:block col-span-8 col-start-9">
                        <img className="w-full" src="./icon/icon_job_vacancy.png" alt="/" />
                    </div>
                </div>
                <div className="pt-20 mb-20" ref={listJobSection}>
                    <div className="flex flex-row h-20 items-end mb-10">
                        <div className="w-1/2 text-left h-full pt-3">
                            <h6 className="text-blue-500 font-semibold">Job available</h6>
                            <h1 className="font-bold text-4xl">The Best Job Choice </h1>
                        </div>
                        <div className="w-1/2">
                            <div className="flex justify-end gap-x-3 h-full">
                                <InputText
                                    design='w-96 h-12 border-2 border-gray-400 rounded-lg p-2.5'
                                    value={keyword}
                                    onChange={handleKeyword}
                                    placeholder="Search Job"
                                    type='text'
                                />
                                <Button
                                    btnName='Search'
                                    design='w-32 h-12 rounded-lg bg-blue-500 text-white font-semibold'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {dataJob.map((item) => {
                            return (
                                <ListJob
                                    key={item.id}
                                    imgSrc={item.img}
                                    title={item.title}
                                    fee={item.salary}
                                    location={item.location}
                                    type={item.jobtime}
                                    requirement={item.exp}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default JobVacancyPage;