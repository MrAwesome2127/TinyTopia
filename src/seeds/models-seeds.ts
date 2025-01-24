import { Home } from '../models/home.ts';

export const seedHomes = async () => {
  await Home.bulkCreate([
    {
        modelName: 'Leviathan',
        price: 91000.00,
        feature : 'Discover smart design and sustainability in a luxurious tiny home with open floor plans and clever storage solutions.',
        synopsis : 'Meet Leviathan: an innovative tiny home that redefines small living through smart design and elegance. Despite its modest footprint, Leviathan boasts an open floor plan with multi-functional spaces designed for maximum comfort and efficiency. The home features high ceilings, expansive windows, and skylights, creating a bright and airy ambiance.',
    },
    {
        modelName: 'Icarus',
        price: 85000.00,
        feature : 'Experience luxury in a minimalist, eco-friendly tiny home with vaulted ceilings and cutting-edge sustainability.',
        synopsis : 'Introducing Icarus: a modern and energy-efficient tiny home that combines style and functionality. This stunning home features a sleek design with clean lines and high-quality finishes. The open floor plan offers a spacious living area, a fully equipped kitchen, and a cozy sleeping loft. With its thoughtful layout and smart storage solutions, Aurora is the perfect home for those looking to downsize without sacrificing comfort and style.',
    },
    {
        modelName: 'Clearance',
        price: 79999.99,
        feature: 'Embrace minimalist living in a sleek, compact space designed for maximum functionality and style.',
        synopsis: 'The epitome of minimalist living where sleek design meets functional elegance. Clearance is a tiny home designed to provide a sense of spaciousness within a compact footprint. Its streamlined architecture and modern aesthetics create an inviting, clutter-free environment.',
    },
    {
        modelName: 'Mortedacy',
        price : 81000.00,
        feature : 'Revel in a sophisticated, compact living space designed for ultimate efficiency and modern elegance.',
        synopsis : 'A tiny home that combines sophisticated design with efficient living to create a harmonious and luxurious space. This modern sanctuary offers a perfect balance of comfort, style, and practicality within a compact footprint.',
    },
    {
        modelName: 'Love Shack',
        price : 100000.00,
        feature : 'Experience intimate, cozy living in a charming tiny home designed for romance and relaxation.',
        synopsis : 'A tiny home designed to celebrate romance, coziness, and intimate living. This charming abode offers a perfect retreat for couples seeking a comfortable, stylish, and functional space.',
    },
    {
        modelName: 'Parenthood',
        price : 100000.00,
        feature : 'Enjoy family-friendly living in a thoughtfully designed tiny home that perfectly balances comfort, style, and practicality.',
        synopsis : 'A tiny home designed to cater to the unique needs of families, blending practicality with style in a compact space. Parenthood offers a harmonious living environment that ensures comfort, safety, and functionality for every family member.',
    }
  ])
};