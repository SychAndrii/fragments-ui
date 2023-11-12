import ReactMarkdown from 'react-markdown';
import DOMPurify from 'isomorphic-dompurify';

const FragmentBodyDisplayer = ({ type, body }: { type: string, body: string }) => {
  if (type.startsWith('text/plain')) {
    return body;
  }
  if (type.startsWith('text/markdown')) {
    return <ReactMarkdown>{body}</ReactMarkdown>
  }
  if (type.startsWith('text/html')) {
    // Sanitize the HTML string
    const cleanHtml = DOMPurify.sanitize(body);
    
    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  }
  return null;
}

export default FragmentBodyDisplayer