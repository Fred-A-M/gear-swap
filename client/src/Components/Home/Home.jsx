/* eslint-disable react/prop-types */
import DiscoverProfiles from '../DiscoverProfiles/DiscoverProfiles'
import MatchedProfiles from '../MatchedProfiles/MatchedProfiles'
import { useEffect } from 'react'


export default function Home ({hardProfile, changeState, handleProfileClick, list, fetchRequests, locationFilter}) {

  useEffect(() =>{
    fetchRequests();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <MatchedProfiles profileList={list} hardProfile={hardProfile} changeState={changeState} handleProfileClick={handleProfileClick} locationFilter={locationFilter} />
    <DiscoverProfiles profileList={list} changeState={changeState} handleProfileClick={handleProfileClick} locationFilter={locationFilter} />
    </>
  )
}