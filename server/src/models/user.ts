import {DataTypes, Model, Sequelize, ModelStatic} from 'sequelize';

interface UserAttributes {
    userName: string;
    email: string;
    password: string;
    modelName_id: number
    }

export class User extends Model<UserAttributes> implements UserAttributes {
    public userName!: string;
    public email!: string;
    public password!: string;
    public modelName_id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: { Home: ModelStatic<Model> }) {
        User.hasMany(models.Home, {
            foreignKey: 'modelName_id',
        });
    }
}

export function UserFactory(sequelize: Sequelize) {
    User.init({
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelName_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'Home',
    });
    return User;
}
