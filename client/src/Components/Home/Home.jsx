/* eslint-disable react/prop-types */
import NavBar from '../NavBar/NavBar'
import DiscoverProfiles from '../DiscoverProfiles/DiscoverProfiles'
import MatchedProfiles from '../MatchedProfiles/MatchedProfiles'
import './Home.css'

export default function Home ({hardWishList, changeState, handleProfileClick, list}) {

  return (
    <>
    <NavBar changeState={changeState} />
    <MatchedProfiles profileList={list} hardWishList={hardWishList} changeState={changeState} handleProfileClick={handleProfileClick} />
    <DiscoverProfiles profileList={list} changeState={changeState} handleProfileClick={handleProfileClick} />
    </>
  )
}