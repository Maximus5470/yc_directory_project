import React from 'react'

const Ping = () => {
  return (
    <div className={`relative`}>
      <div className={`absolute -left-4 top-1`}>
        <span className={`flex size-[11px]`}>
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75`}/>
          <span className={`relative size-[11px] inline-flex rounded-full h-3 w-3 bg-primary`}/>
        </span>
      </div>
    </div>
  )
}
export default Ping
