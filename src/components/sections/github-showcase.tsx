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
    const response = await fetch("https://api.github.com/users/qouda/repos?sort=updated&per_page=4", {
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
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8" id="github">
      <div className="mb-8 text-center">
        <span className="inline-flex rounded-full border border-slate-500/25 bg-slate-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">
          GitHub
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Latest Open Source Activity</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {repos.length ? (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="glass-card interactive rounded-2xl p-5"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{repo.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{repo.description ?? "No description provided."}</p>
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
      </div>
    </section>
  );
}
