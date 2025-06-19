import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import CodeBlock from '@tiptap/extension-code-block'
import Image from '@tiptap/extension-image'
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'


type MenuBarProps = {
  editor: Editor | null
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null

  return (
    <div className="menu-bar">
      {/* Existing buttons */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'font-bold text-blue-600' : ''}
      >
        Bold
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'italic text-blue-600' : ''}
      >
        Italic
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'bg-yellow-300' : ''}
      >
        Highlight
      </button>

      {/* New: Underline */}
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'underline text-blue-600' : ''}
      >
        Underline
      </button>

      {/* New: Link */}
      <button
        onClick={() => {
          const previousUrl = editor.getAttributes('link').href
          const url = window.prompt('Enter the URL', previousUrl || '')
          if (url === null) return
          if (url === '') {
            editor.chain().focus().unsetLink().run()
          } else {
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
        className={editor.isActive('link') ? 'text-blue-600 underline' : ''}
      >
        Link
      </button>

      {/* New: Code Block */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'bg-gray-800 text-white' : ''}
      >
        Code Block
      </button>

      {/* New: Image - insert a sample image */}
      <button
        onClick={() => {
          const url = window.prompt('Enter image URL')
          if (url) editor.chain().focus().setImage({ src: url }).run()
        }}
      >
        Image
      </button>

      {/* Existing heading buttons */}
      <button onClick={() => editor.chain().focus().setParagraph().run()}>P</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>

      {/* Text alignment */}
      <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>Align Left</button>
      <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>Center</button>
      <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>Align Right</button>

    </div>
  )
}

export default function EditorComponent () {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      CodeBlock,
      Image,
    ],
    content: `
      <h3 style="text-align:center">Devs Just Want to Have Fun by Cyndi Lauper</h3>
      <p style="text-align:center">
        I come home in the morning light<br />
        My mother says, <mark>“When you gonna live your life right?”</mark><br />
        Oh mother dear we’re not the fortunate ones<br />
        And devs, they wanna have fun<br />
        Oh devs just want to have fun
      </p>
    `,
  })

  if (!editor) return null

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-[300px] p-4 blog-content bg-[#d1d1d1] border-gray-300 rounded text-gray-700" />
    </>
  )
}
