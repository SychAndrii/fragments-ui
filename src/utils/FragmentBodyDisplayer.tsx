import { useState, useEffect } from "react";

const FragmentBodyDisplayer = ({ content }: { content: Blob | string }) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (content instanceof Blob) {
      const objectURL = URL.createObjectURL(content);
      setSrc(objectURL);

      // Clean up
      return () => {
        URL.revokeObjectURL(objectURL);
      };
    }
  }, [content]);
  

  if (content instanceof Blob && src) {
    return <img src={src} alt="Fragment could not be loaded!" />;
  }
  else if(content instanceof Blob) {
    return <h1>Cannot display this image!</h1>
  }
  
  return <span>{content}</span>;
}

export default FragmentBodyDisplayer;