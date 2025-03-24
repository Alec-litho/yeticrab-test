import { Table, Text, Icon, Button } from '@gravity-ui/uikit';
import { MapPin } from '@gravity-ui/icons';
import { Attraction, Status } from '../types.d';


export const columns = [
    { id: 'photo', name: 'Photo', width: 120 },
    { id: 'name', name: 'Name' },
    { id: 'rating', name: 'Rating', width: 120 },
    { id: 'location', name: 'Location' },
    { id: 'status', name: 'Status', width: 120 },
    { id: 'map', name: 'Map', width: 120 },
  ];
export function AttractionsTable({ data }: { data: Attraction[] }) {

  const rows = data.map((attraction) => ({
    photo: (
      <img 
        src={attraction.photoUrl} 
        alt={attraction.name} 
        className="attraction-photo"
        style={{ width: 100, height: 60, objectFit: 'cover' }}
      />
    ),
    name: (
      <div>
        <Text variant="header-1">{attraction.name}</Text>
        <Text color="secondary">{attraction.description}</Text>
      </div>
    ),
    rating: (
      <div className="rating-stars">
        {'★'.repeat(attraction.rating).padEnd(5, '☆')}
      </div>
    ),
    location: attraction.location,
    status: (
      <Text color={attraction.status === Status.VISITED ? 'primary' : 'warning'}>
        {attraction.status}
      </Text>
    ),
    map: (
      <Button 
        href={attraction.photoUrl} 
        target="_blank"
        view="outlined"
      >
        <Icon data={MapPin} size={16} />
        Show on Map
      </Button>
    ),
  }));

  return (
    <Table
      columns={columns}
      data={rows}
      edgePadding={true}
      verticalAlign="middle"
    />
  );
}