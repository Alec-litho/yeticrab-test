import { Table, Button, Icon } from '@gravity-ui/uikit';
import { Pencil, TrashBin } from '@gravity-ui/icons';
import { columns } from './AttractionTable'; 
import { Attraction, Status } from '../types.d';

export function EditableTable({
  data,
  onEdit,
  onDelete,
}: {
  data: Attraction[];
  onEdit: (attraction: Attraction) => void;
  onDelete: (id: number) => void;
}) {
  const editableColumns = [
    { 
      id: 'actions', 
      name: 'Actions', 
      width: 120,
      template: (item: Attraction) => (
        <div className="table-actions">
          <Button onClick={() => onEdit(item)}>
            <Icon data={Pencil} size={16} />
          </Button>
          <Button view="outlined-danger" onClick={() => onDelete(item.id)}>
            <Icon data={TrashBin} size={16} />
          </Button>
        </div>
      )
    },
    ...columns.filter(col => col.id !== 'map')
  ];

  return <Table columns={editableColumns} data={data} />;
}