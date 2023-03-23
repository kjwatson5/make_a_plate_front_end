import {useState} from 'react';
import Button from './Button';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { useGetData } from '../custom-hooks/FetchData';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90, hide: true},
    {field: 'main_course', headerName: 'Main Course', flex: 1},
    {field: 'vegetable', headerName: 'Vegetable', flex: 1},
    {field: 'side_dish', headerName: 'Side Dish', flex: 1},
    {field: 'dessert', headerName: 'Dessert', flex: 2}
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { foodData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<any>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        console.log(`Selection model: ${selectionModel}`);
        setTimeout( () => { window.location.reload()}, 500)
    }

    return(
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row">
                <div
                    className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    <button>
                        Add New Plate
                    </button>
                </div>
                <Button onClick={handleOpen} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'>Update</Button>
                <Button onClick={deleteData} className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'>Delete</Button>
            </div>
            <div className={open ? 'hidden': 'container mx-10 my-5 flex flex-col'}
                style={{height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-rounded">My Plate</h2>
                <DataGrid rows={foodData} columns={columns} rowsPerPageOptions={[25,50,100]}
                checkboxSelection={true}
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
        </>
    )
}

export default DataTable
