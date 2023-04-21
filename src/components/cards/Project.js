import React, { useEffect, useState } from 'react'
import MobileScreenCard from './MobileScreenCard'
import { MdChevronLeft, MdChevronRight, MdExpandLess, MdExpandMore } from 'react-icons/md'


 
const Project = ({ data, width }) => {

    const slideLeft = () => {
        const slider = document.getElementById(`slider-${data._id}`)
        slider.scrollLeft -= 500
    }

    const slideRight = () => {
        const slider = document.getElementById(`slider-${data._id}`)
        slider.scrollLeft += 500
    }

    const [isOverflowing, setIsOverflowing] = useState(false)

    const checkOverflow = () => {
        const slider = document.getElementById(`slider-${data._id}`)
        if (slider.scrollWidth > slider.clientWidth) {
            setIsOverflowing(true)
        } else {
            setIsOverflowing(false)
        }
    }

    useEffect(() => {
        checkOverflow()
    }, [width])

    const [isTrimmed, setIsTrimmed] = useState(false)
    const [trimmedDescription, setTrimmedDescription] = useState(null)

    useEffect(() => {
        if (data.description.length > 100 && width < 800) {
            setIsTrimmed(true)
        } else {
            setIsTrimmed(false)
        }
    }, [data.description, width])

    useEffect(() => {
        if (isTrimmed) {
            setTrimmedDescription(data.description.substring(0, 100) + '...')
        } else {
            setTrimmedDescription(data.description)
        }
    }, [isTrimmed, data.description])

    const readMore = () => {
        setIsTrimmed((prev) => !prev)
    }

  return (
    <div className=''>
        <h1 className='text-5xl pb-5 px-5 font-quicksand'>
            {data.name}
        </h1>
        
        <div className={` w-[${toString(Math.ceil(width/2))}px]`}>
            <p className='text-xl px-5 font-quicksand'>
                {trimmedDescription}
            </p>
            {data.description.length > 100 &&
            (
                <button 
                    className='flex flex-row items-center text-xs mx-5 px-2 py-1 mt-2 font-quicksand bg-white text-black rounded-full'
                    onClick={readMore}
                >
                    {isTrimmed
                    ?
                    (
                        <>
                            <p>Les mer</p>
                            <MdExpandMore size={15}/>
                        </>
                    )
                    :
                    (
                        <>
                            <p>Les mindre</p>
                            <MdExpandLess size={15}/>
                        </>
                    )
                }
                </button>
            )}
        </div>

        <div className='border-b-2 border-opacity-50 border-white w-full my-5' />

        <div>
            <div
                id={`slider-${data._id}`}
                className={`py-5 flex overflow-x-scroll scroll scroll-smooth whitespace-nowrap space-x-5 px-5 scrollbar-hide`}
            >
                {data.images.map((image) => {
                    return (
                        true
                        ?
                        (
                            <MobileScreenCard 
                                key={image._key} 
                                image={image}
                            />
                        )
                        :
                        null
                    )}
                )}
            </div>
            {isOverflowing &&
            (<div className='flex flex-row items-center justify-around'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='cursor-pointer opacity-50 hover:opacity-100 relative'
                    size={50}
                />
                <MdChevronRight
                    onClick={slideRight}
                    className='cursor-pointer opacity-50 hover:opacity-100'
                    size={50}
                />
            </div>)}
        </div>
    </div>
  )
}

export default Project