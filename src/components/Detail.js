import React from 'react';
import styled from 'styled-components';
import {useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import db from "../firebase";

function Detail() {
   const {id} = useParams();
   const[movie, setmovie] = useState()
   useEffect(() => {
    db.collection("movies")
    .doc(id)
    .get()
    .then((doc)=>{
         if(doc.exists) {
           setmovie(doc.data())
         }  else{

         }
    })
   }, [id])
  return (
    <Container>
    <Background>
      <img src={movie.BackgroundImg} alt=""></img>
    </Background>
    <ImageTitle>
      <img src={movie.titleImg} alt="" />
    </ImageTitle>
    <Controls>
      <PlayButton>
        <img src="/images/play-icon-black.png" alt="" />
        <span>Play</span>
      </PlayButton>
      <TrailerButton>
      <img src="/images/play-icon-black.png" alt="" />
        <span>Trailer</span>
      </TrailerButton>
      <AddButton>
        <span>+</span>
      </AddButton>
      <WatchGroupButton>
       <img src="/images/group-icon.png" alt="" />
      </WatchGroupButton>
    </Controls>
    <Subtitle>
    {movie.subTitle}
    </Subtitle>
    <Description>
    {movie.description}
    </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
`

const Background = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
  width:100%;
  height:100%;
  object-fit:cover;
}
`
const ImageTitle = styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:60px;

img{
  height:100%;
  width:100%;
object-fit:contain;
}
`
const Controls = styled.button`
display:flex;
background:none;
border:none;
align-items:center;
`

const PlayButton = styled.button`
   display:flex;
   border-radius:4px;
   padding:0 24px;
   border:none;
   margin-right:22px;
   background:rgb(249, 249, 249);
   height:56px;
   font-size:15px;
   align-items:center;
   letter-spacing:1.8px;
   cursor:pointer;

   &:hover{
     background:rgb(198, 198, 198);
   }
`
const TrailerButton = styled(PlayButton)`
background:rgb(0, 0, 0, 0.3);
border:1px solid rgb(249,249,249);
color:rgb(249, 249, 249);
text-transform: uppercase;
`
const AddButton = styled.button`
margin-right: 16px;
width:44px;
height:44px;
justify-content: center;
align-items: center;
display:flex;
border-radius:50%;
background-color:rgba(0, 0, 0, 0.6);
border:2px solid white;
cursor:pointer;
span{
  font-size:30px;
  color:white;
}
`
const WatchGroupButton = styled(AddButton)`
background:rgb(0, 0, 0)
`
const Subtitle = styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;
`

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);
max-width:760px;
`