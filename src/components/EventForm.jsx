import { eventSchema } from '@/Schema'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useFormik } from 'formik'
import { useRef, useState } from 'react'


function EventForm() {
    const [imagesWithCaption, setImagesWithCaption] = useState([])
    const [imageError, setImageError] = useState(false)
    const fileInputref = useRef()

    const handlePhotoChange = (e) =>{
        const selectedImages = Array.from(e.target.files)

        if(selectedImages.length > 5 ){
            setImageError(true)
            return
        }

        setImagesWithCaption(selectedImages.map((file) =>{
            const obj = {
                image: URL.createObjectURL(file),
                file,
                caption: '',
            }
            return obj
        }))
    }

    const handleRemoveImage = (imageIndex) =>{
        setImagesWithCaption(imagesWithCaption.filter((__dirname, index) =>( imageIndex !== index)))
    }

    const handleCaptionChange = (e, index) =>{
        const newImagesWithCaption = [...imagesWithCaption]
        newImagesWithCaption[index].caption = e.target.value
        setImagesWithCaption(newImagesWithCaption)
    }

    const initialValues = {
        title: '',
        discription: '',
    }

    const {values, errors, touched, setFieldValue, handleBlur, handleSubmit, handleChange, handleReset} = useFormik({
        initialValues,
        validationSchema: eventSchema,
        
        onSubmit: (values, action) =>{
            console.log(values)
            let newValues = {
                ...values,
                images: imagesWithCaption.map(({file, caption}) =>{
                    return {
                        name: file.name,
                        type: file.type,
                        caption,
                    }
                })
            }

            console.log("Validated data",newValues)
            action.resetForm()
            setImagesWithCaption([])
        },
        onReset: (values, action) =>{
            setFieldValue('discription', '') 
            fileInputref.current.value=''
            setImagesWithCaption([])
            setImageError(false) 
        },
    })

  return (
    <>
        <div className='flex justify-center items-center h-dvh'>
            <div className='w-3xl border-2 px-4 pt-4 rounded-2xl shadow-xl'>
                <form onReset={handleReset} onSubmit={handleSubmit} >
                    <h2 className='text-2xl font-bold flex justify-center'>Event Form</h2>
                    <div className='flex flex-col gap-4 p-10'>
                        <div className='flex justify-between'>
                            <label htmlFor='title' className='flex-1/6'>Event Title:</label>
                            <div className='flex-5/6'>
                                <input 
                                    type='text' 
                                    id="title" 
                                    name='title'
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='outline rounded-2xl px-3 w-full'
                                />
                                {errors.title && touched.title &&
                                    <p className='text-red-500 text-sm'>{errors.title}</p>
                                }
                                
                            </div>
                        </div>

                        <div>
                            <label htmlFor='discription'>Event Description:</label>
                            <div>
                                <CKEditor
                                    id="discription"
                                    name="discription"
                                    editor={ClassicEditor}
                                    data={values.discription}
                                    onChange= {(e, editor) =>{
                                        const data = editor.getData()
                                        setFieldValue('discription', data)
                                    }}
                                />
                                {errors.discription && touched.discription &&
                                    <p className='text-red-500 text-sm'>{errors.discription}</p>
                                }
                            </div>
                        </div>
                        
                        <div className='flex justify-between'>
                            <label htmlFor='images' className='flex flex-1/6' >Event Images:</label>
                            <div className='flex-5/6'>
                                <input
                                    className='w-full border'
                                    id="images"
                                    type="file" 
                                    accept='image/jpeg, image/png' 
                                    multiple  
                                    onChange={handlePhotoChange} 
                                    name='images'
                                    ref={fileInputref}
                                />
                                {imageError && <p className='text-red-500 text-sm'>You can only upload up to 5 images.</p>}
                            </div>
                        </div>
                            <div className='flex flex-wrap'>
                                {
                                    imagesWithCaption && 
                                    <>
                                        {
                                            imagesWithCaption.map((fileObj, index) =>(
                                                <div key={index} className='flex flex-col items-center'>
                                                    <img
                                                        src={fileObj.image}
                                                        alt={`Preview ${index}`}
                                                        className='h-24 w-24 object-cover rounded shadow'
                                                    />
                                                    <input
                                                        type='text'
                                                        placeholder='Caption'
                                                        value={fileObj.caption}
                                                        onChange={(e) => handleCaptionChange(e, index)}
                                                        className='mt-2 px-2 border rounded'
                                                    />
                                                    <button
                                                        type='button'
                                                        onClick={() => handleRemoveImage(index)}
                                                        className='text-red-500 mt-1'
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </>
                                }
                            </div>

                        <div className='flex gap-8 px-3 p-3'>
                            <input type="reset" value="Reset" className='w-full border rounded-2xl hover:bg-purple-400 hover:text-white transition duration-500' />
                            <input type="submit" value="Submit" className= 'w-full border rounded-2xl hover:bg-blue-500 hover:text-white transition duration-500' />
                        </div>
                    </div>
                    

                </form>

            </div>

        </div>
    </>
  )
}

export default EventForm