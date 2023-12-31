import { Image } from 'antd';
import React from 'react';

type EditorProps = {
    blocks: any[];
}

const Editor: React.FC<EditorProps> = (props) => {

    const { blocks } = props;

    const stripHtml = (value: string) => {
        if (!value) {
            return '';
        }
        return React.createElement("div", { dangerouslySetInnerHTML: { __html: value } });
    }
    return (
        <>
            {
                blocks.map((block: any) => (
                    <div id={block.id}>
                        {block.type === "header" && <h1 className="mb-2 font-semibold text-lg">{stripHtml(block.data.text)}</h1>}
                        {block.type === "paragraph" && <p className="mb-2">{stripHtml(block.data.text)}</p>}
                        {block.type === "list" && <div className="mb-2">
                            <ul className='list-disc pl-6'>
                                {block.data.items.map((v: any, i: number) => (
                                    <li key={i}>{stripHtml(v)}</li>
                                ))}
                            </ul>
                        </div>}
                        {block.type === "simpleImage" && (
                            <div className="flex justify-center mb-2">
                                <Image src={block.data.url} alt="IMG" loading="lazy" width='80%' />
                            </div>
                        )}
                        {
                            block.type === 'raw' && (
                                <div className='py-4 flex justify-center'>
                                    <div className='md:w-1/2'>
                                        {stripHtml(block.data.html)}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </>
    )
}

export default Editor