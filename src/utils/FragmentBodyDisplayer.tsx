import { useState, useEffect } from "react";

const FragmentBodyDisplayer = ({ content, type }: { content: Blob | string, type: string }) => {
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

  console.log(content);
  console.log(type);
  

  if (type.startsWith('image') && src) {
    return <img src={src} alt="Fragment" />;
  }

  return <span>{typeof content === 'string' ? content : ''}</span>;
}

export default FragmentBodyDisplayer;