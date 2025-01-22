import { Home } from '../models/home.js';

export const seedHomes = async () => {
await Home.bulkCreate([
    {
        modelName: 'Leviathan',
        price: 91000.00,
        feature : 'Discover smart design and sustainability in a luxurious tiny home with open floor plans and clever storage solutions.',
        synopsis : 'Meet Leviathan: an innovative tiny home that redefines small living through smart design and elegance. Despite its modest footprint, Leviathan boasts an open floor plan with multi-functional spaces designed for maximum comfort and efficiency. The home features high ceilings, expansive windows, and skylights, creating a bright and airy ambiance.',
        imageUrl: 'https://picsum.photos/id/1/200/300'
    },
    {
        modelName: 'Icarus',
        price: 85000.00,
        feature : 'Experience luxury in a minimalist, eco-friendly tiny home with vaulted ceilings and cutting-edge sustainability.',
        synopsis : 'Introducing Icarus: a modern and energy-efficient tiny home that combines style and functionality. This stunning home features a sleek design with clean lines and high-quality finishes. The open floor plan offers a spacious living area, a fully equipped kitchen, and a cozy sleeping loft. With its thoughtful layout and smart storage solutions, Aurora is the perfect home for those looking to downsize without sacrificing comfort and style.',
        imageUrl: 'https://picsum.photos/id/3/200/300'
    },
    {
        modelName: 'Clearance',
        price: 79999.99,
        feature: 'Embrace minimalist living in a sleek, compact space designed for maximum functionality and style.',
        synopsis: 'The epitome of minimalist living where sleek design meets functional elegance. Clearance is a tiny home designed to provide a sense of spaciousness within a compact footprint. Its streamlined architecture and modern aesthetics create an inviting, clutter-free environment.',
        imageUrl: 'https://picsum.photos/id/10/200/300'
    },
    {
        modelName: 'Mortedacy',
        price : 81000.00,
        feature : 'Revel in a sophisticated, compact living space designed for ultimate efficiency and modern elegance.',
        synopsis : 'A tiny home that combines sophisticated design with efficient living to create a harmonious and luxurious space. This modern sanctuary offers a perfect balance of comfort, style, and practicality within a compact footprint.',
        imageUrl: 'https://picsum.photos/id/69/200/300'
    },
    {
        modelName: 'Love Shack',
        price : 100000.00,
        feature : 'Experience luxury in a minimalist, eco-friendly tiny home with vaulted ceilings and cutting-edge sustainability.',
        synopsis : 'Introducing Love Shack: a modern and energy-efficient tiny home that combines style and functionality. This stunning home features a sleek design with clean lines and high-quality finishes. The open floor plan offers a spacious living area, a fully equipped kitchen, and a cozy sleeping loft. With its thoughtful layout and smart storage solutions, Aurora is the perfect home for those looking to downsize without sacrificing comfort and style.',
        imageUrl: 'https://picsum.photos/id/100/200/300'
    }
])};