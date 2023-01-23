import type { ReactNode } from 'react';

type ConditionalWrapperProps = {
  children: ReactNode;
  condition?: boolean;
  fallback?: ReactNode;
};

const ConditionalWrapper = ({
  children,
  condition,
  fallback,
}: ConditionalWrapperProps) => {
  if (condition) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
};

export default ConditionalWrapper;
