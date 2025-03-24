import { TextInput, Select, TextArea, Button, Modal } from "@gravity-ui/uikit";
import { useEffect, useState } from "react";
import { Attraction, placeData, Status } from "../types.d";
import YandexMap from "./YandexMap";

interface IAttractionForm {
  initialData?: Partial<Attraction> | null;
  onSave: (data: any) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export function AttractionForm({ initialData, onSave, isOpen, setIsOpen }: IAttractionForm) {
  const [formData, setFormData] = useState<Partial<Attraction>>(
    initialData || {
      name: "",
      description: "",
      rating: 3,
      photoUrl: "",
      location: "",
      lat: 21,
      lng: 76,
      status: Status.PLANNED,
    }
  );

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  function setPlaceInfo(object: placeData) {
    setFormData((prev) => {
      return { ...prev, ...object };
    });
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      rating: Number(formData.rating),
      lat: Number(formData.lat),
      lng: Number(formData.lng),
      status: formData.status === Status.PLANNED ? Status.PLANNED : Status.VISITED,
    });
  };

  return (
    <>
      <Button view="action" onClick={() => setIsOpen(true)}>
        {initialData ? "Edit" : "Add New"} Attraction
      </Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-content">
          <form onSubmit={handleSubmit} className="attraction-form">
            <div className="form-row">
              <TextInput label="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

              <TextArea
                name="Description"
                placeholder={"Description"}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                minRows={3}
              />
              <TextArea name="Location" placeholder={"Location"} value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} minRows={2} />

              <TextInput label="Latitude" type="number" value={`${formData.lat}`} onChange={(e) => setFormData({ ...formData, lat: Number(e.target.value) })} />
              <TextInput label="Longitude" type="number" value={`${formData.lng}`} onChange={(e) => setFormData({ ...formData, lng: Number(e.target.value) })} />
              <TextInput label="photoUrl" type="text" value={formData.photoUrl} onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })} />
            </div>
            <div className="form-selectors">
              <Select
                label="Rating"
                value={[`${formData.rating}`]}
                onUpdate={(value) => setFormData({ ...formData, rating: Number(value[0]) })}
                options={[1, 2, 3, 4, 5].map((n) => ({ value: n.toString(), content: n.toString() }))}
              />

              <Select
                label="Status"
                value={[`${formData.status}`]}
                onUpdate={(value) => setFormData({ ...formData, status: Number(value[0]) })}
                options={[
                  { value: "planned", content: "Planned" },
                  { value: "visited", content: "Visited" },
                ]}
              />
            </div>

            <div className="modal-actions">
              <Button view="normal" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" view="action" width="max">
                {initialData ? "Update" : "Create"} Attraction
              </Button>
            </div>
          </form>
          <div className="else">
            <p style={{ color: "gray" }}>Or use Yandex Maps</p>
          </div>
          <div className="ymap">
            <YandexMap setPlaceInfo={setPlaceInfo} lat={formData.lat!} lng={formData.lng!} />
          </div>
        </div>
      </Modal>
    </>
  );
}
