'use client'


import { createContext, useState } from "react"


const SearchContext = createContext()

export function Searchprovider({ children }) {
    const [search, setSearch] = useState()

    // không cần lưu vào local Storage nên ko cần useEffect

    return (
        <SearchContext.Provider value={{ search, setSearch }} >
            {children}
        </SearchContext.Provider>
    )

}




export default SearchContext 