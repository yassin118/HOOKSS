import React from 'react'


const Nav = ({setSearch,search,setRate,rate}) => {
    const handlesearch=(e)=>setSearch(e.target.value)

    return (
        <div className="main-nav">
            <div className="logo">
                <h2>Movie<span>App</span>🎬</h2>
            </div>
            <div>
            <input className="search" type="text" placeholder="Search for a specific movie..🔍" value={search} onChange={handlesearch}></input>
            <h4 className="rate">movie rating ✯</h4>
            <div className="rating"value={rate}
                onStarClick={(nextValue, prevValue)=>{
                setRate(nextValue,prevValue)
            }
            }/></div>
            </div>
            
            )
}

export default Nav