import { Router } from 'express';
const router = Router();

// Sample in-memory hotels data
const hotels = [
  {
    id: 1, name: 'Lotte Hotel Seoul', lat: 37.5656, lng: 126.9794,
    address: '중구 을지로 30', nearest_station: '을지로입구역', station_distance_m: 200,
    images: [{ url: '/images/lotte1.jpg', alt: 'Lotte exterior' }],
    description: '5-star hotel in the heart of Seoul.'
  },
  {
    id: 2, name: 'Myeongdong Guesthouse', lat: 37.5612, lng: 126.9861,
    address: '중구 명동', nearest_station: '명동역', station_distance_m: 350,
    images: [{ url: '/images/myeong1.jpg', alt: 'Myeongdong street' }],
    description: 'Cozy guesthouse near shopping and food streets.'
  }
];

router.get('/', (req, res) => {
  // Optional: support bbox param to filter by map view (lat1,lng1,lat2,lng2)
  const { bbox } = req.query;
  if (bbox) {
    try {
      const [lat1,lng1,lat2,lng2] = String(bbox).split(',').map(Number);
      const filtered = hotels.filter(h => h.lat >= Math.min(lat1,lat2) && h.lat <= Math.max(lat1,lat2)
        && h.lng >= Math.min(lng1,lng2) && h.lng <= Math.max(lng1,lng2));
      return res.json(filtered);
    } catch (e) {
      // ignore and return full list
    }
  }
  res.json(hotels);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const h = hotels.find(x => x.id === id);
  if (!h) return res.status(404).json({ error: 'not found' });
  res.json(h);
});

// Placeholder for S3 presign URL generation
router.post('/upload-url', (req, res) => {
  // This is a stub. In production, generate a presigned S3 URL here.
  res.json({ url: 'https://example.com/presigned-url', key: 'hotels/sample.jpg', publicUrl: 'https://cdn.example.com/hotels/sample.jpg' });
});

export default router;
