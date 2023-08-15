import { Box, Grid, Heading, Text, VStack, color } from '@chakra-ui/react'
import React from 'react'
import introVideo from '../../assets/videos/intro.mp4';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,Navigate } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../layout/Loader';


const CoursePage = ({user}) => {

  const [lectureNumber,setLectureNumber] = useState(0);
  

  const {lectures, loading } = useSelector(state => state.course)

  // const lectures = [
  //   {
  //     _id: '1',
  //     title: 'Introduction New',
  //     video: introVideo,
  //     description: 'This is the introduction to the course'
  //   },
  //   {
  //     _id: '2',
  //     title: 'Introduction',
  //     video: introVideo,
  //     description: 'This is the introduction to the course'
  //   },
  //   {
  //     _id: '3',
  //     title: 'Introduction',
  //     video: introVideo,
  //     description: 'This is the introduction to the course'
  //   },
  // ]

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch (getCourseLectures(params.id))
  }, [dispatch, params.id])

  if(user.role !== 'admin' && (!user.subscription || user.subscription.status !== 'active' )){
    return <Navigate to="/subscribe" />
  }
  return (
    loading ? <Loader /> : (
      <div>
      <Grid minHeight={'90vh'} templateColumns={['1fr','3fr 1fr']} >
        {
          lectures && lectures.length > 0 ? (
            <>
              <Box>
                <video
                  width="100%"
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  disableRemotePlayback
                  src={lectures[lectureNumber].video.url}
                ></video>
                <Heading m={'4'} children={`lecture Number ${lectureNumber+1} ${lectures[lectureNumber].title}`} />
                <Text m="4" children={lectures[lectureNumber].description} />
              </Box>
              <VStack>
                {
                  lectures.map((lecture,index)=>(
                    <button onClick={()=>setLectureNumber(index)} key={lecture._id} style={{ borderBottom : 'lpx solid rgba(0,0,0,0.2)', width: "95%", backgroundColor : "teal", padding: '1rem', textAlign: 'left', }} >
                      <Text>
                        {lecture.title}
                      </Text>
                    </button>
                  ))
                }
              </VStack>
            </>
          ) : <Heading children = "No Lectures" />
        }
      </Grid>
    </div>
    )
  )
}

export default CoursePage