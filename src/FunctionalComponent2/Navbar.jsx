// import React, { useState } from 'react'
// import { Link, useSearchParams } from 'react-router-dom'

// export default function Navbar(props) {
//  let[search,setSearch]=useState("")
//  let[searchParams,setSearchParams]=useSearchParams()
//   function postSearch(e) {
//     e.preventDefault()
//     props.getSearch(search)
//   }
  
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg background">
//           <div className="container-fluid">
//             <button className="navbar-brand text-light" to={`/?q=All&language=${searchParams.get("language")??"hi"}`} >News App</button>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <i className='bi bi-list text-light fs-1'></i>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item"><button className="nav-link active text-light" aria-current="page" to={`/?q=All&language=${searchParams.get("language")??"hi"}`} >All</button></li>
//                 <li className="nav-item"><button className="nav-link text-light" to={`/?q=Politics&language=${searchParams.get("language")??"hi"}`} >Politics</button></li>
//                 <li className="nav-item"><button className="nav-link text-light" to={`/?q=Crime&language=${searchParams.get("language")??"hi"}`} >Crime</button></li>
//                 <li className="nav-item"><button className="nav-link text-light" to={`/?q=Education&language=${searchParams.get("language")??"hi"}`} >Education</button></li>
//                 <li className="nav-item"><button className="nav-link text-light" to={`/?q=Science&language=${searchParams.get("language")??"hi"}`} >Science</button></li>
//                 <li className="nav-item"><button className="nav-link text-light" to={`/?q=Technology&language=${searchParams.get("language")??"hi"}`} >Technology</button></li>
//                 <li className="nav-item"><button className="nav-link text-light" to={`/?q=Sports&language=${searchParams.get("language")??"hi"}`} >Sports</button></li>
//                 <li className="nav-item"><button className="nav-link text-light" to={`/?q=Cricket&language=${searchParams.get("language")??"hi"}`} >Cricket</button></li>
//                 <li className="nav-item dropdown">
//                   <button className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Other
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><button className="dropdown-item" to={`/?q=Entertainment&language=${searchParams.get("language")??"hi"}`}>Entertainment</button></li>
//                     <li><button className="dropdown-item" to={`/?q=Economics&language=${searchParams.get("language")??"hi"}`} >Economics</button></li>
//                     <li><button className="dropdown-item" to={`/?q=World&language=${searchParams.get("language")??"hi"}`} >World</button></li>
//                     <li><button className="dropdown-item" to={`/?q=India&language=${searchParams.get("language")??"hi"}`} >India</button></li>
//                     <li><button className="dropdown-item" to={`/?q=Jokes&language=${searchParams.get("language")??"hi"}`} >Jokes</button></li>
//                     <li><button className="dropdown-item" to={`/?q=Mahakumbh&language=${searchParams.get("language")??"hi"}`} >Mahakumbh</button></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <button className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Language
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><button className="dropdown-item"to={`/?q=${searchParams.get("q")??"All"}&language=hi&language=${searchParams.get("language")??"hi"}`} >Hindi</button></li>
//                     <li><button className="dropdown-item"to={`/?q=${searchParams.get("q")??"All"}&language=en&language=${searchParams.get("language")??"hi"}`} >English</button></li>

//                   </ul>
//                 </li>

//               </ul>
//               <form className="d-flex" role="search" onSubmit={(e) => postSearch(e)}>
//                 <input className="form-control me-2" type="search" name='search' onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-light" type="submit">Search</button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </>
//     )
// }
import React from 'react'
import {useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar(props) {
 let[searchParams]=useSearchParams()
 let navigate=useNavigate()

  function changeQ(q){        //navbar pr change kiya jae toh change hu sports,cricket language change kre to thik nhi toh hindi hi rhe
    navigate(`/?q=${q}&language=${searchParams.get("language")??"hi"}`)
  }
  function changeLanguage(language){    // kisi page ko bdla jae toh bdl jaye nhi toh usi page pr rhe jo language hu vahi rhe
    navigate(`/?q=${searchParams.get("q")??"All"}&language=${language}`)
  }
    return (
      <>
        <nav className="navbar navbar-expand-lg background">
          <div className="container-fluid">
            <button className="navbar-brand nav-link text-light" onClick={()=>changeQ("All")} >News App</button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className='bi bi-list text-light fs-1'></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><button className="nav-link active text-light" aria-current="page" onClick={()=>changeQ("All")} >All</button></li>
                <li className="nav-item"><button className="nav-link text-light" onClick={()=>changeQ("Politics")} >Politics</button></li>
                <li className="nav-item"><button className="nav-link text-light"onClick={()=>changeQ("Crime")} >Crime</button></li>
                <li className="nav-item"><button className="nav-link text-light" onClick={()=>changeQ("Education")} >Education</button></li>
                <li className="nav-item"><button className="nav-link text-light"onClick={()=>changeQ("Science")} >Science</button></li>
                <li className="nav-item"><button className="nav-link text-light" onClick={()=>changeQ("Technology")} >Technology</button></li>
                <li className="nav-item"><button className="nav-link text-light"onClick={()=>changeQ("Sports")} >Sports</button></li>
                <li className="nav-item"><button className="nav-link text-light"onClick={()=>changeQ("Cricket")} >Cricket</button></li>
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Other
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item"onClick={()=>changeQ("Entertainment")}>Entertainment</button></li>
                    <li><button className="dropdown-item" onClick={()=>changeQ("Economics")} >Economics</button></li>
                    <li><button className="dropdown-item"onClick={()=>changeQ("World")} >World</button></li>
                    <li><button className="dropdown-item"onClick={()=>changeQ("India")}>India</button></li>
                    <li><button className="dropdown-item"onClick={()=>changeQ("Jokes")} >Jokes</button></li>
                    <li><button className="dropdown-item"onClick={()=>changeQ("Mahakumbh")} >Mahakumbh</button></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item"onClick={()=>changeLanguage("hi")} >Hindi</button></li>
                    <li><button className="dropdown-item"onClick={()=>changeLanguage("en")} >English</button></li>

                  </ul>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" name='q' placeholder="Search" aria-label="Search" />
                <input type="hidden"name='language'value={searchParams.get("language")??"hi"}/>
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
}
