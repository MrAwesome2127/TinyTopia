import { Home } from '../models';

export const seedHomes = async () => {
    const homes = [
        {
            modelName: 'Leviathan',
            price: 91000.00,
            feature: 'Discover smart design and sustainability in a luxurious tiny home with open floor plans and clever storage solutions.',
            synopsis: 'Leviathan redefines small living with smart design and elegance. It boasts an open floor plan with multi-functional spaces for maximum comfort and efficiency.',
            imageUrl: 'https://i.postimg.cc/qB5BBc62/37042d10-4d6f-4b2c-ba36-a944d8c5ea3e.png'
        },
        {
            modelName: 'Icarus',
            price: 85000.00,
            feature: 'Experience luxury in a minimalist, eco-friendly tiny home with vaulted ceilings and cutting-edge sustainability.',
            synopsis: 'Icarus is a modern, energy-efficient tiny home that combines style and functionality with a sleek design, clean lines, and high-quality finishes.',
            imageUrl: 'https://i.postimg.cc/wBMgd7xw/11904e9a-a9fc-4cbe-864e-eec27d9b9bc1.png'
        },
        {
            modelName: 'Clearance',
            price: 79999.99,
            feature: 'Embrace minimalist living in a sleek, compact space designed for maximum functionality and style.',
            synopsis: 'Clearance epitomizes minimalist living with sleek design and functional elegance, providing a sense of spaciousness within a compact footprint.',
            imageUrl: 'https://i.postimg.cc/jdhbwzL8/c1ba32af-7aae-410b-bf7e-b6749276b5d6.png'
        },
        {
            modelName: 'Mortedacy',
            price: 81000.00,
            feature: 'Revel in a sophisticated, compact living space designed for ultimate efficiency and modern elegance.',
            synopsis: 'Mortedacy combines sophisticated design with efficient living, creating a harmonious and luxurious space that balances comfort, style, and practicality.',
            imageUrl: 'https://i.postimg.cc/XYH6x4Kd/a1d663f0-c62e-4637-a6ee-c866ef0e9769.png'
        },
        {
            modelName: 'Love Shack',
            price: 100000.00,
            feature: 'Experience luxury in a minimalist, eco-friendly tiny home.',
            synopsis: 'Love Shack is a modern, energy-efficient tiny home that combines style and functionality with a sleek design, clean lines, and high-quality finishes.',
            imageUrl: 'https://i.postimg.cc/tR30whtX/090000c4-a14a-4adf-8c75-30db880d988b.png'
        }
    ];

    await Home.bulkCreate(homes);
};
