import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(r => r.data);

export default function MapPage(){
  const { data: hotels, error } = useSWR('/api/hotels', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!hotels) return <div>Loading...</div>;

  return (
    <div style={{ padding: 16 }}>
      <h1>Seoul Hotel Map — Skeleton</h1>
      <p>Open this project locally and connect Kakao map key to render interactive map.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 12 }}>
        {hotels.map((h: any) => (
          <div key={h.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
            <img src={h.images?.[0]?.url || 'https://via.placeholder.com/300x180'} alt={h.name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
            <h3>{h.name}</h3>
            <div>{h.nearest_station} — {h.station_distance_m}m</div>
            <p>{h.description}</p>
            <a href={`https://map.kakao.com/link/to/${encodeURIComponent(h.name)},${h.lat},${h.lng}`} target="_blank" rel="noreferrer">길찾기</a>
          </div>
        ))}
      </div>
    </div>
  );
}
