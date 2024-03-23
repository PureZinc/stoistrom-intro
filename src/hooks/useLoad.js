import { useState, useEffect } from "react";

export default function useLoad(data) {
    const [dataIndex, setDataIndex] = useState(0)

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
          setDataIndex(prevIndex =>
            prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
          );
        }, 300);
        return () => clearTimeout(animationTimeout);
      }, [dataIndex, data.length]);

    return {dataIndex}
}
