import { cva, type VariantProps } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import { IconType } from "react-icons";
import { BiHomeAlt2 } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const iconVariant = cva("rounded-md flex items-center justify-center", {
  variants: {
    bgColor: {
      default: "bg-transparent",
      black: "bg-black",
      purple: "bg-purple-700",
      darkBlue: "bg-blue-950",
    },
    iconColor: {
      default: "text-black",
      white: "text-white",
      blue: "text-blue-500",
    },
    bgSize: {
      default: "p-1",
      sm: "p-[2px]",
      lg: "p-[3px]",
    },
    iconSize: {
      default: "h-8 w-8",
      sm: "h-16 w-16",
      lg: "h-20 w-20",
    },
  },
  defaultVariants: {
    bgColor: "default",
    iconColor: "default",
    bgSize: "default",
    iconSize: "default",
  },
});

type IconVariantProps = VariantProps<typeof iconVariant>;

interface IconBadgeProps extends IconVariantProps {
  icon: IconType;
}

export const IconBadge = ({
  icon: Icon,
  bgColor,
  iconColor,
  bgSize,
  iconSize,
}: IconBadgeProps) => {
  return (
    <div className={twMerge(clsx(iconVariant({ bgColor, bgSize })))}>
      <Icon className={twMerge(clsx(iconVariant({ iconColor, iconSize })))} />
    </div>
  );
};
