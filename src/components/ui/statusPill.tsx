import { statusColors } from '@/constants';
import React from 'react';

interface StatusPillProps extends React.ComponentProps<'span'> {
  status: keyof typeof statusColors;
}

export function StatusPill({ status, style, ...rest }: StatusPillProps) {
  const statusColor = statusColors[status];

  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 500,
        color: statusColor?.fg,
        backgroundColor: statusColor?.bg,
        borderRadius: 9999,
        textTransform: 'capitalize',
        padding: '3px 8px',
        ...style,
      }}
      {...rest}
    >
      {status}
    </span>
  );
}