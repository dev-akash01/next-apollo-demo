// The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 200ms since it was last called.
  // Otherwise, it will return the previous value of searchTerm.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.

  import { useState, useEffect } from 'react'

  function useDebounce(value) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, 200)
      return () => {
        clearTimeout(handler)
      }
    }, [value])
    return debouncedValue
  }
  
  export default useDebounce
  
