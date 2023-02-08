/* eslint-disable @next/next/no-img-element */
import { MapPinIcon } from "@heroicons/react/24/outline";
import { DataStore } from "aws-amplify";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Events } from "../models";
import about1 from "/public/images/about1.jpg";
import about2 from "/public/images/about2.jpg";
import about3 from "/public/images/about3.jpg";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const data = [
  {
    image: about1,
    date: "AUGUST 18, 2021",
    desc: "Global Education Meeting for Everyone",
  },
  {
    image: about2,
    date: "November 9, 2021",
    desc: "London International Conference on Education",
  },
  {
    image: about3,
    date: "DECEMBER 31, 2021",
    desc: "Digital Skills: Using Information to Build Business",
  },
];

export default function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
    async function fetchEvents() {
      const eventData = await DataStore.query(Events);
      setEvents(eventData);
    }
    DataStore.observe(Events).subscribe((msg) => {
      console.log(msg.Events, msg.opType, msg.element);
    });
  }, []);

  return (
    <div className="my-32 lg:px-20 px-4">
      <div className="flex lg:flex-row flex-col gap-12">
        <div className="flex flex-col gap-4 items-center lg:w-[30%] w-full flex-1">
          <h1 className="text-base font-semibold text-violet-700 borde leading-snug lg:self-start self-center">
            EVENTS
          </h1>
          <h2 className="text-[#181818] text-3xl font-medium lg:text-start text-center lg:self-start self-center">
            Upcoming Events
          </h2>
          <p className="lg:self-start self-center lg:text-start text-center">
            You can show all events here to let people take the chance to get
            involved
          </p>
          <button className="px-6 py-3 text-violet-800 font-medium lg:w-fit w-60 bg-violet-50 hover:shadow-xl transition-shadow duration-500 ease-in-out lg:self-start self-center">
            View all
          </button>
        </div>
        <div className="grid lg:grid-cols-3 grid-flow-row gap-8">
          {events.map((event, index) => {
            return (
              <Link
                href={`events/${event.id}`}
                key={index}
                className="flex flex-col gap-2 bg-gray-50 group overflow-hidden hover:bg-white hover:shadow-xl transition-all ease-in-out duration-500 rounded-b-lg pb-6"
              >
                <img
                  src={event.Image}
                  alt=""
                  className="w-full h-44 object-cover ease-in-out duration-500 group-hover:scale-110 rounded-t-lg"
                />
                <div className="p-3 flex flex-col gap-4 items-center justify-center">
                  <h1 className="text-[#ababab] text-[16px]">{event.date}</h1>
                  <div className="font-semibold text-[16px] text-center hover:text-violet-700 transition-colors duration-500 ease-in-out">
                    <ReactMarkdown>{event.topic}</ReactMarkdown>
                  </div>
                  <div className="flex flex-row items-center text-[14px] font-light gap-2">
                    <MapPinIcon className="w-5 h-5 text-gray-800" />
                    {event.location}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
