import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

// Components

// API
import api from '../../services/api'

// Images
import upload from '../../assets/upload.png'
import uploading from '../../assets/uploading.gif'

import { 
    Content,
    SignContainer,
    Sign,
 } from './styles'

export default function Upload() {

    const onDrop = useCallback(acceptedFile => {
        acceptedFile.map((file) => {
            let formData = new FormData()
            formData.append('file', file)
            return api.post('/upload', formData, {
                headers: {
                    'Content-type': 'multipart/form',
                    Authorization: `Bearer ${localStorage.getItem('@u_id')}`
                }
            }).then(() => {
                return window.location.reload()
            })
        })
    }, [])
    const maxFileSize = 100 * 1024 * 1024
    const { getInputProps, getRootProps, rejectedFiles, acceptedFiles, isDragActive } = useDropzone({ onDrop, maxSize: maxFileSize, multiple: false })
    const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxFileSize

    return (
        <Content>
            <SignContainer>
                <Sign {...getRootProps()}>
                <input { ...getInputProps({ multiple: false, }) } />
                {
                    !isDragActive && !acceptedFiles.length > 0 &&
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <img src={upload} alt="Upload your file" width="100" />
                            <p style={{ margin: 20, color: "#888888" }}>
                                Drag 'n' drop your files here <br/> or click to browse...
                            </p>
                        </div>
                }

                {
                    isDragActive && (
                        <div style={{ width: "100%", height: "200px", textAlign: "center", border: "1px dashed rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p style={{ margin: 20, color: "green" }}>
                                Drop your file inside this border...
                            </p>
                        </div>
                    )
                }

                {
                    acceptedFiles.length > 0 && (
                        <div style={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={uploading} alt="Uploading" width="200"/>
                        </div>
                    )
                }

                {
                    isFileTooLarge && (
                        <div style={{ width: "100%", height: "100px", textAlign: "center", border: "1px dashed rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <p style={{ margin: 20, color: "red" }}>
                                Oops, only files less than 100mb.
                            </p>
                        </div>
                    )
                }
                <div></div>
                </Sign>
            </SignContainer>
        </Content>
    )
}