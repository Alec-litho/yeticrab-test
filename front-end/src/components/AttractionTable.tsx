import { Table, Text, Icon, Button } from '@gravity-ui/uikit';
import { MapPin } from '@gravity-ui/icons';
import { Attraction, Status } from '../types.d';
import cutDescription from '../helpers/cutDescription';


export const columns = [
    { id: 'photo', name: 'Photo', width: 100 },
    { id: 'name', name: 'Name', width: 100 },
    { id: 'rating', name: 'Rating', width: 100 },
    { id: 'location', name: 'Location', width: 100 },
    { id: 'status', name: 'Status', width: 100 },
    { id: 'map', name: 'Map', width: 100 },
  ];
export function AttractionsTable({ data, showMap }: { data: Attraction[], showMap: (lat:number, lng:number) => void }) {

  const rows = data.map((attraction) => ({
    
    photo: (
      <img 
        src={attraction.photoUrl || "https://i.ibb.co/BF95xfN/image.png"} 
        alt={attraction.name} 
        className="attraction-photo"
        style={{ width: 100, height: "auto", objectFit: 'cover' }}
      />
    ),
    name: (
      <div>
        <Text variant="header-1">{attraction.name}</Text>
        <Text color="secondary">{cutDescription(attraction.description || "", 100)}</Text>
      </div>
    ),
    rating: (
      <div className="rating-stars">
        {'★'.repeat(attraction.rating).padEnd(5, '☆')}
      </div>
    ),
    location: attraction.location,
    status: (
      <Text color={attraction.status === "VISITED"? 'primary' : 'warning'}>
        {attraction.status ===  "VISITED"? 'visited' : 'planned'}
      </Text>
    ),
    map: (
      <Button 
        onClick={() => showMap(attraction.lat, attraction.lng)} 
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