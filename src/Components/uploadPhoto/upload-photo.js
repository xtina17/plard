import React, {useState} from "react";
import css from "./upload-photo.module.css"
import uploadPhoto from "../../images/vec.png"
import Block from "../Global/FIleBlock/block";

const UploadPhoto = ({id, photo, setPhoto, setFile, styles, textStyles}) => {

    const [error, setError] = useState(null);

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg') {
                if (event.target.files[0].size < 20000000) {
                    setError(null);

                    const reader = new FileReader();
                    const file = event.target.files[0];
                    setFile(file)
                    reader.onloadend = () => {
                        setPhoto(reader.result)
                    }
                    reader.readAsDataURL(file);
                } else {
                    setError('errImgSize');
                }
            } else {
                setError('errImgType');
            }
        }
    };

    return <div style={styles}>
        <label htmlFor={`fileId${id}`}>
            {photo === null ? (
                <div className={css.uploadPhotoBlock}>
                    <img src={uploadPhoto} alt="upload"/>
                    <span style={textStyles}> {`Minimum 50x50`} <br/> {("Upload")} <br/> {"photo"}</span>
                </div>
            ) : (
                <Block
                    photo={photo}
                    styles={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px"
                    }}
                />
            )}
            <input
                type="file"
                id={`fileId${id}`}
                className={css.fileInput}
                onInput={onImageChange}
            />
        </label>
    </div>
}

export default UploadPhoto