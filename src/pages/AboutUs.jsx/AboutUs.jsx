import React from "react";
import { kids, laughter, rishikesh, bg_1, bg_2, nikhil } from "../../assets";
import Navbar from "../../components/Navbar";

const AboutUs = () => {
  const images = [
    {
      src: kids,
      alt: "Kids Meditation",
      caption: "Kids Meditation",
    },
    {
      src: laughter,
      alt: "Laughter Yoga",
      caption: "Laughter Yoga",
    },
    {
      src: rishikesh,
      alt: "Rishikesh Retreat",
      caption: "Rishikesh Retreat",
    },
  ];

  const numerals = [
    {
      number: "8 years",
      description: "Experience",
    },
    {
      number: "2.5K",
      description: "Social media following",
    },
    {
      number: "5.2K+",
      description: "Meditation Mastery Participants",
    },
    {
      number: "1500+",
      description: "Hours of record teachings",
    },
  ];

  const qna = [
    {
      question: "What is Shunyata Wellness?",
      answer:
        "Led by a certified mental health professional and meditation teacher, our approach is both spiritually rooted and psychologically informed",
    },
    {
      question: "What is Shunyata Wellness?",
      answer:
        "Led by a certified mental health professional and meditation teacher, our approach is both spiritually rooted and psychologically informed",
    },
    {
      question: "What is Shunyata Wellness?",
      answer:
        "Led by a certified mental health professional and meditation teacher, our approach is both spiritually rooted and psychologically informed",
    },
    {
      question: "What is Shunyata Wellness?",
      answer:
        "Led by a certified mental health professional and meditation teacher, our approach is both spiritually rooted and psychologically informed",
    },
    {
      question: "What is Shunyata Wellness?",
      answer:
        "Led by a certified mental health professional and meditation teacher, our approach is both spiritually rooted and psychologically informed",
    },
  ];
  return (
    <div>
      <Navbar className="text-white"/>
      {/* Hero  */}
      <div className="min-h-screen bg-[#325118] text-white">
        <div className="flex flex-col items-center gap-4 justify-center pt-[15%]">
          <div className="text-6xl text-center w-[40%]">
            We Hold Space For Your Journey Inward
          </div>
          <div className="text-xl text-center w-[50%]">
            We are a community dedicated to guiding you inward - creating space
            for healing, self-discovery, and lasting inner peace through ancient
            wisdom and mindful practice
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 py-10 m-10 mb-0 ">
          {images.map((images, index) => (
            <div key={index} className="">
              <img
                src={images.src}
                alt={images.alt}
                className="rounded-lg h-[560px] w-[430px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FFFCEB] py-15">
        <div className="flex items-center justify-center gap-4 p-10 px-20">
          <div className="flex justify-start text-[#325118] flex-col gap-4 items-start w-[40%]">
            <div className="text-2xl">WHO WE ARE</div>
            <div className="text-6xl">
              A welcoming space for stillness, clarity, and growth
            </div>
          </div>
          <div className="flex gap-4 flex-col font-light text-[#777575] items-start justify-start text-2xl w-[50%]">
            <div>
              Shunyata Wellness is a sanctuary for the mind, body, and soul - a
              space where ancient meditative wisdom meets modern mental
              wellness. Founded by meditation teacher and certified mental
              health professional Nikhil Sharma, we are dedicated to guiding
              individuals through their personal journeys of self-discovery,
              healing, and transformation.
            </div>
            <div>
              At Shunyata Wellness, we blend mindfulness practices, inner
              inquiry, and emotional wellness tools to help people reconnect
              with their true nature, find clarity amidst chaos, and cultivate a
              deep sense of inner peace.
            </div>
          </div>
        </div>
        {/* // Stats Section */}
        <div className="bg-[#FFFCEB] py-16">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-4 gap-8 text-center">
              {/* Experience */}
              {numerals.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-6xl font-bold text-[#325118]">
                    {item.number}
                  </span>
                  <span className="mt-4 text-xl text-gray-600">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 py-10">
          <div
            className=" bg-cover w-[574px] h-[400px] rounded-2xl"
            style={{ backgroundImage: `url(${bg_1})` }}
          >
            <div className="flex flex-col items-start gap-8 p-10 text-white ">
              <div className="text-4xl">Our story</div>
              <div className="text-lg">
                Nikhil Sharma, the heart behind Shunyata Wellness, found himself
                confronting life’s biggest questions at a young age. Amid
                emotional upheaval and a search for meaning, he turned
                inward—and discovered the transformative power of meditation.
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div
              style={{ backgroundImage: `url(${bg_2})` }}
              className="bg-cover rounded-2xl  w-[260px] h-[400px]"
            >
              <div className="flex flex-col items-start gap-8 p-10 text-white ">
                <div className="text-4xl">Vision</div>
                <div className="text-lg">
                  To create a world where every individual feels grounded,
                  present, and empowered to live a conscious, balanced life.
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${bg_2})` }}
              className="bg-cover rounded-2xl w-[260px] h-[400px]"
            >
              <div className="flex flex-col items-start gap-8 p-10 text-white ">
                <div className="text-4xl">Mission</div>
                <div className="text-md">
                  We create safe, inclusive spaces that blend mindfulness and
                  mental wellness, making meditation accessible and helping
                  individuals rediscover their true selves in today’s fast-paced
                  world.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#325118] text-white py-16 rounded-t-[100px]">
        <div className="grid grid-cols-3 gap-4 p-20">
          <div>
            <div className="mb-4 text-lg">WHY CHOOSE US</div>
            <div className="text-6xl">Because healing matters </div>
          </div>

          {qna.map((item, index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] p-8 py-14 rounded-lg w-[80%]"
            >
              <div className="text-[#325118]">{item.question}</div>
              <div className="text-[#777575]">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FFFCEB] p-16 flex justify-center items-center py-16 min-h-screen">
        <figure className="relative">
          <svg
            width="596"
            height="615"
            viewBox="0 0 596 615"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.8338 372.216C27.9366 465.534 121.538 554.299 171.326 587.017C268.333 615.972 481.092 646.868 556.069 538.813C631.046 430.758 579.306 398.642 556.069 399.517C502.324 395.57 520.132 337.174 538.397 320.972C615.415 252.654 528.539 207.737 502.846 196.795C485.698 191.245 467.223 172.236 482.863 146.752C494.373 127.997 482.863 106.757 482.863 100.513C460.102 36.4986 362.308 1.4057 331.012 29.8615C283.858 72.7368 225.924 14.1581 197.739 4.44127C151.874 -11.3708 89.6736 22.2722 87.3976 79.1737C84.5525 150.3 43.2965 137.495 12.0007 192.974C-13.0359 237.357 7.25937 256.989 20.5366 261.258C39.327 264.495 75.731 278.897 51.8338 372.216Z"
              fill="#325118"
            />
          </svg>
          <img className="absolute top-5 left-22" src={nikhil} alt="nikhil" />
          <div className="absolute w-[40%] flex flex-col items-center p-4 text-center bg-white bottom-0 rounded-xl -left-0">
            <div className="text-[#003A21]">
              Nikhil Sharma
            </div>
            <div className="text-sm">
              Meditation Coach & Mental Health Counselor 8+ Years Of Experience
            </div>
          </div>
        </figure>


        <div>
          <div>Meet your coach</div>
          <div>
            Nikhil is a certified Meditation Coach and Mental Health Counselor
            with 8+ years of experience. He has guided over 10,000 people to
            overcome trauma, rewire limiting beliefs, and experience the true
            essence of meditation through the Shunya State.
          </div>
          <div>
            His journey began with a deep quest for meaning and self-discovery,
            leading him to dedicate his life to teaching meditation and helping
            others find peace and purpose. Now, he’s on a mission to empower 1
            lakh people to become the best version of themselves.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
