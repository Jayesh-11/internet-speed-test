import { useState } from "react"

const useInternetSpeed = () => {
  const [speed, setSpeed] = useState<number>(0)

  const checkInternetSpeed = async () => {

    const startTime = new Date().getTime()
    let endTime: number;
    let imageSize: number = 0;

    const imageLink = "https://source.unsplash.com/random?topics=nature";
    await fetch(imageLink).then((response) => {
      imageSize = Number(response.headers.get("content-length")) ?? 0;
      endTime = new Date().getTime();
      calculateSpeed();
    });


    function calculateSpeed() {
      const timeDuration = (endTime - startTime) / 1000;
      const loadedBits = imageSize * 8;
      const speedInBps = Number((loadedBits / timeDuration).toFixed(2));
      const speedInKbps = Number((speedInBps / 1024).toFixed(2));
      const speedInMbps = Number((speedInKbps / 1024).toFixed(2));
      setSpeed(speedInMbps)
    }

  }
  const intervalSetter = async () => {
    for (let i = 0; i < 20; i++) {
      await checkInternetSpeed()
    }
  }

  return { speed, intervalSetter }

}

export default useInternetSpeed
