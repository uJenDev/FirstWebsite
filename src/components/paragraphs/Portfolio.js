import React from 'react'
import Project from '../cards/Project'

const Portfolio = ({ projects, width }) => {
  return (
    <div className=''>
        {projects.map((project) => {
            return (
                <Project 
                    key={project.id}
                    id={project.id}
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
