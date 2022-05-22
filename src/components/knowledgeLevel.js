import React from 'react'

export const KnowledgeLevel = (props) => {
  const { className, style, iconComponent, languageName, experience } = props

  return (
    <div
      className={`rounded-2xl bg-background bg-opacity-20 p-4 flex flex-col relative ${className}`}
      style={{
        backdropFilter: 'blur(0px)',
        ...(style || {}),
      }}
    >
      <div className="font-black text-white text-background text-5xl absolute top-2 right-2">
        {iconComponent}
      </div>

      <div className="text-white text-lg font-bold mb-2 mt-4">
        {languageName}
      </div>

      <div className="text-white">{experience}</div>
    </div>
  )
}