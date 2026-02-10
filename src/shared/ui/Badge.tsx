export function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700">
      {label}
    </span>
  );
}
