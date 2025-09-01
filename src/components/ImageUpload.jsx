import { useRef, useState } from "react"
import { Input } from "./ui/input"
import Cropper from "react-cropper"
import 'cropperjs/dist/cropper.css';

const ImageUpload = () =>{
    const [photo, setPhoto] = useState(null)
    const cropperRef = useRef(null)
    const [croppedImage, setCroppedImage] = useState()
    const [imagesWithCaption, setImagesWithCaption] = useState([])
    const [imageUploadingError, setImageUploadingError] = useState(null)

    const handleImageChange = (e) =>{
      const selectedFiles = Array.from(e.target.files)

      if(selectedFiles.length > 5){
        setImageUploadingError(true)
        return
      }

      setImagesWithCaption(selectedFiles.map((file) =>{
        const obj = {
          image : URL.createObjectURL(file),
          caption: ""
        }
        return obj
      }))
      
    }

    const handleCaptionChange = (e,index) =>{
      const files = [...imagesWithCaption]
      files[index].caption = e.target.value
      setImagesWithCaption(files)
    }


    const handleImageDelete = (delPhotoIn) =>{
      setImagesWithCaption(imagesWithCaption.filter((image, index) => index !== delPhotoIn))
    }

    const handlePhotoChange = (e) =>{
        const file = e.target.files[0]
        if(file){
            const photoUrl = URL.createObjectURL(file)
            setPhoto(photoUrl)
        }
    }

    const onCrop = () =>{
      const cropper = cropperRef.current?.cropper
      if(cropper){
        setCroppedImage(cropper.getCroppedCanvas().toDataURL())
      }
    }
    return(
        <>
            <div>
                <Input type="file" onChange={handlePhotoChange} />
            </div>

            {
              photo &&
              <div className="flex justify-between mt-2">
                <Cropper
                  src={photo}
                  style={{ height: 300, width: "50%", marginTop: "18px" }}
                  ref={cropperRef}
                  crop={onCrop}
                  initialAspectRatio={1}
                  guides={false}
                  viewMode={1}
                  dragMode="move"
                  scalable={true}
                  cropBoxResizable={true}
                  cropBoxMovable={true}
                  

                />
                <div>
                  <h3>Preview</h3>
                  <img src={croppedImage} alt="photo" style={{width: "300px", height: "auto"}}/> 
                </div>
              </div>
            }


            <div>
              <input type="file"
                multiple
                accept="image/jpeg, image/png"
                onChange={handleImageChange}
              />

              {
                imagesWithCaption.map((file, index) =>(<div key={index}>
                  <img src={file.image} alt="photo" className="h-28" />
                  <input type="text" 
                    placeholder="Enter Caption"
                    value={file.caption}
                    onChange={(e) => {handleCaptionChange(e, index)}}
                  />
                  <button onClick={() => {handleImageDelete(index)}}>Remove</button>
                </div>
                ))
              }

              {
                imageUploadingError && 
                <p>More Then 5 Images is not allowed Please add 5 or less than 5 images</p>
              }


            </div>

        </>
    )
}

export default ImageUpload


