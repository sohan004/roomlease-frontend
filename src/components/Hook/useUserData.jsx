import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { baseURL } from "../../App"

const useUserData = () => {
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        fetch(`${baseURL}/account/profile/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('user-token')}`,
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setLoading(false)
                    setUserData(data.data)
                }
                else {
                    setLoading(false)
                    setUserData(null)
                }
            })
            .catch(err => {
                setLoading(false)
            })
    }, [localStorage.getItem('user-token')])

    return { userData, loading, setUserData }
}

export default useUserData