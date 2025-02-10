import {User} from '../models';

export const seedUsers = async () => {
    await User.bulkCreate([
        {
            userName: 'NathanE',
            password: 'RollBack!234',
            email: 'NathanE@fake.com',
            modelName_id: 4,
        },
        {
            userName: 'LeviF',
            password: 'RollBack!234',
            email: 'LeviF@fake.com',
            modelName_id: 3,
        },
        {
            userName: 'MattU',
            password: 'RollBack!234',
            email: 'MattU@fake.com',
            modelName_id: 2,
        },
        {
            userName: 'KassP',
            password: 'RollBack!234',
            email: 'KassP@fake.com',
            modelName_id: 1,
        },
        {
            userName: 'TimV',
            password: 'RollBack!234',
            email: 'TimV@fake.com',
            modelName_id: 5,
        },
        {
            userName: 'RyanB',
            password: 'RollBack!234',
            email: 'RyanB@fake.com',
            modelName_id: 6,
        },
    ]);
}