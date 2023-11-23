import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariant = cva("rounded-md flex items-center justify-center", {
  variants: {
    variant: {
      default: ["bg-white", "text-black"],
      purple: ["bg-brandColor", "text-white"],
    },
    size: {
      default: ["py-2", "px-4", "text-sm"],
      sm: ["py-3", "px-5", "text-lg"],
      lg: ["py-5", "px-5", "text-lg"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariant>;

interface ButtonProps extends ButtonVariantProps {
  children: ReactNode;
}

export const Button = ({ size, variant, children }: ButtonProps) => {
  return (
    <button className={twMerge(clsx(buttonVariant({ variant, size })))}>
      {children}
    </button>
  );
};
