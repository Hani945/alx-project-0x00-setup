export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  styles: string;
  size?: "sm" | "md" | "lg";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
}
