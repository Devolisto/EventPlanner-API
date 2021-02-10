module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        organizer : {
            type: DataTypes.STRING,
            unique: true
        },
        name : {
            type: DataTypes.STRING,
            validate: {
                notContain: "event"
            }
        },
        email : {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        numOfSeats : {
            type: DataTypes.STRING,
            validate : {
                min: 0
            }
        },
        bookedSeats : {
            type: DataTypes.STRING
        },
        startDate : {
            type: DataTypes.STRING,
            validate : {
                isDate: true,
    
            }
        },
        endDate : {
            type: DataTypes.STRING,
            validate: {
                isDate: true,
                // notNull: true
            }
        },
        image : {
            type: DataTypes.STRING,
            validate: {
                // notNull: true
            }
        },
        
    })

    return Event;
}