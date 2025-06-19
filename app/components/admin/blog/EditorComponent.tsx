
import { EditorContent, Editor } from '@tiptap/react';

type MenuBarProps = {
  editor: Editor | null
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null

  return (
    <div className="menu-bar">
      {/* Existing buttons */}
      <button
        type="button"  
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'font-bold text-blue-600' : ''}
      >
        Bold
      </button>

      <button
        type="button"  
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'italic text-blue-600' : ''}
      >
        Italic
      </button>

      <button
        type="button"  
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'bg-yellow-300' : ''}
      >
        Highlight
      </button>

      {/* New: Underline */}
      <button
        type="button"  
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'underline text-blue-600' : ''}
      >
        Underline
      </button>

      {/* New: Link */}
      <button
        type="button"  
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
        type="button"  
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'bg-gray-800 text-white' : ''}
      >
        Code Block
      </button>

      {/* New: Image - insert a sample image */}
      <button
        type="button"  
        onClick={() => {
          const url = window.prompt('Enter image URL')
          if (url) editor.chain().focus().setImage({ src: url }).run()
        }}
      >
        Image
      </button>

      {/* Existing heading buttons */}
      <button type="button" onClick={() => editor.chain().focus().setParagraph().run()}>P</button>
      <button type="button"  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
      <button type="button"  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
      <button type="button"  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>

      {/* Text alignment */}
      <button type="button"  onClick={() => editor.chain().focus().setTextAlign('left').run()}>Align Left</button>
      <button type="button"  onClick={() => editor.chain().focus().setTextAlign('center').run()}>Center</button>
      <button type="button"  onClick={() => editor.chain().focus().setTextAlign('right').run()}>Align Right</button>

    </div>
  )
}

export default function EditorComponent({ editor }: MenuBarProps) {

  if (!editor) return null

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-[300px] p-4 blog-content bg-[#d1d1d1] border-gray-300 rounded text-gray-700" />
    </>
  )
}
