import React from "react";
import CocktailList from '../components/CoktailList'
import SearchForm from '../components/SearchForm'

export default function Home(){
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
    </main>
  )
}