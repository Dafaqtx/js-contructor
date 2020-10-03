import image from './assets/image.png'
import {
    TitleBlock,
    TextBlock,
    ColumnsBlock,
    ImageBlock
} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '200px',
            height: 'auto'
        },
        alt: 'Image'
    }),
    new TextBlock('text value', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock(['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, sed?', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, sed?', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, sed?'], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),

];