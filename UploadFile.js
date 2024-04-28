import React, { useState } from 'react'

function UploadFile() {
    const[image, setImage] =useState()
    const[progressBar, setProgressBar] = useState(0)
    const handleFile = (event) => {
        const file = event.target.files[0];

        const fromdata = new FormData();
        setImage(URL.createObjectURL(file))
        fromdata.append('file',file);
        axios.post('url', fromdata, {
            headers: {
                "Content-Type" : "multipar/from-data"
            },
            onUploadProgress: event => {
                setProgressBar(Math.round(100 * event.loaded) / event.total)
            }
        }).then(res => setImage(URL.createObjectURL(file)))
        .catch(err => console.log(err));
    }
    return(
        <div className='d-flex justify-content-center vh-100 bg-dark'>
            <div className='bg-white p-5 rounded w-50 vh-80'>
            <input type="file" onChange={handleFile}/>
            <br></br>
            <div className='progress'>
              <div className='progress-bar progress-bar-striped progress-bar-animated'
              role="progressbar" aria-label='progress-bar' aria-valuenow={progressBar}
              aria-valuemin="0" aria-valuemax="100" style={{width: `${progressBar}`}}
              >
              </div>
            </div>
            <br />
            <img src={image} className='w-75 h-75'/>
         </div>
        </div>
    )
}
export default UploadFile