import { AttractionForm } from "../components/AttractionForm";
import { EditableTable } from "../components/EditableTable";
import { Attraction, Status } from "../types.d";
import "../styles/admin.css"
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { RootState } from "../store";
import { createAttractionThunk, deleteAttractionThunk, fetchAttractionsThunk, updateAttractionThunk } from "../store/attractionSlice";
import { useEffect, useState } from "react";

export const AdminPage = () => {
  const attractions = useAppSelector((state:RootState) => state.attractions)
  const dispatch = useAppDispatch()
  let [isOpen, setIsOpen] = useState(false)
  let [currMode, setCurrMode] = useState("CREATE")
  let [currAttraction, setCurrAttraction] = useState<null | Partial<Attraction>>(null)
  useEffect(() => {
    !attractions || dispatch(fetchAttractionsThunk())
  },[])
    const handleDelete = (id: number) => {
      dispatch(deleteAttractionThunk(id))
    };
    const handleEdit = (attraction: Attraction) => {
      setIsOpen(true)
      setCurrMode("EDIT")
      setCurrAttraction(prev => prev = attraction)
    }
    const handleSave = (data:any) => {
      if(currMode === "CREATE") {
        dispatch(createAttractionThunk(data))
      } else {
        dispatch(updateAttractionThunk(data as Attraction))
      }
      setIsOpen(false)
    }
  
    return (
      <div className="admin">
        <AttractionForm onSave={handleSave} isOpen={isOpen} setIsOpen={setIsOpen} initialData={currAttraction}/>
        <EditableTable
          data={attractions}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    );
  };