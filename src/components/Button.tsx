import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx(
                "px-3 bg-cyan-500 h-11 text-black rounded font-semibold text-blacktext-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}