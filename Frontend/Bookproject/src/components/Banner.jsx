import React from "react";

function Banner() {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 flex flex-col md:flex-row">

            {/* ---------- TEXT SECTION ---------- */}
            <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
                <div className="space-y-12">
                    <h1 className="text-4xl font-bold">
                        Hello, welcomes here to learn something{" "}
                        <span className="text-pink-500">new everyday!!!</span>
                    </h1>

                    <p className="text-xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        et totam. Tempora amet atque expedita, quae corrupti totam sed
                        pariatur corporis at veniam est voluptas animi!
                    </p>

                    <div className="join w-full md:w-4/5">
                        <label className="input input-bordered join-item w-full flex items-center">
                            <svg
                                className="h-[1em] opacity-50 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                                className="w-full"
                            />
                        </label>
                        <button className="btn btn-neutral join-item">Join</button>
                    </div>

                    <div className="validator-hint hidden">
                        Enter valid email address
                    </div>
                </div>

                <button className="btn btn-secondary mt-6 ">Secondary</button>
            </div>

            {/* ---------- IMAGE SECTION ---------- */}
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mt-10 pt-20 md:mt-0">
                <img
                    src="/baner.jpg"
                    alt="mlms"
                    className="w-[400px] md:w-[500px] h-auto"
                />
            </div>

        </div>

    );
}

export default Banner;
