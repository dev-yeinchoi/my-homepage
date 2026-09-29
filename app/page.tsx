const PROFILE = {
  name: "최예인",
  role: "홈페이지 만드는 사람",
  intro: "안녕하세요! 최예인의 개인 홈페이지입니다.",
  facts: [
    { label: "이름", value: "최예인" },
    { label: "하는 일", value: "Next.js 로 개인 홈페이지 만들기" },
    { label: "관심사", value: "웹 개발, 디자인, 기록하기" },
  ],
};

const LIKES = [
  {
    title: "여행",
    desc: "새로운 곳을 찾아 떠나는 걸 좋아합니다.",
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "초록한 풍경",
    desc: "숲과 들판처럼 초록초록한 녹음이 좋습니다.",
    color: "from-emerald-400 to-green-700",
  },
  {
    title: "꽃",
    desc: "계절마다 피는 꽃을 구경하는 즐거움이 있습니다.",
    color: "from-rose-400 to-pink-600",
  },
  {
    title: "풍경 사진 찍기",
    desc: "보고 있는 순간을 카메라에 담아 둡니다.",
    color: "from-amber-400 to-orange-600",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-8 px-5 py-14">
      <header className="flex flex-col gap-3">
        <div
          aria-hidden="true"
          className="h-16 w-16 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600"
        />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {PROFILE.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {PROFILE.role}
        </p>
      </header>

      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {PROFILE.intro}
      </p>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
          소개
        </h2>
        <ul className="flex flex-col gap-2">
          {PROFILE.facts.map((fact) => (
            <li
              key={fact.label}
              className="flex flex-col gap-1 rounded-xl border border-gray-200 p-4 dark:border-gray-800 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="w-20 shrink-0 text-sm text-gray-400">
                {fact.label}
              </span>
              <span className="break-words text-base">{fact.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
          내가 좋아하는 것들
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LIKES.map((like) => (
            <li
              key={like.title}
              className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <div
                aria-hidden="true"
                className={`h-28 w-full bg-gradient-to-br ${like.color}`}
              />
              <div className="flex flex-col gap-1 p-4">
                <h3 className="text-base font-semibold">{like.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {like.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
