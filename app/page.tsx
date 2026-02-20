import { ProfileCard } from "@/components/profile-card"
import { ReposList } from "@/components/repos-list"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <div className="flex w-full max-w-3xl flex-col items-center gap-4 lg:flex-row lg:items-start">
        <ProfileCard />
        <ReposList />
      </div>
    </main>
  )
}
