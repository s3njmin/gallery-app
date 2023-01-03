import '../styles/UploadPopupStyling.css';

export default function UploadPopup(props: any) {
    return (
        <div className="upload-popup">
            <p className="prompt"> Choose an image to to upload </p>
            <form onSubmit={props.formSubmit}>
                <input type="file" onChange={(e)=> props.convertFile(e.target.files)} />
            </form>
        </div>
    )
};