export function cleanData(data) {
  return { id: data?.id, ...data?.attributes };
}

export function cleanDataList(dataList) {
  return dataList.map((data) => cleanData(data));
}

export function packageData(data) {
  const result = { data };
  delete result.data.id;
  return result;
}

export function cleanIdeaForPost(card) {
  let idea = packageData(card);
  idea.data.author = idea.data.author.id;
  idea.data.ideaOwner = idea.data.ideaOwner.id;
  idea.data.comments = idea.data.comments.data.map((c) => c.id);
  return idea;
}
