import React from 'react';
import Skills from '../about/Skills';
import { FaGithub } from 'react-icons/fa';

const Project = ({ titulo, descricao, skills, site }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130,246, 0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">{titulo}</h3>
      <p className="text-grey-400 mb-4">{descricao}</p>
      <div className="flex flex-wrap gap-2 mb-1">
        <Skills skills={skills} />
      </div>
      <div className="flex justify-center items-center">
        <a
          href={site}
          className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2 "
          target="_self"
        >
          Confira este projeto! -> <FaGithub size={32} />
        </a>
      </div>
    </div>
  );
};

export default Project;
