import React, { useEffect, useState } from 'react'

export const socials = [
    {
        id: 1,
        logo: require('../../assets/images/logos/github.png'),
        name: 'Github',
        url: 'https://github.com/uJenDev'
    },
    {
        id: 2,
        logo: require('../../assets/images/logos/facebook.png'),
        name: 'Facebook',
        url: 'https://www.facebook.com/ulrik.jensen.980'
    },
    {
        id: 3,
        logo: require('../../assets/images/logos/linkedin.png'),
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ulrik-m-jensen/'
    },
]

const Socials = ({ width, breakpoint }) => {

    const [textSize, setTextSize] = useState(null)

    // Set title and subtitle size
    useEffect(() => {
        if (width < breakpoint) {
        setTextSize('text-xl')
        } else {
        setTextSize('text-2xl')
        }
    }, [width, breakpoint])

  return (
    <>
        <div className={`flex flex-row items-center py-5 whitespace-nowrap ${width > 500 ? 'justify-center space-x-10' : 'justify-around space-x-5'}`}>
        {socials.map((social) => {
            return (
                <button 
                    key={social.id}
                    className='hover:opacity-50'
                    onClick={() => window.open(social.url, '_blank')}
                >
                    <img 
                        src={social.logo}
                        alt={social.name}
                        className='h-10 w-10'
                    />
                </button>
                )
            })
        }
        {width > 500     ?
        (<p className={`flex justify-center font-quicksand py-2 px-4 ${textSize} bg-white text-black rounded-full hover:opacity-50 cursor-pointer`}>
            umj4455@gmail.com
        </p>)
        :
        (<img 
            src={require('../../assets/images/logos/email.png')}
            alt='umj4455@gmail.com'
            className='h-12 w-12'
        />)
        }
        </div>
    </>
  )
}

export default Socials
