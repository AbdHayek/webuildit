import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window as unknown as Window);

export function sanitize(html: string): string {
  return DOMPurify.sanitize(html);
}
