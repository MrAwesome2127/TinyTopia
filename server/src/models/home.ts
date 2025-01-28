import {DataTypes, Model, Sequelize, Optional} from 'sequelize';

interface HomeAttributes {
    id: number;
    modelName: string;
    synopsis: string;
    price: number;
    feature: string;
    imageUrl: string;
    }

export class Home extends Model<HomeAttributes, Optional<HomeAttributes, 'id'>> implements HomeAttributes {
    public id!: number;
    public modelName!: string;
    public synopsis!: string;
    public price!: number;
    public feature!: string;
    public readonly imageUrl!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function HomeFactory(sequelize: Sequelize) {
    Home.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        modelName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        synopsis: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        feature: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'Home',
    });
    return Home;
}
