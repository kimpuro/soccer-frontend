import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const projects = [
    { name: '전체 축구팀 오름차순', initials: '1', href: 'test/1', descriptions: '전체 축구팀 목록을 팀이름 오름차순으로 출력하시오', bgColor: 'bg-pink-600' },
    { name: '포지션 종류', initials: '2', href: 'test/2', descriptions: '플레이어의 포지션 종류를 나열하시오.\n단 중복은 제거하고,\n 포지션이 없으면 빈공간으로 두시오', bgColor: 'bg-purple-600' },
    { name: '포지션 종류 2', initials: '3', href: 'test/3', descriptions: '단 중복은 제거하고, 포지션이 없으면 \'신입\' 으로 기재하시오', bgColor: 'bg-yellow-500' },
    { name: '수원팀 골키퍼', initials: '4', href: 'test/4', descriptions: '수원팀에서 골키퍼(GK)의 이름을 모두 출력하시오.', bgColor: 'bg-green-500' },
    { name: '수원팀 170이상 고씨', initials: '5', href: 'test/5', descriptions: '수원팀에서 성이 고씨이고 키가 170 이상인 선수를 출력하시오.', bgColor: 'bg-pink-600' },
    { name: '삼성블루윙즈, 드래곤즈, 미드필더 170이상', initials: '6', href: 'test/6', descriptions: '소속팀이 삼성블루윙즈이거나\n드래곤즈에 소속된 선수들이어야 하고,\n포지션이 미드필더(MF:Midfielder)이어야 한다.\n키는 170 센티미터 이상이고 180 이하여야 한다.', bgColor: 'bg-purple-600' },
    { name: '수원 연고지 골키퍼', initials: '7', href: 'test/7', descriptions: '수원을 연고지로 하는 골키퍼는 누구인가?', bgColor: 'bg-yellow-500' },
    { name: '서울팀 선수들', initials: '8', href: 'test/8', descriptions: '서울팀 선수들 이름, 키, 몸무게 목록으로 출력하시오', bgColor: 'bg-green-500' },
    { name: '서울팀 BMI', initials: '9', href: 'test/9', descriptions: '서울팀 선수들 이름과 포지션과 키(cm표시)와 몸무게(kg표시)와  각 선수의 BMI지수를 출력하시오', bgColor: 'bg-pink-600' },
    { name: '수원,대전 골키퍼', initials: '10', href: 'test/10', descriptions: '수원팀(K02) 과 대전팀(K10) 선수들 중 포지션이 골키퍼(GK) 인 선수를 출력하시오', bgColor: 'bg-purple-600' },
    { name: '팀과 연고지', initials: '11', href: 'test/11', descriptions: '팀과 연고지를 연결해서 출력하시오', bgColor: 'bg-yellow-500' },
    { name: '수원, 대전 180이상 183이하', initials: '12', href: 'test/12', descriptions: '수원팀(K02) 과 대전팀(K10) 선수들 중 키가 180 이상 183 이하인 선수들', bgColor: 'bg-green-500' },
    { name: '포지션 배정X', initials: '13', href: 'test/13', descriptions: '모든 선수들 중 포지션을 배정 받지 못한 선수들의 팀명과 선수이름 출력 둘다 오름차순', bgColor: 'bg-pink-600' },
    { name: '3월 17일', initials: '14', href: 'test/14', descriptions: '팀과 스타디움, 스케줄을 조인하여 2012년 3월 17일에 열린 각 경기의 팀이름, 스타디움, 어웨이팀 이름 출력', bgColor: 'bg-purple-600' },
    { name: '3월 17일 포항 스틸러스', initials: '15', href: 'test/15', descriptions: '2012년 3월 17일 경기에 포항 스틸러스 소속 골키퍼(GK) 선수, 포지션,팀명 (연고지포함), 스타디움, 경기날짜를 구하시오', bgColor: 'bg-yellow-500' },
    { name: '홈팀이 3점차이', initials: '16', href: 'test/16', descriptions: '홈팀이 3점이상 차이로 승리한 경기의 경기장 이름, 경기 일정 홈팀 이름과 원정팀 이름을 구하시오', bgColor: 'bg-green-500' },
    { name: '경기장', initials: '17', href: 'test/17', descriptions: 'STADIUM 에 등록된 운동장 중에서 홈팀이 없는 경기장까지 전부 나오도록', bgColor: 'bg-pink-600' },
    { name: '최상단 로우', initials: '18', href: 'test/18', descriptions: '페이지네이션 로직을 위한 플레이어 테이블에서 최상단 5개 로우를 출력', bgColor: 'bg-purple-600' },
    { name: '인천 유나이티스팀의 평균보다 작은', initials: '19', href: 'test/19', descriptions: '평균키가 인천 유나이티스팀(\'K04\')의 평균키  보다 작은 팀의 팀ID, 팀명, 평균키 추출', bgColor: 'bg-yellow-500' },
    { name: 'MF 팀명, 선수명, 백넘버', initials: '20', href: 'test/20', descriptions: '포지션이 MF 인 선수들의 소속팀명 및  선수명, 백넘버 출력', bgColor: 'bg-green-500' },
    { name: '가장 키큰 5명', initials: '21', href: 'test/21', descriptions: '가장 키큰 선수 5명 소속팀명 및  선수명, 백넘버 출력,', bgColor: 'bg-pink-600' },
    { name: '평균키보다 작은', initials: '22', href: 'test/22', descriptions: '선수 자신이 속한 팀의 평균키보다 작은  선수 정보 출력', bgColor: 'bg-purple-600' },
    { name: '2012년 5월 경기장', initials: '23', href: 'test/23', descriptions: '2012년 5월 한달간 경기가 있는 경기장  조회', bgColor: 'bg-yellow-500' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SQLTestCards() {
    return (
        <div>
            <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2>
            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {projects.map((project) => (
                    <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
                        <div
                            className={classNames(
                                project.bgColor,
                                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                            )}
                        >
                            {project.initials}
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white h-40">
                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                                    {project.name}
                                </a>
                                <p className="text-gray-500" style={{ whiteSpace: 'pre-wrap' }}>{project.descriptions} </p>
                            </div>
                            <div className="flex-shrink-0 pr-2">
                                <button
                                    type="button"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">Open options</span>
                                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
