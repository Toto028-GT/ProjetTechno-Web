'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      Chargement de la carte...
    </div>
  )
});

export function MapWrapper({ logements, style }: { logements: any[]; style?: React.CSSProperties }) {
  return <MapComponent logements={logements} style={style} />;
}