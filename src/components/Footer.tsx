import ThriveLogo from "./ThriveLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <ThriveLogo className="h-6 w-6" />
          <span className="text-sm font-bold text-foreground">Thrive</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-text-secondary transition-colors hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-text-secondary transition-colors hover:text-foreground">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-text-secondary transition-colors hover:text-foreground">
            Contact
          </a>
        </div>

        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Thrive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
