import React from "react";
import './Feed.css'
import MessageSender from "./MessageSender";
import StoryReel from './StroyReel'
import Post from "./Post";

function Feed() {
  return <div className="feed">
  <StoryReel />
  <MessageSender/>
  <Post
  ptofilePic="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.6435-9/95477914_2086703658141814_8536877641221799936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBAtLXAkxuWbMihnVD0aZzYPLm0ijy0XVg8ubSKPLRdbfgLB79PZdtoXJJ0d4igMGtCbWe48gctjy-yJVQ_VVi&_nc_ohc=YycC_ZUT1tgAX-Lknor&tn=bROQ5ID0gK1sSxlC&_nc_ht=scontent.fisb1-2.fna&oh=00_AT9bz5gBTmEPg3PBbFXXqA0ElbMDK4mpA7xMXx0CKIs7hw&oe=6329B2BB"
  message="Heyy, Amna here!"
  timestamp= 'This is a timestamp'
  username="Amna Riaz"
  image="https://scontent.fisb1-2.fna.fbcdn.net/v/t39.30808-6/300827592_396131275966683_8801273604704490461_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF4YjJ2G43gNOz645K9p4PkhEg6abrdAQSESDpput0BBFXRMtdolr7odNWLUnoNm0KUFuCCiTQA3m1i_g6i_r1X&_nc_ohc=exjvrropWTkAX_nNK9a&_nc_ht=scontent.fisb1-2.fna&oh=00_AT-sGbVoxY6IBi_oIgKoMAqm_WHPTgJuV2gZELePNS4Hsw&oe=630A9ADD"

  />
  <Post
  ptofilePic="https://scontent.fisb1-2.fna.fbcdn.net/v/t1.6435-9/95477914_2086703658141814_8536877641221799936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBAtLXAkxuWbMihnVD0aZzYPLm0ijy0XVg8ubSKPLRdbfgLB79PZdtoXJJ0d4igMGtCbWe48gctjy-yJVQ_VVi&_nc_ohc=YycC_ZUT1tgAX-Lknor&tn=bROQ5ID0gK1sSxlC&_nc_ht=scontent.fisb1-2.fna&oh=00_AT9bz5gBTmEPg3PBbFXXqA0ElbMDK4mpA7xMXx0CKIs7hw&oe=6329B2BB"
  message="Heyy, Amna here!"
  timestamp= 'This is a timestamp'
  username="Amna Riaz"

  />
  </div>;
}

export default Feed;
