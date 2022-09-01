import { useState } from "react"
import { marked } from "marked"

const placeholder = `
# H1
## H2

[title](https://www.example.com)
\`code\`
\`\`\`
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
`
const Preview = () =>{ 

    const [sourceText,setSourceText] = useState(placeholder)

    marked.setOptions({
        breaks:true
    })
    
      
    
    return(
        <>
            <textarea id="editor" value={sourceText} onChange={(e)=>{
                setSourceText(e.target.value)
            }}>
            </textarea>

            <div id="preview"dangerouslySetInnerHTML={{
                    __html: marked(sourceText)
                }}>
               
            </div>
        </>
    )
}

export default Preview


