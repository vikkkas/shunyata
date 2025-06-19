import React from "react";
import landingImage from "../../assets/landing_page.png";
import arrow from "../../assets/side-arrow.png";
import profiles from "../../assets/profiles.png";
import Card from "../../components/layout/Card1";
import plant from "../../assets/plant.png";
import heart from "../../assets/heart.png";
import hand from "../../assets/hand.png";
import vector from "../../assets/vector.png";
import fingers from "../../assets/fingers.png";
import Card2 from "../../components/layout/Card2";
import Navbar from "../../components/Navbar";
import Card3 from "../../components/layout/Card3";
import master from "../../assets/home/mastery_class.png";
import counselling from "../../assets/home/counselling.png";
import brain from "../../assets/home/brain.png";
const Home = () => {
    return (
        <div className="bg-[#FFFCEB]">
            <div className="relative w-screen h-screen p-5 pt-0 overflow-x-hidden bg-[#FFFCEB]">
                {/* Background Image */}
                <img
                    src={landingImage}
                    alt="Landing Page"
                    className="object-cover w-full h-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 flex items-center justify-between w-full p-4 bg-opacity-50">
                    <Navbar className="text-[#325118]" />
                </div>

                {/* Centered Text on Banner */}
                <div className="absolute top-[21%] text-white text-left pl-25 gap-1">
                    <h2 className="pl-2 text-4xl font-bold font-inter">Release</h2>
                    <h2 className="font-bold text-7xl">Anxiety Fears And</h2>
                    <h2 className="font-weight-700 text-7xl">Find Peace</h2>
                    <p className="pt-5 text-lg">Master Powerful Meditation Techniques to heal from</p>
                    <p className="text-xl">past and manifest your dream life</p>
                </div>

                <div className="flex items-center absolute top-[57%] text-white text-left pl-25 gap-7">
                    <button className="flex items-center py-3 text-xl text-white bg-green-900 rounded-full px-7 font-inter">
                        Join us
                        <img src={arrow} alt="Arrow" className="w-5 h-5 ml-2" />
                    </button>
                    <button className="py-3 text-lg text-white border border-white rounded-full px-7 font-inter">
                        Explore Our Masterclass
                    </button>
                </div>

                <div className="flex items-center absolute top-[67%] pl-25">
                    <img src={profiles} alt="profiles" className="h-10 w-17" />
                    <p className="pl-2 text-xl text-white">10K+ people have transformed their journey</p>
                </div>

                {/* Content */}
                <p style={{ fontFamily: 'Inter' }} className="relative top-[10%] left-[40%] font-bold text-black text-2xl">Why meditation is Important?</p>
                <p className="relative top-[12%] left-[200.77px] w-[994.97px] h-[192px] font-inter font-medium text-[20px] leading-[24px] text-center text-[#777575]">
                    In today’s fast-paced world, our minds are constantly overstimulated - leading to stress, anxiety, and emotional exhaustion. Meditation is not just a relaxation technique; it’s a powerful tool for inner transformation. It helps you reconnect with your true self, quiet the mental noise, and create space for clarity, healing, and purpose.

                    <p className="relative top-[17%]">By practicing meditation regularly, you unlock the ability to respond to life with calm, focus, and awareness — rather than react from fear or chaos.</p>
                </p>

                <div className="flex flex-row items-center ml-[14%] space-x-10 mt-[15%] relative">
                    <img
                        src={vector}
                        alt="Vector"
                        className="absolute w-[744.66px] h-[662.86px] left-[-400px] opacity-10 z-0"
                    />
                    <Card
                        icon={plant}
                        heading="Mental Clarity & Emotional Balance"
                        content="Meditation helps declutter the mind, reduces overthinking, and brings emotional stability - empowering you to think clearly and feel deeply."
                    />
                    <Card
                        icon={heart}
                        heading="Deep Healing & Inner Peace"
                        content="It allows you to access the Shunya (zero) state - where the mind is still, and true healing begins. This space fosters calm, awareness, and a sense of connection to something greater."
                    />
                    <Card
                        icon={hand}
                        heading="Manifestation & Energy Alignment"
                        content="When your mind is aligned and focused, your intentions become powerful. Meditation sharpens your ability to manifest the life you truly desire by aligning thought, energy, and action."
                    />
                </div>
                <div className="bg-[#FFFCEB] relative top-[20%] left-[10%] text-bold text-lg text-[#325118]">
                    <p>ABOUT US</p>
                    <p className="left-[-100px] text-5xl">A path to presence,
                        <br />peace, and purpose</p>
                    <p className="relative w-[640px] top-[25px] left-[5] text-[#325118] text-lg">
                        We’re a community dedicated to inner growth and mindful living. Through expert-led sessions and immersive practices, we help you connect with yourself, manage stress, and find balance in today’s fast-paced world.
                    </p>
                    <img className="relative w-[478.1484375px] h-[224.08984375px] top-[39px] left-[8px] rounded-[20px]"
                        src={fingers} alt="meditation fingers"></img>
                    <Card2 id={"5.2K+"} text="Meditation Mastery Participants" className="top-[30px] left-[60%] z-1" />
                    <Card2 id={"2.5K"} text="Social media following" className="top-[60%] left-[40%]" />
                    <Card2 id={"1500+"} text="Hours of record teachings" className="top-[60%] left-[60%] z-1" />
                    <img src={vector} alt="vector" className="absolute w-[744.66px] h-[662.86px] top-[8%] left-[800px] opacity-10 z-0"></img>
                </div>
                <div>
                    <div className="relative w-[1440.86px] h-[776.25px] left-[-6.81px] top-[400px] bg-[#325118] rounded-t-[50px]">
                        <p className="absolute top-[10%] left-[20%] text-xl text-white">SERVICES</p>
                        <p className="absolute top-[17%] left-[20%] text-5xl text-white">Explore our services</p>
                        <Card3
                            img={master}
                            className="absolute top-[30%] left-[20%]"
                            heading="Meditation mastery class"
                            text="Unlock the path to your best self with Transformation Class—your ultimate destination for mental and emotional well-being"
                        />
                        <Card3
                        img={counselling}
                            className="top-[30%] left-[45%]"
                            heading="1:1 counselling session"
                            text="This personalized session is tailored to address your specific challenges, guiding you toward inner peace, mental clarity, and emotional healing"
                        />
                        <Card3
                        img={brain}
                            className="top-[30%] left-[70%]"
                            heading="1:1 counselling session"
                            text="This personalized session is tailored to address your specific challenges, guiding you toward inner peace, mental clarity, and emotional healing"
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;