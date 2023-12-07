import { useLocation } from "react-router-dom";
import TextForm from "./TextForm";

const UpdateFragment = () => {
    const location = useLocation();
    const {content, ...fragment} = location.state;
    
    return (
        <>
            <TextForm fragment={fragment} data={content} />
        </>
    )
}

export default UpdateFragment