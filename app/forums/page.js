import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

const topics = [
    {
      text: "Python",
      img: "/python.png",
      desc: "Lets discuss everything related to Python",
      slug: "python-new"
    },
    {
      text: "JavaScript",
      img: "/javascript.png",
      desc: "A hub for all things JavaScript, from front-end to back-end.",
      slug: "js-new"
    },
    {
      text: "React",
      img: "/react.png",
      desc: "Share your React projects, tips, and ask for help.",
      slug: "react-new"
    },
    {
      text: "Data Science",
      img: "/data-science.png",
      desc: "Discussions on data analysis, machine learning, and AI.",
      slug: "datascience-new"
    },
    {
      text: "Web Development",
      img: "/web-dev.png",
      desc: "A place to talk about web development technologies and best practices.",
      slug: "webdev-new"
    },
      
  ];

const forums = () => {
  return (
    <div className='container my-20 mx-auto'>
        <h1 className='text-3xl text-center font-bold'>Discussion Forums</h1>
        <div className='flex flex-wrap justify-center'>
            {topics.map((topic) => {
                return <div key={topic.img} className='shadow-lg bg-slate-400 w-1/4 m-4 flex justify-center flex-col items-center py-10'>
                    <Image src={topic.img} alt='imgs' width={34} height={34} />
                    <h2 className='text-2xl'>{topic.text}</h2>
                    <p>{topic.desc}</p>
                    <Link href={`/forum/${topic.slug}`}>
                    <Button className="bg-slate-800 text-white px-4 py-2">Discuss Now</Button>
                    </Link>
                </div>
            })}
        </div>
    </div>
  )
}

export default forums
