import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "shadow-[0_4px_6px_rgba(0,0,0,0.1)] p-6 rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
