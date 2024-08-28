const bcryptjs = require("bcryptjs");

const genHash = (text)=> {
return bcryptjs.hashSync(text, Number(process.env.SALT_ROUND));
};

const verifyHash = (text, hashText) => {
return bcryptjs.compareSync(text, hashText);
};

module.exports= {genHash, verifyHash}