const bcryptjs = require("bcryptjs");

const genHash= (text) => {
    return bcryptjs.hashSync(text, Number(process.env.SALT_ROUND))
};


const compareHash = (text, hashtext) => {
    return bcryptjs.compareSync(text, hashtext);
};

module.exports= {genHash, compareHash};