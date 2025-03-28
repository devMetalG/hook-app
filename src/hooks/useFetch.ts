import { useEffect, useState } from 'react'

interface useStateProps {
  data: Pokemon | null;
  isLoading: boolean;
  hasError: boolean;
  error: Error | null;
}

interface Error {
  code: number,
  message: string
}

interface Pokemon {
  name: string
}

export const useFetch = (url:string) => {

  const [state, setState] = useState<useStateProps>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  });

  useEffect(() => {
    const getFetch = async() => {

      const setLoadingState= () => {
        setState({
          data: null,
          isLoading: true,
          hasError: false,
          error: null
        })
      }
      
      setLoadingState()
  
      const resp = await fetch(url);
      if(!resp.ok){
        setState({
          data: null,
          isLoading: false,
          hasError: true, 
          error: {
            code: resp.status,
            message: resp.statusText
          }
        })
        return;
      }
      const data = await resp.json();
  
      setState({
        data, 
        isLoading: false,
        hasError: false,
        error: null
      })
  
      // Handle error
  
    }
    getFetch()
  }, [url]);

  

  

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
