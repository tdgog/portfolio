import React from "react"
import { SiLua, SiPhp, SiJava, SiPython, SiDiscord, SiJavascript, SiCplusplus } from 'react-icons/si'
import {
    FiCode,
    FiGithub,
    FiMessageSquare,
    FiUser,
} from 'react-icons/fi'

import useFetchGithubUser from '../utils/GithubAPI'
import { KnowledgeLevel } from "../components/knowledgeLevel"

function Blur(){
    const { userData, isLoading } = useFetchGithubUser('tdgog')
    return <>
        <div className="flex flex-row justify-center items-center min-h-full bg-app-background bg-center bg-no-repeat bg-cover">
      {!isLoading && (
        <main
          className="flex flex-col lg:flex-row bg-jet bg-opacity-40 rounded-3xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6"
          style={{
            backdropFilter: 'blur(10px)', // 10px
          }}
        >
          <div
            className="py-8 px-4 lg:px-6 bg-background bg-opacity-20 flex flex-col w-full lg:w-auto lg:max-w-xs"
            style={{
              backdropFilter: 'blur(10px)',
            }}
          >
            <img
              className="rounded-full shadow-sm w-40 h-40 mb-4 border-2 border-white select-none mx-auto"
              src={userData.avatar_url}
              alt={userData?.login}
              draggable={false}
            />

            <div className="text-white text-lg font-black flex items-center mb-2">
              <FiUser />
              <span className="ml-4">{userData?.login}</span>
            </div>

            {!!userData?.bio && (
              <div className="text-white flex items-center">
                <FiMessageSquare />
                <span className="ml-4">{userData?.bio}</span>
              </div>
            )}

            <div className="flex flex-row flex-wrap justify-center mt-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tdgog"
                className="rounded-full w-14 h-14 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-2"
              >
                <FiGithub />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com"
                className="rounded-full w-14 h-14 flex flex-row justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 text-white mt-4 mx-2"
              >
                <SiDiscord />
              </a>
            </div>
          </div>

          <div className="flex-1 p-4 lg:p-6">
            <div className="text-lg text-white font-black mb-8 flex items-center">
              <FiCode />
              <div className="ml-4">Programming Languages</div>
            </div>

            <div className="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
              <KnowledgeLevel
                iconComponent={<SiLua />}
                languageName="Lua"
                experience="I use Luau with Roblox Studio and the Roblox API to create games and assets such as user interfaces, interactables, tools and gameplay events."
              />

              <KnowledgeLevel
                iconComponent={<SiPython />}
                languageName="Python"
                experience="I began learning Python in 2019, and have continued this learning recently by learning gui & visualisation libraries such as Tkinter and MatPlotLib."
              />

              <KnowledgeLevel
                iconComponent={<SiJavascript />}
                languageName="JavaScript"
                experience="I learned JavaScript for use in my studies and applied it by making mobile and web applications in react/react native."
              />

              <KnowledgeLevel
                iconComponent={<SiCplusplus />}
                languageName="C++"
                experience="I am currently learning C++ for use in Unreal Engine 5 and my future ventures into game development."
              />

            </div>
          </div>
        </main>
      )}
    </div>
    </>
}

export default function Home({ bg }) {
    return <div className={`w-screen h-screen bg-code bg-cover bg-center bg-no-repeat`}>
        <Blur />
    </div>
}
