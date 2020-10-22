import React, { useEffect, useRef, useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import './App.css';
import  *  as ml5 from 'ml5';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  palette: {
    primary: {
      main: '#E33E7F'
    }
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function App() {
  
  const canvasRef = useRef(null)
  const [isLoading,setIsLoading] = useState(false)
  const [picUrl,setPicUrl] = useState('https://source.unsplash.com/1000x500/?people')
  const classes = useStyles();

  useEffect(()=>{
    const canvas = canvasRef.current
    canvas.width = 1000
    canvas.height = 550
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = async () => {
      ctx.drawImage(img,0,25)
      setIsLoading(true)
      const detector = await ml5.objectDetector('cocossd')
      await detector.detect(img, gotDetections)
    }
    if ((new URL(picUrl)).origin !== window.location.origin) {
      img.crossOrigin = ""; //this requests permission from the server
    }
    img.src = picUrl
  },[picUrl])

  const selectPic = () => {
    const keywords = ['people', 'person', 'animals', 'transportation', 'horse', 'dog', 'sheep', 'bus', 'airplane',
      'motorcyle', 'train', 'truck', 'hat', 'backpack', 'shoe', 'tie', 'suitcase', 'frisbee', 'kite', 'snowboard',
      'surfboard', 'bottle', 'plate', 'wine', 'cup', 'banana', 'orange', 'broccoli', 'carrot', 'pizza', 'donut', 'spoon',
      'bird', 'boat', 'umbrella', 'traffic', 'tennis', 'keyboard', 'scissors', 'vase', 'book', 'toothbrush']
    const keyword = keywords[Math.floor(Math.random() * keywords.length)]

    setPicUrl(`https://source.unsplash.com/1000x500/?${keyword}&t="${new Date().getTime()}"`)
  }

  const gotDetections = (err, results) => {
      if(err){
        console.log(err)
      }
      else{
        setIsLoading(false)
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        console.log(results)
        let newResults = [...results]
        if(newResults.length === 0){
          ctx.font = '18px Roboto';
          let text = '😳 not sure...'
          ctx.fillStyle = 'white';
          ctx.strokeStyle = 'black';
          ctx.fillText(text, 300, 300);
          ctx.strokeText(text, 300, 300);
        }
        else{
        for(const obj of newResults){
          const {x,y,width,height,label,confidence} = obj
          ctx.lineWidth = '4'
          ctx.strokeStyle = 'green'
          ctx.rect(x,y,width,height)
          ctx.stroke()
          ctx.font = '18px Roboto';
          let confidenceText = confidence > 0.9 ? `😏  ${Math.floor(confidence*100)}% confident,` : 
                               confidence > 0.8 ? `😀  ${Math.floor(confidence*100)}% confident,` :
                               confidence > 0.7 ? `😕  ${Math.floor(confidence*100)}% confident,` :
                                                  `🤤  ${Math.floor(confidence*100)}% confident,`
          
          ctx.fillStyle = 'white';
          ctx.strokeStyle = 'black';
          ctx.strokeText(confidenceText, x+24, y+20);
          ctx.fillText(confidenceText, x+24, y+20);
          ctx.strokeText(`this is a ${label}`, x+54, y+40);
          ctx.fillText(`this is a ${label}`, x+54, y+40);
          
          
        }
      }
    }
  }
  return (
    <div className="grid-container">
        <div className='Title'>
              <Typography className='logoTitle' gutterBottom variant="h3" component="h3" color='primary'>
              🤖 Object Detector 🔎 
              </Typography> 
        </div> 
        <div className='Canvas'>
        <Paper id='CanvasChild' component="ul" className={classes.root} >
          <canvas ref={canvasRef}/>
        </Paper>
        </div>
        <div className='ButtonContainer'>
        <Button
              className='Button'
              variant="contained"
              color="primary"
              onClick={() => selectPic()}
            >
              {isLoading? '🤔 ...':'New 📷 '} 
        </Button> 
        <div className='Explain'>
          <Typography  gutterBottom variant="body1" component="body1" color='primary'>
                This app uses ml5js with  <Link href='https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd' target='_blank'>
                COCO SSD
                </Link>.
          </Typography> 
        </div>
        </div> 
       
        
    </div>
  );
}

export default App;
