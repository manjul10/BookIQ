import PropTypes from "prop-types";

type size = "small" | "medium" | "large";
type variation = "primary" | "secondary" | "danger";

const sizes: Record<size, string> = {
  small:
    "text-[1.2rem] px-[0.8rem] py-[0.4rem] uppercase font-semibold text-center",
  medium: "text-[1.4rem] px-[1.6rem] py-[1.2rem] font-medium",
  large: "text-[1.6rem] px-[2.4rem] py-[1.2rem] font-medium",
};

const variations: Record<variation, string> = {
  primary:
    "text-[--color-brand-50] bg-[--color-brand-600] hover:bg-[--color-brand-700]",
  secondary:
    "text-[--color-grey-600] bg-[--color-grey-0] border border-[--color-grey-200] hover:bg-[--color-grey-50]",
  danger:
    "text-[--color-red-100] bg-[--color-red-700] hover:bg-[--color-red-800]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size;
  variation?: variation;
  className?: string;
}

const Button = ({
  size = "medium",
  variation = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "border-none rounded-[--border-radius-sm] shadow-[--shadow-sm]";
  const sizeClasses = sizes[size] || sizes.medium;
  const variationClasses = variations[variation] || variations.primary;

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variationClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
  className: PropTypes.string,
};

export default Button;
