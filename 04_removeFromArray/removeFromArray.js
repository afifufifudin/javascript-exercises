const removeFromArray = (list, ...args) => {
    const newList = [];
    list.forEach(item => {
        if(!args.includes(item)){
            newList.push(item)
        }
    });
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
