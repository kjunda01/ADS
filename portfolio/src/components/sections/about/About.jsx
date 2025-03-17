import React from 'react';
import Skills from './Skills';

const About = () => {
  const frontendSkills = ['React', 'NextJS', 'TypeScipt', 'TailwindCSS'];

  const backendSkills = [
    'Node.js',
    'Python',
    'Java/SpringBoot',
    'Linux',
    'Docker',
  ];

  const links = {
    adsUnilavras:
      'https://unilavras.edu.br/cursos/graduacao-semipresencial/analise-e-desenvolvimento-de-sistemas/',
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Sobre Mim
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translatey-1 transition-all">
          <p className="text-grey-300 mb-6">
            Um dev apaixonado por tecnologias com experiência em construção de
            aplicações web escaláveis e criação de soluções inovadoras.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skills skills={frontendSkills} tipoSkill={'Frontend'} />
            <Skills skills={backendSkills} tipoSkill={'Backend'} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Formação Acadêmica</h3>
            <ul className="list-disc list-inside text-grey-300 space-y-2">
              <li>
                <a href={links.adsUnilavras} target="self">
                  <strong>Análise e Desenvolvimento de Sistemas</strong> pela
                  UNILAVRAS - Centro Universitário de Lavras (2024-2025)
                </a>
              </li>
              <li>
                Cursos realizados na Udemy: Assuntos relacionados a Python,
                Django, JS, TS, Java, Poo, CSS, Lógica de programação, dentre
                outros.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Experiências Profissionais</h3>
            <div className="space-y-4 text-grey-300">
              <div>
                <h4 className='font-semibold'>
                  Coordenador na Prefeitura Municipal de Luminárias (2020/4 - Atualmente)
                </h4>
                <p>
                  Atividades com Excel, automações, criação de mídias/artes,
                  etc.
                </p>
              </div>

              {/* <div>
                <h4>
                  Outra experiência
                </h4>
                <p>
                  Descrição de outra experiência
                </p>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
