import { Home } from '../models';

export const seedHomes = async () => {
    const homes = [
        {
            modelName: 'Leviathan',
            price: 91000.00,
            feature: 'Discover smart design and sustainability in a luxurious tiny home with open floor plans and clever storage solutions.',
            synopsis: 'Leviathan redefines small living with smart design and elegance. It boasts an open floor plan with multi-functional spaces for maximum comfort and efficiency.',
            imageUrl: 'https://picsum.photos/id/1/200/300'
        },
        {
            modelName: 'Icarus',
            price: 85000.00,
            feature: 'Experience luxury in a minimalist, eco-friendly tiny home with vaulted ceilings and cutting-edge sustainability.',
            synopsis: 'Icarus is a modern, energy-efficient tiny home that combines style and functionality with a sleek design, clean lines, and high-quality finishes.',
            imageUrl: 'https://picsum.photos/id/3/200/300'
        },
        {
            modelName: 'Clearance',
            price: 79999.99,
            feature: 'Embrace minimalist living in a sleek, compact space designed for maximum functionality and style.',
            synopsis: 'Clearance epitomizes minimalist living with sleek design and functional elegance, providing a sense of spaciousness within a compact footprint.',
            imageUrl: 'https://picsum.photos/id/10/200/300'
        },
        {
            modelName: 'Mortedacy',
            price: 81000.00,
            feature: 'Revel in a sophisticated, compact living space designed for ultimate efficiency and modern elegance.',
            synopsis: 'Mortedacy combines sophisticated design with efficient living, creating a harmonious and luxurious space that balances comfort, style, and practicality.',
            imageUrl: 'https://picsum.photos/id/69/200/300'
        },
        {
            modelName: 'Love Shack',
            price: 100000.00,
            feature: 'Experience luxury in a minimalist, eco-friendly tiny home.',
            synopsis: 'Love Shack is a modern, energy-efficient tiny home that combines style and functionality with a sleek design, clean lines, and high-quality finishes.',
            imageUrl: 'https://picsum.photos/id/100/200/300'
        }
    ];

    await Home.bulkCreate(homes);
};
