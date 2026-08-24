// components/experience.tsx
"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    year: "2025.03 - Present",
    type: "Education",
    company: "중앙대학교 (Chung-Ang University)",
    role: "소프트웨어학부 재학",
    description:
        "컴퓨터공학 및 소프트웨어 전공 지식을 심화 학습하며 다양한 팀 프로젝트, 해커톤, 학부 동문 네트워크(CAUSW) 플랫폼 개발에 적극 참여하고 있습니다.",
    achievements: [
      "컴퓨터공학 기초 및 소프트웨어 심화 전공 과정 이수",
      "CAUSW 동문 네트워크 프론트엔드 리드 및 인프라 최적화",
      "NASA Space Apps Challenge & UniD 해커톤 참가 및 프로젝트 배포",
    ],
  },
  {
    year: "2024.09 - 2025.02",
    type: "Work",
    company: "어크로스비 (AcrossB)",
    role: "Frontend & Backend Developer (데이터팀)",
    description:
        "데이터팀에서 신제품 개발 수요 예측 및 방대한 이커머스 데이터 분석을 위한 어드민 대시보드와 데이터 파이프라인을 구축했습니다.",
    achievements: [
      "React 기반 대용량 데이터 시각화 차트 및 어드민 대시보드 개발",
      "AWS EventBridge + Lambda 기반의 비동기 데이터 수집 파이프라인 설계 및 구축",
      "Nest.js ValidationPipe & DTO를 활용한 백엔드 요청 유효성 검증 표준화",
    ],
  },
  {
    year: "2022.03 - 2025.01",
    type: "Education",
    company: "미림마이스터고등학교",
    role: "소프트웨어과 졸업",
    description:
        "소프트웨어 엔지니어링 전반(웹 풀스택, 알고리즘, 데이터베이스)에 대한 탄탄한 기본기를 습득하고 실무 중심의 개발 역량을 쌓았습니다.",
    achievements: [
      "JavaScript/TypeScript 기반 모던 웹 개발 및 UI 구현 역량 확립",
      "다수의 교내외 소프트웨어 프로젝트 기획, 개발 및 협업 경험",
      "조기 취업을 통해 고등학교 재학 중 IT 기업 실무 투입",
    ],
  },
]

export default function Experience() {
  return (
      <section id="experience" className="min-h-screen flex items-center justify-center py-24 px-6 snap-start">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">Experience & Journey</h2>
            <p className="text-lg text-[#555555]">학습과 실무를 거치며 성장해온 개발 여정입니다.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2962FF] via-[#A8C8FF] to-[#E0E0E0]" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                  <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline Center Dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                        className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2962FF] border-4 border-[#F5F6F8] shadow-lg z-10"
                    />

                    {/* Content Card (항상 왼쪽 정렬 text-left 적용) */}
                    <div className="flex-1 text-left ml-8 md:ml-0">
                      <motion.div
                          whileHover={{ y: -4, scale: 1.01 }}
                          className="p-6 rounded-2xl bg-white border border-[#E0E0E0] hover:border-[#2962FF] transition-all duration-300"
                          style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
                      >
                        <div className="space-y-3">
                          {/* Year & Type Badges */}
                          <div className="flex items-center gap-2 justify-start">
                        <span className="px-3 py-1 rounded-full bg-[#2962FF]/10 text-[#2962FF] text-xs font-semibold">
                          {exp.year}
                        </span>
                            <span className="px-2.5 py-1 rounded-full bg-[#F5F6F8] text-[#666666] text-xs font-medium border border-[#E0E0E0]">
                          {exp.type}
                        </span>
                          </div>

                          {/* Title & Organization */}
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#222222] font-heading">{exp.role}</h3>
                            <p className="text-base sm:text-lg text-[#2962FF] font-medium">{exp.company}</p>
                          </div>

                          {/* Description */}
                          <p className="text-[#555555] text-sm sm:text-base leading-relaxed">{exp.description}</p>

                          {/* Key Achievements */}
                          <ul className="space-y-2 pt-2 text-left">
                            {exp.achievements.map((achievement) => (
                                <li key={achievement} className="text-xs sm:text-sm text-[#666666] flex items-center gap-2 justify-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#2962FF] flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>

                    {/* Alternating Layout Spacer */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}