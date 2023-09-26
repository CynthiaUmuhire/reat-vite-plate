import { useEffect, useRef, useState } from 'react'

function DogPics() {
    let [image, setImage] = useState("");
    const renderCount = useRef(0);
    let [canrender, setcanrender] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setImage(data.message);
                console.log(image, '======================');
            })
        renderCount.current = renderCount.current + 1;
    }, [canrender, image])
    // console.log(image, '+++++++++++++++++++++++');
    // const image = "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_5059.jpg"

    return (
        <div className=' text-green-950 flex flex-col gap-5 justify-center items-center '>
            <button className='bg-slate-500 rounded-md border p-3 ' onClick={() => { setcanrender(image) }}>
                Dogs
            </button>
            <img src={image} alt="" />
            <p>I fetched {renderCount} times</p>
        </div >
    )
}

export default DogPics;
