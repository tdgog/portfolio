import Axios from 'axios';
import { useLayoutEffect, useState, useEffect } from 'react';

const GitHubAPI = Axios.create({
    baseURL: 'https://api.github.com'
});

const useFetchGithubUser = (userName) => {
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await GitHubAPI.get(
          `/users/${userName}`,
        )

        setUserData(response.data)
      } catch (e) {
        setUserData({})
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [userName])

  useEffect(() => {
    console.log(userData)
  }, [userData])
  

  return {
    isLoading,
    userData,
  }
}

export default useFetchGithubUser