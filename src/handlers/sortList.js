const sortList = (list, sort) => {
  if (sort === "date") {
    return list.sort((a, b) => {
      return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
  } else {
    return list.sort((a, b) => (a.title > b.title ? 1 : -1));
  }
};

export { sortList };
