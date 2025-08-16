"use client";
import DOMPurify from "dompurify";

export function BlogContent ({content}:any) {
    return( <div className="text-gray-300 text-[16px] mb-6"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content|| '') }} >
      </div>)
   
}