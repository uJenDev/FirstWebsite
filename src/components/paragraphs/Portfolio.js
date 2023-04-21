import React, { useEffect, useState } from 'react'
import Project from '../cards/Project'
import client from '../../sanity'

const Portfolio = ({ width }) => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client.fetch(`*[_type == "project"]{
            _id,
            name,
            type,
            slug,
            description,
            images,
        }`)
        .then((data) => {
            setProjects(data)
            setLoading(false)
        })
        .catch('Error Ocurred Mate: ', console.error)
    }, [])

  return (
    <div className=''>
        {projects?.map((project) => {
            return (
                <Project 
                    key={project._id}
                    id={project._id}
                    data={project}
                    width={width}
                />
            )
        }
        )}
    </div>
  )
}

export default Portfolio
