import { AttractionForm } from "../components/AttractionForm";
import { EditableTable } from "../components/EditableTable";
import { Attraction, Status } from "../types.d";
import "../styles/admin.css"

export const AdminPage = () => {
    // const { data, mutate } = useSWR('/api/attractions');
    const data: Attraction[] = [{
        "id": 1,
        "name": "Red Square",
        "description": "Red Square is one of the oldest and largest squares in Moscow, Russia. It is located in Moscow's historic centre, along the eastern walls of the Kremlin",
        "addedDate": new Date(),
        "rating": 2.5,
        "photoUrl": "https://i.ibb.co/wMkFry0/ff.jpg",
        "location": "Moscow, Russia",
        "lat": 55.754093,
        "lng": 37.474093,
        "status": Status.PLANNED
      }
    ]
    const handleDelete = (id: number) => {
    //   fetch(`/api/attractions/${id}`, { method: 'DELETE' })
    //     .then(() => mutate());
    console.log(`handle delete attraction: ${id}`)
    };
    const handleEdit = () => {
        console.log("edited")
    }
  
    return (
      <div className="admin">
        <AttractionForm onSave={() => console.log("mutate")} />
        <EditableTable
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    );
  };