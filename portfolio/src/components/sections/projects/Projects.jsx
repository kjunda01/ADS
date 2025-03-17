import React from 'react';

import Project from './Project';

const Projects = () => {
  const skillsUnipark = ['React', 'Java', 'SpringBoot', 'PostgreSQL', 'AWS'];
  const skillsDotfiles = ['Archlinux', 'Shell Script'];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Melhores Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            titulo={'Unipark - Web'}
            descricao={
              'Interface web para acesso ao sistema Unipark, um sistema para controle de entrada/saída de veículos.'
            }
            skills={skillsUnipark}
            site={'https://github.com/kjunda01/unipark'}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
