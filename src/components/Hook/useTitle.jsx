import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Room Lease`;
    }, [title]);
}

export default useTitle;