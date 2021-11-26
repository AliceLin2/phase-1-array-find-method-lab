function superbowlWin(record){
    const winRecord = record.find((current, index, array) => {
        return current.result === "W";
    })
    if (winRecord !== undefined){
        return winRecord.year;
    }
    return undefined;
}

