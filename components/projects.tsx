// components/projects.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, CheckCircle2, Wrench } from "lucide-react"

interface TroubleshootingItem {
  title: string
  problem: string
  process: string
  solution?: string
}

interface ProjectDetails {
  summary: string
  keyTasks: string[]
  troubleshooting?: TroubleshootingItem[]
}

interface Project {
  title: string
  period?: string
  role: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  details?: ProjectDetails
}

const projects: Project[] = [
  {
    title: "CAUSW 동문 네트워크",
    period: "2025.06 - 2026.03",
    role: "Frontend Developer",
    description: "중앙대학교 소프트웨어학부 동문 네트워크 웹/앱 플랫폼",
    fullDescription:
        "동문 수첩, 경조사 알림, 이벤트 배너 등 핵심 커뮤니티 기능을 주도적으로 개발하고, 사내 디자인 시스템 구축 및 AWS CloudFront + Lambda@Edge 기반의 이미지 최적화 파이프라인을 연동해 사용자 경험과 로딩 성능을 대폭 개선했습니다.",
    image: "/pro01-1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "AWS CloudFront", "Lambda@Edge"],
    liveUrl: "https://www.causw.co.kr/auth/sign-in",
    githubUrl: "https://github.com/CAUCSE",
    details: {
      summary: "동문 간의 교류 활성화 및 학부 정보 공유를 위한 웹/앱 서비스로, 프로덕션 배포 후 지속적인 유지보수와 성능 최적화를 주도했습니다.",
      keyTasks: [
        "동문 수첩, 경조사 알림 신청/조회, 메인 이벤트 배너 등 핵심 기능 UI/UX 개발",
        "재사용성과 일관된 UI 제공을 위한 공통 컴포넌트 기반 사내 디자인 시스템 구축 및 라이브러리화",
        "Next.js 커스텀 Image Loader 구현을 통한 반응형 이미지 리사이징 파이프라인 연동",
        "기존 서비스 유지보수 및 프로덕션 단계의 버그 픽스/리팩터링 진행",
      ],
      troubleshooting: [
        {
          title: "이미지 최적화 인프라 분리 및 성능 개선",
          problem: "Vercel 기본 인프라 유지 대비 고용량 원본 이미지 로딩 속도 저하 및 Bandwidth 비용 발생 우려",
          process: "전체 인프라 이전 리스크를 줄이기 위해 프론트엔드는 Vercel로 유지하고, 이미지 서빙 인프라만 AWS CloudFront + Lambda@Edge + Sharp 조합으로 분리하는 점진적 아키텍처 채택",
          solution: "Next.js <Image> 컴포넌트의 파라미터를 파싱하는 커스텀 image-loader를 구현하여 WebP 변환 및 최적 규격 URL을 동적으로 조합해 캐시 HIT율 극대화",
        },
        {
          title: "보안 및 관심사 분리를 위한 이미지 파이프라인 개선",
          problem: "기존 공개형 S3 직접 조회 방식으로 인한 보안 취약점 및 클라이언트 URL 관리 복잡도 발생",
          process: "CloudFront 원본 URL 관리 및 보안 강화를 위해 백엔드 협업 시 S3 Private 전환 및 단일 엔드포인트 연동 방식 제안 및 적용",
        },
      ],
    },
  },
  {
    title: "SIDO (시도) - 일일 소통 미션 플랫폼",
    period: "2025.11.15 - 2025.11.16",
    role: "Frontend Lead & Product Design",
    description: "현대인의 사회적 고립감 해소를 돕는 AI 기반 데일리 소통 미션 및 기부 연계 웹앱",
    fullDescription:
        "현대 사회의 단절과 고립감을 완화하기 위해 매일 부담 없는 소통 미션을 추천하고, 달성 시 획득한 리워드로 기부에 참여하는 플랫폼입니다. 2025 유니드 해커톤에서 AI 바이브코딩 워크플로우를 주도적으로 활용해 UI/UX 디자인부터 프론트엔드 전반을 단기간에 구축 및 배포했습니다.",
    image: "/pro2.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "v0 / Cursor", "Vercel"],
    liveUrl: "https://sido-frontend-beta.vercel.app/",
    githubUrl: "https://github.com/2025-UniD-Hackathon-Team7/sido_frontend",
    details: {
      summary: "일일 맞춤형 미션을 통해 일상 속 자연스러운 상호작용을 유도하고 선한 영향력을 만드는 모바일 뷰 최적화 웹앱 서비스입니다.",
      keyTasks: [
        "기획 의도(현대인의 소통 단절 및 고립감 완화)를 반영한 전체 UI/UX 디자인 및 인터랙션 설계",
        "아침/점심/저녁 시간대별 3단계 난이도 맞춤형 일일 소통 미션 추천 시스템 UI 구현",
        "미션 달성 시 획득하는 SEED 기반의 '나무 키우기 및 기부' 게이미피케이션 플로우 개발",
        "Cursor, v0 등 최신 생성형 AI 도구를 적극 도입해 기획부터 프로덕션 배포까지 단 2일 만에 완성"
      ],
      troubleshooting: [
        {
          title: "제한된 시간 내 단독 프론트엔드/디자인 구축 (AI 바이브코딩 도입)",
          problem: "단기 해커톤 환경에서 팀 내 프론트엔드 개발 역량 편차로 인해 기획부터 디자인, 클라이언트 구현까지 혼자서 신속히 완성해야 하는 병목 발생",
          process: "v0.dev와 Cursor를 적극 결합한 'AI 바이브코딩' 워크플로우를 구축하여, 컴포넌트 프로토타이핑과 반복적인 스타일링 작업 시간을 획기적으로 단축",
          solution: "48시간 내에 인터랙티브한 모바일 웹 UI와 미션/캘린더/마이페이지 전 플로우를 완성하고 Vercel을 통해 안정적으로 실서비스 배포 성공"
        },
        {
          title: "진입 장벽을 낮추기 위한 단계별 사용자 경험(UX) 설계",
          problem: "낯선 사람과의 상호작용에 부담을 느끼는 유저들의 이탈 방지 필요",
          process: "난이도별(쉬움/보통/어려움) 선택 구조와 귀여운 캐릭터/말투 템플릿 UI를 도입하여 소통의 심리적 장벽 완화",
          solution: "가벼운 시도(인사하기, 칭찬하기)가 성취감과 기부로 이어지는 선순환 구조를 직관적인 모바일 인터페이스로 구현"
        }
      ]
    }
  },
  {
    title: "AeroAction (NASA Space Apps Challenge)",
    period: "2025.10",
    role: "Frontend Lead & Data Visualization",
    description: "NASA 지구 데이터와 지상 관측망을 융합한 호흡기 취약 계층 맞춤형 대기질 예측 및 행동 가이드 웹앱",
    fullDescription:
        "NASA Space Apps Challenge 2025 참가작으로, 'From EarthData to Action' 주제에 맞추어 NASA 위성 데이터(TEMPO, GEOS-CF)와 지상 관측망(OpenAQ)을 융합 분석해 호흡기 질환자 및 특수 직군을 위한 실시간 대기 위험 지수(ARI)와 행동 가이드를 시각화한 인터랙티브 웹 플랫폼입니다.",
    image: "/pro3.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "MapLibre / Leaflet", "Chart.js", "NASA EarthData"],
    githubUrl: "https://github.com/nasa-app-challenge-2025/unit",
    details: {
      summary: "방대한 다차원 지구과학 관측 데이터를 가공하여, 일반 대중 및 천식/호흡기 민감군이 직관적으로 이해할 수 있는 지도 기반 위험 지수 대시보드를 구축했습니다.",
      keyTasks: [
        "NASA GEOS-CF 및 OpenAQ 관측 데이터를 기반으로 산출된 천식 위험 지수(ARI: PM2.5, O₃, NO₂ 가중합) 및 행동 권고 카드 UI 구현",
        "위치 기반 대기질 공간 분포를 시각화하기 위한 인터랙티브 지도(Map) 타일 렌더링 및 지점별 데이터 마커 연동",
        "시간대별 오염물질 기여도(스택 바) 및 예보 변화 추이를 직관적으로 확인할 수 있는 반응형 시계열 차트 컴포넌트 개발",
        "천식 환자, 등산객, 소방관 등 사용자 페르소나별 맞춤 위험 알림 및 안전 수칙 필터링 인터페이스 설계"
      ],
      troubleshooting: [
        {
          title: "복잡한 지구과학 다종 데이터의 직관적 시각화 및 지도 렌더링",
          problem: "위성(격자형 컬럼 데이터)과 지상 관측소(시계열 포인트 데이터)의 상이한 데이터 규격으로 인해 웹 클라이언트 지도 상에서 실시간 렌더링 지연 및 정보 과부하 발생",
          process: "복잡한 원천 수치를 직관적인 4단계 위험도(낮음/주의/높음/매우 높음) 및 시각적 컴포넌트로 추상화하고, 지도 라이브러리와 시계열 차트를 결합한 통합 대시보드 레이아웃 설계",
          solution: "사용자가 본인의 위치나 관심 지역을 검색했을 때 위험 요인(예: 오후 오존 피크, 출퇴근 시간 NO₂ 급증)을 즉시 파악할 수 있는 고반응성 인터랙티브 맵 뷰 완성"
        },
        {
          title: "해커톤 제한 시간 내 방대한 도메인 데이터 파이프라인 연동",
          problem: "NASA API의 복잡한 요청 규격 및 단위 변환(ppb, µg/m³, AOD 등)을 단기간 내 프론트엔드 상태 관리에 효율적으로 녹여내야 하는 과제",
          process: "클라이언트 단에서 비동기 데이터 패칭 및 데이터 캐싱 구조를 설계하고, 오염물질별 지수화(WHO/EPA 기준 정규화) 로직을 유틸리티 모듈로 모듈화하여 컴포넌트 간 재사용성 극대화"
        }
      ]
    }
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
      <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-6 bg-white snap-start">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] font-heading">Featured Projects</h2>
            <p className="text-lg text-[#555555] max-w-2xl mx-auto">A selection of my recent work and side projects</p>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                    className="group relative rounded-2xl bg-[#F5F6F8] overflow-hidden cursor-pointer flex flex-col justify-between border border-[#EAEAEA]"
                    style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
                >
                  <div>
                    {/* Card Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-[#F5F6F8]">
                      <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#888888]">
                        <span>{project.role}</span>
                        {project.period && <span>{project.period}</span>}
                      </div>
                      <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#2962FF] transition-colors duration-300 font-heading">
                        {project.title}
                      </h3>
                      <p className="text-[#555555] text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                          <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-[#2962FF] border border-[#E0E0E0]"
                          >
                      {tag}
                    </span>
                      ))}
                      {project.tags.length > 4 && (
                          <span className="px-2 py-1 text-xs text-[#888888]">+{project.tags.length - 4}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Project Detail Modal */}
          <AnimatePresence>
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm overflow-y-auto"
                >
                  <motion.div
                      initial={{ scale: 0.95, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.95, opacity: 0, y: 20 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
                  >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#222222] transition-colors duration-200 shadow-md backdrop-blur-md"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Modal Scrollable Container */}
                    <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
                      {/* 1. Top Header */}
                      <div className="space-y-2 border-b border-[#EAEAEA] pb-4">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-[#2962FF] font-medium">
                          <span>{selectedProject.role}</span>
                          {selectedProject.period && (
                              <span className="flex items-center gap-1 text-[#888888] font-normal">
                          <Calendar className="w-4 h-4" />
                                {selectedProject.period}
                        </span>
                          )}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#222222] font-heading">
                          {selectedProject.title}
                        </h3>
                      </div>

                      {/* 2. Image */}
                      <div className="w-full rounded-2xl p-[5px] flex items-center justify-center">
                        <img
                            src={selectedProject.image || "/placeholder.svg"}
                            alt={selectedProject.title}
                            className="h-auto max-h-80"
                        />
                      </div>

                      {/* 3. Description */}
                      <div className="space-y-2">
                        <p className="text-[#444444] leading-relaxed text-sm sm:text-base">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      {/* 4. Tags */}
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F5F6F8] text-[#2962FF] border border-[#E0E0E0]"
                            >
                        {tag}
                      </span>
                        ))}
                      </div>

                      {/* 5. Key Tasks */}
                      {selectedProject.details?.keyTasks && (
                          <div className="space-y-3 bg-[#F9FAFC] p-5 rounded-2xl border border-[#EAEAEA]">
                            <h4 className="text-base font-bold text-[#222222] flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-[#2962FF]" />
                              주요 개발 내역 (Key Tasks)
                            </h4>
                            <ul className="space-y-2 text-sm text-[#555555]">
                              {selectedProject.details.keyTasks.map((task, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-[#2962FF] font-bold">•</span>
                                    <span>{task}</span>
                                  </li>
                              ))}
                            </ul>
                          </div>
                      )}

                      {/* 6. Troubleshooting */}
                      {selectedProject.details?.troubleshooting && (
                          <div className="space-y-4">
                            <h4 className="text-base font-bold text-[#222222] flex items-center gap-2">
                              <Wrench className="w-5 h-5 text-[#2962FF]" />
                              문제 해결 & 아키텍처 고민 (Troubleshooting)
                            </h4>
                            <div className="space-y-3">
                              {selectedProject.details.troubleshooting.map((item, idx) => (
                                  <div key={idx} className="p-4 rounded-xl bg-white border border-[#E0E0E0] space-y-1.5 text-sm text-[#555555]">
                                    <p className="font-bold text-[#222222] text-sm sm:text-base mb-2">
                                      {idx + 1}. {item.title}
                                    </p>
                                    <p>- Problem: {item.problem}</p>
                                    <p>- Solution: {item.process}</p>
                                    {item.solution && <p>- Impact: {item.solution}</p>}
                                  </div>
                              ))}
                            </div>
                          </div>
                      )}

                      {/* 7. Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {selectedProject.liveUrl && (
                            <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2962FF] text-white text-sm font-medium hover:bg-[#1E4FCC] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit Service
                            </a>
                        )}
                        {selectedProject.githubUrl && (
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#222222] border border-[#E0E0E0] text-sm font-medium hover:bg-[#F5F6F8] transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              View Code
                            </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
  )
}