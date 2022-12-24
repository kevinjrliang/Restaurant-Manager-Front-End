import './FloorPlan.css';
//import table from './../../../Images/table.png'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from '../../../Components/Drag-Drop/DragDrop';

export default function FloorPlan()
{
    return(
        <DndProvider backend = {HTML5Backend}>
            <div className='FloorPlan'>
                <DragDrop/>
            </div>
        </DndProvider>
    );
}