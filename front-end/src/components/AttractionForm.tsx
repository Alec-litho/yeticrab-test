import { 
    TextInput, 
    Select, 
    TextArea, 
    Button,
  } from '@gravity-ui/uikit';
  import { useState } from 'react';
import { Attraction, Status } from '../types.d';
  
  export function AttractionForm({ 
    initialData,
    onSave,
  }: {
    initialData?: Partial<Attraction>;
    onSave: (data: Omit<Attraction, 'id' | 'addedDate'>) => void;
  }) {
    const [formData, setFormData] = useState({
      name: initialData?.name || '',
      description: initialData?.description || '',
      rating: initialData?.rating?.toString() || '3',
      photoUrl: initialData?.photoUrl || '',
      location: initialData?.location || '',
      lat: initialData?.lat?.toString() || '',
      lng: initialData?.lng?.toString() || '',
      status: initialData?.status?.toString() || "planned",
    });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave({
        ...formData,
        rating: Number(formData.rating),
        lat: Number(formData.lat),
        lng: Number(formData.lng),
        status: formData.status === "planned"? Status.PLANNED : Status.VISITED
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="attraction-form">
        <TextInput
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        
        <TextArea
          name="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          minRows={3}
        />
  
        <div className="form-row">
          <TextInput
            label="Latitude"
            type="number"
            value={formData.lat}
            onChange={(e) => setFormData({ ...formData, lat: e.target.value })}
          />
          
          <TextInput
            label="Longitude"
            type="number"
            value={formData.lng}
            onChange={(e) => setFormData({ ...formData, lng: e.target.value })}
          />
        </div>
  
        <Select
          label="Rating"
          value={[formData.rating]}
          onUpdate={(value) => setFormData({ ...formData, rating: value[0] })}
          options={[1,2,3,4,5].map((n) => ({ value: n.toString(), content: n.toString() }))}
        />
  
        <Select
          label="Status"
          value={[formData.status]}
          onUpdate={(value) => setFormData({ ...formData, status: value[0]})}
          options={[
            { value: 'planned', content: 'Planned' },
            { value: 'visited', content: 'Visited' },
          ]}
        />
  
        <div className="form-actions">
          <Button type="submit" view="action" width="max">
            {initialData ? 'Update' : 'Create'} Attraction
          </Button>
        </div>
      </form>
    );
  }