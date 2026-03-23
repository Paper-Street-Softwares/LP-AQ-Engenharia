import { ExternalLink } from "lucide-react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

const services = Object.values(content.texts.solutions.cards);

export default function SolucoesRapidas() {
  return (
    <SectionArea className={`bg-bgSectionDark`}>
      <SectionWrapper>
        <div className="w-full">
          {/* <div className="mb-8">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-5">
              Soluções Rápidas
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Resolva etapas importantes do seu projeto com agilidade
            </h1>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
              Acesse nossos serviços especializados para regularização e análise
              técnica, com praticidade e segurança desde o primeiro passo.
            </p>
          </div> */}

          <SectionHeader
            miniTitle={content.texts.solutions.miniTag}
            sectionHeaderTitle={content.texts.solutions.title}
            sectionHeaderSubtitle={content.texts.solutions.subtitle}
            className={`w-full text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[32px]`}
          />

          <div className="flex flex-col gap-4 justify-center items-center">
            {services.map((service, index) => (
              <MotionDivDownToUp>
                <a
                  key={index}
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl px-6 py-5 shadow-sm desktop1:hover:scale-110 duration-500 transition-all max-w-[360px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center text-white600 font-bold text-sm text-white">
                      {service.icon}
                    </div>
                    <span className="text-slate-800 font-medium text-base">
                      {service.label}
                    </span>
                  </div>
                  <ExternalLink
                    size={18}
                    className="flex-shrink-0 text-slate-300"
                  />
                </a>
              </MotionDivDownToUp>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
