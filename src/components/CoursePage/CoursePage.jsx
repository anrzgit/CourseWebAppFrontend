import { Box, Grid, Heading, Text, VStack, color } from '@chakra-ui/react'
import React from 'react'
import introVideo from '../../assets/videos/intro.mp4';
import { useState } from 'react';

const CoursePage = () => {

  const [lectureNumber,setLectureNumber] = useState(0);
  const lectureTitle = 'Introduction'

  const lectures = [
    {
      _id: '1',
      title: 'Introduction New',
      video: introVideo,
      description: 'This is the introduction to the course'
    },
    {
      _id: '2',
      title: 'Introduction',
      video: introVideo,
      description: 'This is the introduction to the course'
    },
    {
      _id: '3',
      title: 'Introduction',
      video: introVideo,
      description: 'This is the introduction to the course'
    },
  ]

  return (
    <div>
      <Grid minHeight={'90vh'} templateColumns={['1fr','3fr 1fr']} >
        <Box>
          <video
            width="100%"
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
          ></video>
          <Heading m={'4'} children={`lecture Number ${lectureNumber+1} ${lectures[lectureNumber].title}`} />
          <Text m="4" children={'dhjsfhsdufewrfhuefhesfhseufehfbnskfbhe'} />
        </Box>
        <VStack>
          {
            lectures.map((lecture,index)=>(
              <button onClick={()=>setLectureNumber(index)} key={lecture._id} style={{ borderBottom : 'lpx solid rgba(0,0,0,0.2)', width: "95%", backgroundColor : "pink", padding: '1rem', textAlign: 'left', }} >
                <Text>
                  {lecture._id} {lecture.title}
                </Text>
              </button>
            ))
          }
        </VStack>
      </Grid>
    </div>
  )
}

export default CoursePage