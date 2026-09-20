type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

async function getGithubRepos() {
  // Pull latest repositories with ISR caching for performance.
  // If GitHub is temporarily unreachable during build, fail gracefully.
  try {
    const response = await fetch("https://api.github.com/users/Muhammad-Bello-Ibrahim/repos?sort=updated&per_page=4", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [] as GitHubRepo[];
    }

    return (await response.json()) as GitHubRepo[];
  } catch {
    return [] as GitHubRepo[];
  }
}

export async function GithubShowcaseSection() {
  const repos = await getGithubRepos();

  return (
    <section className="bg-white py-24 dark:bg-[#0E3746]" id="github">
      <div className="section-shell">
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow inline-flex rounded-full border border-black/10 px-3 py-1.5 text-[#BE2623] dark:border-white/10">
          GitHub
        </span>
        <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl">Latest public repositories.</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {repos.length ? (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="interactive rounded-[1.75rem] border border-black/10 bg-[#F4F2EC] p-7 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p className="mt-3 line-clamp-2 text-sm text-black/60 dark:text-white/60">{repo.description ?? "No description provided."}</p>
              <div className="mt-3 flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span>★ {repo.stargazers_count}</span>
                <span>{repo.language ?? "Mixed"}</span>
              </div>
            </a>
          ))
        ) : (
          <p className="rounded-2xl border border-slate-500/20 bg-white/60 p-5 text-sm text-slate-600 dark:bg-slate-900/50 dark:text-slate-300">
            GitHub data could not be loaded right now.
          </p>
        )}
      </div></div>
    </section>
  );
}
