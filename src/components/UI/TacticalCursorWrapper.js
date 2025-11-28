'use client';

import dynamic from 'next/dynamic';

const TacticalCursor = dynamic(
  () => import('@/components/UI/TacticalCursor'),
  { ssr: false }
);

export default function TacticalCursorWrapper() {
  return <TacticalCursor />;
}