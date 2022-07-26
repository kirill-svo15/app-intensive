import {useEffect, useRef, useState} from "react";

export const useOutsideAlert = initialIsVisible => {
	const [isComponentVisible, setComponentVisible]=useState(initialIsVisible)
	const ref = useRef(null)
	
	const handleClickOutside =event=>{
		if (ref.current && !ref.current.contains(event.target)){
			setComponentVisible(true)
		}
	}
	
	useEffect(()=>{
		document.addEventListener('click', handleClickOutside, true)
		return ()=>{
			document.removeEventListener('click',handleClickOutside, true)
		}
	})
	return {ref, isComponentVisible, setComponentVisible}
}

