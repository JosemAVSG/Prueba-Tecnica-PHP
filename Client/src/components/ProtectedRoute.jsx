import { Outlet } from "react-router-dom"
import {useSelector} from 'react-redux'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = () => {
  const navigation = useNavigate();
  const aunthenticated = useSelector(state => state.auth.authenticated);

  useEffect(() => {
    if (!aunthenticated) {
      navigation("/")
    }
  }, [aunthenticated, navigation])

  return <Outlet />
}

export default ProtectedRoute
