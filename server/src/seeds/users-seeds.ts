import {User} from '../models/user.js';

export const seedUsers = async () => {
    await User.bulkCreate([
        {
            userName: 'NathanE',
            password: 'RollBack',
            email: 'NathanE@fake.com',
            modelName_id: 4,
        },
        {
            userName: 'LeviF',
            password: 'Rollback',
            email: 'LeviF@fake.com',
            modelName_id: 3,
        },
        {
            userName: 'MattU',
            password: 'Rollback',
            email: 'MattU@fake.com',
            modelName_id: 2,
        },
        {
            userName: 'KassP',
            password: 'Rollback',
            email: 'KassP@fake.com',
            modelName_id: 1,
        },
        {
            userName: 'TimV',
            password: 'Rollback',
            email: 'TimV@fake.com',
            modelName_id: 5,
        },
        {
            userName: 'RyanB',
            password: 'Rollback',
            email: 'RyanB@fake.com',
            modelName_id: 6,
        },
    ]);
}