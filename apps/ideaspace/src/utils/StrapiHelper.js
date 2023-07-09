export function cleanData(data) {
    return { id: data.id, ...data?.attributes };
}

export function cleanDataList(dataList) {
    return dataList.map(data => cleanData(data));
}