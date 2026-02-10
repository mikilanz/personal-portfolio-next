
import "./globals.css";
import { Container } from '@/shared/ui/Container';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <header className="border-b border-neutral-200">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <span className="font-semibold">Personal Portfolio</span>
              <nav className="flex gap-6 text-sm text-neutral-600">
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
              </nav>
            </div>
          </Container>
        </header>

        <main>
          {children}
        </main>

        <footer className="border-t border-neutral-200 py-10 mt-20">
          <Container>
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Joshua Imanuel
            </p>
          </Container>
        </footer>
      </body>
    </html>
  );
}
