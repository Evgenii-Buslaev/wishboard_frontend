const sortList = (list, sort) => {
  if (sort === "date") {
    return list.sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  }
  if (sort === "created") {
    return list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
  }
  if (sort === "liked") {
    return list.sort((a, b) => (a.likes.length < b.likes.length ? 1 : -1));
  }
  if (sort === "disliked") {
    return list.sort((a, b) =>
      a.dislikes.length < b.dislikes.length ? 1 : -1
    );
  }
  return list.sort((a, b) => (a.title > b.title ? 1 : -1));
};

export { sortList };
