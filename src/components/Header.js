'use client'

import { useContext } from 'react'
import UserContext from '@/context/UserContext'

const Header = () => {
    const { user, setUser } = useContext(UserContext)


    // ? : là toán tử 3 ngôi (condition ? true : false)
    return (
        <div id='main'>
            <div className='backGroundMain'>
                <Header className='shopee-headder shoppe-header-sticky'>
                    
                </Header>
            </div>
            <h1>
                {user ? (
                    <>
                        <p>Welcome, {user.name}</p>
                        <button onClick={() => setUser(null)}>Logout</button>
                    </>
                ) : (
                    <button onClick={() => setUser({ id: 1, name: 'John' })}>Login</button>
                )}
            </h1>
        </div>


    )
}

const SearchBar = () => {
    return (
        <h1>Search bar</h1>
    )
}

export default Header

export { SearchBar }