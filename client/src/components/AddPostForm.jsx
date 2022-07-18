import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core'
import {useDispatch} from "react-redux"
import FileBase64 from "react-file-base64"
import{
    Button,
    TextField,
    Select,
    Input,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle

} from "@material-ui/core"

import {useForm,Controller} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { createPost } from '../actions/post'

const useStyles=makeStyles(theme=>({
    paper:{
        padding:theme.spacing(2)
    },
    textField:{
        marginBottom:theme.spacing(2)
    },
}))
const tags=["fun","programming","health","science"]

const postSchema=yup.object().shape({
    title:yup.string().required(),
    subtitle:yup.string().required(),
    content:yup.string().min(20).required(),
    tag: yup.mixed().oneOf(tags),
})


const AddPostForm = ({open,handleClose}) => {
    const dispatch=useDispatch()
    const [file,setFile]=useState(null)
    const {register,handleSubmit,control,errors,reset} =useForm({
        resolver:yupResolver(postSchema),
    })

const onSubmit=(data)=>{
    
     dispatch(createPost({...data,image:file})) 
    clearForm()
}
const clearForm=()=>{
    reset();
    setFile(null);
    handleClose();
}

    const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Yeni Yazı Oluştur</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Yeni Bir Yazı Eklemek İçin Aşağıdaki Formu Doldurun
            </DialogContentText>
            <div className={classes.root}>
                <form noValidate autoComplete="off" 
                onSubmit={handleSubmit(onSubmit)} >
                    <TextField 
                    id="title"
                    label="Baslik"
                    name='title'
                    variant='outlined'
                    className={classes.TextField}
                    size="small"
                    inputRef={register}
                    error={errors?.title ? true : false} 
                    fullWidth
                    />
                      <TextField 
                    id="subtitle"
                    label="Alt Baslik"
                    name='subtitle'
                    variant='outlined'
                    className={classes.TextField}
                    size="small"
                    inputRef={register}
                     error={errors?.subtitle ? true: false} 
                    fullWidth
                    />
                    <Controller
                        as={
                            <Select
                                input={<Input />}
                                className={classes.textField}
                                fullWidth
                                >
                                    {
                                        tags.map((tag,index)=>(
                                            <MenuItem key={index} value={tag}>
                                                {tag}
                                            </MenuItem>
                                        ))
                                    }
                            </Select>
                        }
                        name="tag"
                         control={control } 
                        error={errors.tag ? true : false} 
                        defaultValue={tags[0]}
                    />
                     <TextField 
                    id="content"
                    label="İçerik"
                    name='content'
                    multiline
                    minRows={4}
                    variant='outlined'
                    className={classes.TextField}
                    size="small"
                    inputRef={register}
                     error={errors.title ? true: false} 
                    fullWidth
                    />

                    <FileBase64 multiple={false} 
                    onDone={({base64}) =>setFile(base64)  } />

                </form>
            </div>

        </DialogContent>
        <DialogActions> 
            <Button color='inherit' onClick={clearForm} >Vazgeç</Button>
            <Button type="submit" 
            variant='outlined' 
            color='primary'
            onClick={()=>handleSubmit(onSubmit)() }
             >Yayınla</Button>
        </DialogActions>

    </Dialog>
  
  )
}

export default AddPostForm