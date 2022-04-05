import { useEffect, useState } from "react"

const usePhones = ()=>{
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        fetch('phones.json')
        .then(res => res.json())
        .then(data => setPhones(data));
    }, [phones]);
    return [phones, setPhones];
}
export default usePhones;