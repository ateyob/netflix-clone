import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar"
import MovieList from '@/components/MovieList';
import useFavorites from '@/hooks/useFavorites';

const MyList = () => {
 const { data: favorites = [] } = useFavorites();


 return (
    <>
      <Navbar />
      <div className=" text-white pt-16 md:pt-28">
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  )
  
}

export default MyList