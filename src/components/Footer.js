const Footer = () => {
    return (
        <div>
            <div className="w-screen bg-sky-50">
                <div className="flex max-w-screen-xl mx-auto h-80 items-center justify-between">
                    <div className="w-96 text-left ml-20 pt-5">
                        <img className="w-64 mb-6" src="/icon/logo_ebility.png" alt="/"/>
                        <p className="text-base text-gray-500 mb-6">Maximize your career by taking a series of courses tailored to today's industry needs</p>
                        <p className="text-xl text-gray-500 mb-3">Unduh Aplikasi</p>
                        <div className="flex gap-4  pb-5">
                            <a href="/#">
                                <img className="w-32" src="/icon/icon_app_store.png" alt="/"/>
                            </a>
                            <a href="/#">
                                <img className="w-32" src="/icon/icon_google_play.png" alt="/"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-32 mr-20">
                            <div className="flex flex-col gap-1 text-left ">
                                <p className="text-xl text-blue-500 font-semibold">Resources</p>
                                <a className="text-base text-gray-500" href="/#">Home</a>
                                <a className="text-base text-gray-500" href="/#">Course</a>
                                <a className="text-base text-gray-500" href="/#">Create CV</a>
                                <a className="text-base text-gray-500" href="/#">Contact</a>
                            </div>
                            <div className="flex flex-col gap-1 text-left ">
                                <p className="text-xl text-blue-500 font-semibold">Help</p>
                                <a className="text-base text-gray-500" href="/#">House Rules</a>
                                <a className="text-base text-gray-500" href="/#">Our Terms</a>
                                <a className="text-base text-gray-500" href="/#">Privacy & Policy</a>
                            </div>
                            <div className="flex flex-col gap-1 text-left ">
                                <p className="text-xl text-blue-500 font-semibold">Contact Us</p>
                                <div className="flex items-center gap-3">
                                    <img className="w-6 h-6 mt-1" src="/icon/icon_location.png" alt="/"/>
                                    <a className="text-base text-gray-500" href="/#">Jakarta, Indonesia</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img className="w-6 h-6 mt-1" src="/icon/icon_mail.png" alt="/"/>
                                    <a className="text-base text-gray-500" href="/#">gigih@ebility.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center mt-5 mb-5">
                <p>Copyright @Ebility 2022. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;