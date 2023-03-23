import PlateForm from "./PlateForm";

type Props = {
    id?: string;
    open: boolean;
    onClose?: () => void;
}

function Modal( props: Props) {
    if ( !props.open ) return (<></>);
    return (
        <div
        onClick={ props.onClose }
        className='fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-300 bg-opacity-25'
        >
            <div
            className="max-w-600-px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded"
            onClick={(e) => {
                e.stopPropagation()
            }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-black p-2 rounded hover:bg-white text-red-600 hover:text-orange-600"
                        onClick={props.onClose}>
                            <i className="fa-duotone fa-rectangle-xmark"></i>
                        </p>
                    </div>
                    <div className="flex flex-column items-center text-center mt-3 p-2">
                        <PlateForm id={props.id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
